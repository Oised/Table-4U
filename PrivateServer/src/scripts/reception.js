// reception.js — Table4U · Recepção

const STATUS_CFG = {
    available:   { icon: '🟢', label: 'Disponível' },
    occupied:    { icon: '🔵', label: 'Ocupada' },
    unavailable: { icon: '🔴', label: 'Indisponível' },
};

let tables = [];
let activeTableId = null;

// ── FETCH MESAS ──
async function fetchMesas() {
    try {
        const res = await fetch('/api/mesas');
        if (!res.ok) throw new Error('Erro ao buscar mesas');
        tables = await res.json();
        renderTables();
    } catch (err) {
        console.error(err);
        showToast('Erro ao carregar mesas');
    }
}

// ── SEED (cria mesas se banco vazio) ──
async function seedMesas() {
    try {
        await fetch('/api/mesas/seed', { method: 'POST' });
        await fetchMesas();
    } catch (err) {
        console.error(err);
    }
}

// ── RENDER ──
function renderStats() {
    const counts = { available: 0, occupied: 0, unavailable: 0 };
    tables.forEach(t => counts[t.status]++);
    const total = tables.length;
    const ocupacao = total ? Math.round((counts.occupied / total) * 100) : 0;
    document.getElementById('stats-bar').innerHTML = `
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--status-available)"></div><span class="stat-chip-label">Disponíveis</span><span class="stat-chip-val">${counts.available}</span></div>
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--status-occupied)"></div><span class="stat-chip-label">Ocupadas</span><span class="stat-chip-val">${counts.occupied}</span></div>
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--status-unavailable)"></div><span class="stat-chip-label">Indisponíveis</span><span class="stat-chip-val">${counts.unavailable}</span></div>
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--accent)"></div><span class="stat-chip-label">Ocupação</span><span class="stat-chip-val">${ocupacao}%</span></div>`;
}

function renderTables() {
    const grid = document.getElementById('tables-grid');
    document.getElementById('table-count').textContent = `${tables.length} mesas`;
    renderStats();
    grid.innerHTML = tables.map(t => {
        const cfg = STATUS_CFG[t.status] || STATUS_CFG.available;
        const dots = Array.from({ length: t.capacidade }, (_, i) => {
            const filled = t.status === 'occupied' && t._atendimento && i < t._atendimento.n_pessoas;
            return `<div class="cap-dot${filled ? ' filled ' + t.status : ''}"></div>`;
        }).join('');
        let meta = '';
        if (t.status === 'occupied' && t._atendimento) {
            const hora = new Date(t._atendimento.checkin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            meta = `<strong>${t._atendimento.n_pessoas} de ${t.capacidade}</strong> pessoas · desde ${hora}`;
        } else if (t.status === 'available') {
            meta = `Capacidade: <strong>${t.capacidade}</strong> pessoas`;
        } else {
            meta = `Requer atenção antes de liberar`;
        }
        return `<div class="table-card ${t.status}" role="button" tabindex="0"
            onclick="openModal(${t.mesa_id})"
            onkeydown="if(event.key==='Enter'||event.key===' ')openModal(${t.mesa_id})">
            <div class="card-top"><span class="card-mesa-num">Mesa ${t.mesa_id}</span><span class="card-badge">${cfg.label}</span></div>
            <div class="card-icon">${cfg.icon}</div>
            <div class="card-meta">${meta}</div>
            <div class="capacity-dots">${dots}</div>
        </div>`;
    }).join('');
}

// ── MODAL ──
async function openModal(mesaId) {
    const table = tables.find(t => t.mesa_id === mesaId);
    if (!table) return;
    activeTableId = mesaId;

    // Busca atendimento ativo se ocupada
    if (table.status === 'occupied') {
        try {
            const res = await fetch(`/api/mesas/${mesaId}/atendimento-ativo`);
            table._atendimento = await res.json();
        } catch (_) {}
    }

    const cfg = STATUS_CFG[table.status] || STATUS_CFG.available;
    const iconBg = table.status === 'available' ? 'var(--status-available-bg)'
        : table.status === 'occupied' ? 'var(--status-occupied-bg)'
        : 'var(--status-unavailable-bg)';

    document.getElementById('modal-icon').textContent = cfg.icon;
    document.getElementById('modal-icon').style.background = iconBg;
    document.getElementById('modal-title').textContent = `Mesa ${table.mesa_id}`;
    document.getElementById('modal-subtitle').textContent =
        table.status === 'occupied' && table._atendimento
            ? `${table._atendimento.n_pessoas} pessoas · Check-in às ${new Date(table._atendimento.checkin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} · Cap. ${table.capacidade}`
            : `Capacidade: ${table.capacidade} pessoas`;

    buildModalBody(table);
    document.getElementById('modal-overlay').classList.add('open');
}

function buildModalBody(table) {
    const body = document.getElementById('modal-body');
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
        const atd = table._atendimento;
        body.innerHTML = `
            <div class="occupied-guests">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span><strong>${atd ? atd.n_pessoas : '?'} pessoa${atd && atd.n_pessoas !== 1 ? 's' : ''}</strong> · Check-in às ${atd ? new Date(atd.checkin).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '--'}</span>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-danger-action" onclick="doCheckout()">
                    <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    Fechar conta / liberar mesa
                </button>
            </div>`;
    }
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    activeTableId = null;
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function changeGuests(delta) {
    const el = document.getElementById('guest-count');
    const table = tables.find(t => t.mesa_id === activeTableId);
    const max = table ? table.capacidade : 12;
    el._value = Math.max(1, Math.min(max, (el._value || 1) + delta));
    el.textContent = el._value;
}

// ── CHECKIN ──
async function doCheckin() {
    const table = tables.find(t => t.mesa_id === activeTableId);
    if (!table) return;
    const guests = document.getElementById('guest-count')._value || 1;
    try {
        const res = await fetch(`/api/mesas/${activeTableId}/checkin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ n_pessoas: guests, funcionario_id: 1 })
        });
        if (!res.ok) throw new Error();
        closeModal();
        showToast(`✓ Check-in — Mesa ${activeTableId}, ${guests} pessoa${guests > 1 ? 's' : ''}`);
        await fetchMesas();
    } catch (err) {
        showToast('Erro ao fazer check-in');
    }
}

// ── CHECKOUT ──
async function doCheckout() {
    if (!activeTableId) return;
    try {
        const res = await fetch(`/api/mesas/${activeTableId}/checkout`, { method: 'POST' });
        if (!res.ok) throw new Error();
        closeModal();
        showToast(`✓ Mesa ${activeTableId} liberada`);
        await fetchMesas();
    } catch (err) {
        showToast('Erro ao fazer checkout');
    }
}

// ── MUDAR STATUS ──
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

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
     T4U.requireAuth(['recepcao', 'admin']);

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    await seedMesas();
    setInterval(fetchMesas, 30000);
});