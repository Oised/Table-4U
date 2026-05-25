// waiter.js — Table4U · Garçom

const STATUS_CFG = {
    available:   { icon: '🟢', label: 'Disponível',   meta: 'Pronta para receber clientes' },
    occupied:    { icon: '🔵', label: 'Ocupada',      meta: null },
    unavailable: { icon: '🔴', label: 'Indisponível', meta: 'Requer atenção antes de liberar' },
};

let tables = [];
let activeTableId = null;

// ── FETCH MESAS ──
async function fetchMesas() {
    try {
        const res = await fetch('/api/mesas');
        if (!res.ok) throw new Error('Erro ao buscar mesas');
        tables = await res.json();

        // Para cada mesa ocupada, busca os pedidos
        await Promise.all(tables.map(async t => {
            if (t.status === 'occupied') {
                try {
                    const r = await fetch(`/api/mesas/${t.mesa_id}/pedidos`);
                    t._pedidos = await r.json();
                } catch (_) {
                    t._pedidos = { pedidos: [] };
                }
            }
        }));

        renderTables();
    } catch (err) {
        console.error(err);
        showToast('Erro ao carregar mesas');
    }
}

// ── RENDER TABLES ──
function renderTables() {
    const grid = document.getElementById('tables-grid');
    grid.innerHTML = '';
    document.getElementById('table-count').textContent = `${tables.length} mesas`;

    tables.forEach(t => {
        const cfg = STATUS_CFG[t.status] || STATUS_CFG.available;
        const pedidos = t._pedidos?.pedidos || [];
        const totalItens = pedidos.reduce((s, p) => s + p.quantidade, 0);

        let meta = '';
        if (t.status === 'occupied' && t._pedidos) {
            const hora = t._pedidos.checkin
                ? new Date(t._pedidos.checkin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
                : '--';
            meta = `${t._pedidos.n_pessoas || '?'} pessoas · desde ${hora}`;
            if (totalItens > 0) meta += ` · ${totalItens} item${totalItens !== 1 ? 'ns' : ''}`;
        } else {
            meta = cfg.meta || `Capacidade: ${t.capacidade} pessoas`;
        }

        const card = document.createElement('div');
        card.className = `table-card ${t.status}`;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <div class="table-status-icon">${cfg.icon}</div>
            <div class="table-info">
                <div class="table-number">Mesa ${t.mesa_id}</div>
                <div class="table-meta">${meta}</div>
            </div>
            <span class="table-badge">${cfg.label}</span>
            <div class="table-chevron"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
        `;
        card.addEventListener('click', () => openModal(t.mesa_id));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') openModal(t.mesa_id);
        });
        grid.appendChild(card);
    });
}

// ── MODAL ──
async function openModal(mesaId) {
    const table = tables.find(t => t.mesa_id === mesaId);
    if (!table) return;
    activeTableId = mesaId;

    if (table.status === 'occupied') {
        try {
            const res = await fetch(`/api/mesas/${mesaId}/pedidos`);
            table._pedidos = await res.json();
        } catch (_) {}
    }

    const cfg = STATUS_CFG[table.status] || STATUS_CFG.available;
    document.getElementById('modal-icon').textContent = cfg.icon;
    document.getElementById('modal-icon').style.background =
        table.status === 'available'   ? 'var(--status-available-bg)'   :
        table.status === 'occupied'    ? 'var(--status-occupied-bg)'    :
                                         'var(--status-unavailable-bg)';
    document.getElementById('modal-title').textContent = `Mesa ${table.mesa_id}`;

    const pedidos = table._pedidos?.pedidos || [];
    const totalItens = pedidos.reduce((s, p) => s + p.quantidade, 0);
    document.getElementById('modal-subtitle').textContent =
        table.status === 'occupied' && table._pedidos
            ? `${table._pedidos.n_pessoas || '?'} pessoas · ${totalItens} item${totalItens !== 1 ? 'ns' : ''} · Cap. ${table.capacidade}`
            : `Capacidade: ${table.capacidade} pessoas`;

    renderModalBody(table);
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderModalBody(table) {
    const body = document.getElementById('modal-body');
    const pedidos = table._pedidos?.pedidos || [];

    if (table.status === 'available') {
        body.innerHTML = `
            <label class="checkin-label">Quantas pessoas? (máx. ${table.capacidade})</label>
            <div class="guest-counter">
                <button class="counter-btn" onclick="changeGuests(-1)">−</button>
                <span class="counter-value" id="guest-count">1</span>
                <button class="counter-btn" onclick="changeGuests(1)">+</button>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-primary-action" onclick="doCheckin()">
                    <svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                    Fazer check-in
                </button>
                <button class="modal-btn btn-danger-action" onclick="setMesaStatus(${table.mesa_id},'unavailable')">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                    Marcar como indisponível
                </button>
            </div>`;
        document.getElementById('guest-count')._value = 1;

    } else if (table.status === 'unavailable') {
        body.innerHTML = `
            <div class="modal-actions">
                <button class="modal-btn btn-warning-action" onclick="setMesaStatus(${table.mesa_id},'available')">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    Marcar como disponível
                </button>
            </div>`;

    } else if (table.status === 'occupied') {
        let pedidosHTML = '';
        if (pedidos.length > 0) {
            pedidosHTML = pedidos.map(p => `
                <div class="order-item">
                    <span class="order-item-name">${p.nome}</span>
                    <span class="order-item-qty">×${p.quantidade}</span>
                </div>`).join('');
        } else {
            pedidosHTML = `<div class="orders-empty">Nenhum pedido ainda.</div>`;
        }

        const hora = table._pedidos?.checkin
            ? new Date(table._pedidos.checkin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            : '--';

        body.innerHTML = `
            <div class="occupied-info" style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--status-occupied-bg);border:1px solid var(--status-occupied-border);border-radius:10px;margin-bottom:14px;font-size:0.83rem;color:var(--status-occupied);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span><strong>${table._pedidos?.n_pessoas || '?'} pessoa${table._pedidos?.n_pessoas !== 1 ? 's' : ''}</strong> · Check-in às ${hora}</span>
            </div>
            <div class="orders-section">
                <button class="orders-toggle-btn" id="orders-toggle-btn" onclick="toggleOrders()">
                    <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
                    Pedidos (${pedidos.length} item${pedidos.length !== 1 ? 'ns' : ''})
                </button>
                <div class="orders-list" id="orders-list">${pedidosHTML}</div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-primary-action" onclick="goToOrder()">
                    <svg viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    Realizar pedido
                </button>
                <button class="modal-btn btn-danger-action" onclick="goToCheckout()">
                    <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    Fechar conta
                </button>
            </div>`;
    }
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    activeTableId = null;
}

function changeGuests(delta) {
    const el = document.getElementById('guest-count');
    const table = tables.find(t => t.mesa_id === activeTableId);
    const max = table ? table.capacidade : 12;
    el._value = Math.max(1, Math.min(max, (el._value || 1) + delta));
    el.textContent = el._value;
}

function toggleOrders() {
    const list = document.getElementById('orders-list');
    const btn  = document.getElementById('orders-toggle-btn');
    const open = list.classList.toggle('visible');
    btn.classList.toggle('open', open);
}

// ── CHECKIN ──
async function doCheckin() {
    const table = tables.find(t => t.mesa_id === activeTableId);
    if (!table) return;
    const guests = document.getElementById('guest-count')._value || 1;
    try {
        const funcionario_id = parseInt(sessionStorage.getItem('usuario-id')) || null;
        const res = await fetch(`/api/mesas/${activeTableId}/checkin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ n_pessoas: guests, funcionario_id })
        });
        if (!res.ok) throw new Error();
        closeModal();
        showToast(`✓ Check-in — Mesa ${activeTableId}, ${guests} pessoa${guests > 1 ? 's' : ''}`);
        await fetchMesas();
    } catch (err) {
        showToast('Erro ao fazer check-in');
    }
}

// ── STATUS ──
async function setMesaStatus(mesaId, status) {
    try {
        const res = await fetch(`/api/mesas/${mesaId}/status`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        if (!res.ok) throw new Error();
        closeModal();
        const labels = { available: 'disponível', unavailable: 'indisponível' };
        showToast(`Mesa ${mesaId} marcada como ${labels[status]}`);
        await fetchMesas();
    } catch (err) {
        showToast('Erro ao atualizar status da mesa');
    }
}

// ── NAVEGAÇÃO ──
function goToOrder()    { window.location.href = `order.html?table=${activeTableId}`; }
function goToCheckout() { window.location.href = `checkout.html?table=${activeTableId}&origin=waiter`; }

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
     T4U.requireAuth(['garcom', 'admin']);

    document.getElementById('modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    await fetchMesas();
    setInterval(fetchMesas, 30000);
});