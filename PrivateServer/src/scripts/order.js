// order.js — Table4U · Realizar Pedido
// Busca pratos de GET /api/pratos e gerencia seleção/envio do pedido.

const CAT_CONFIG = {
    'Entradas':        { id: 'entradas',   label: 'Entradas',         icon: '🥗' },
    'Pratos': { id: 'principais', label: 'Pratos', icon: '🍽️' },
    'Bebidas':         { id: 'bebidas',    label: 'Bebidas',          icon: '🥤' },
    'Sobremesas':      { id: 'sobremesas', label: 'Sobremesas',       icon: '🍮' },
};
const CAT_ORDER = ['Entradas', 'Pratos', 'Bebidas', 'Sobremesas'];

const params  = new URLSearchParams(window.location.search);
const tableId = params.get('table') || '?';

let MENU      = [];       // [{ id, label, icon, items }]
const selection = {};     // { prato_id: { qty, note } }

// ── BUSCA CARDÁPIO DO BANCO ──
async function fetchMenu() {
    try {
        const res = await fetch('/api/pratos');
        if (!res.ok) throw new Error('Falha ao buscar pratos');
        const pratos = await res.json();

        const map = {};
        CAT_ORDER.forEach(cat => {
            const cfg = CAT_CONFIG[cat];
            if (cfg) map[cat] = { ...cfg, items: [] };
        });

        pratos.forEach(p => {
            if (p.disponivel === false) return;
            const catKey = CAT_CONFIG[p.categoria] ? p.categoria : null;
            if (!catKey) {
                // categoria desconhecida → cria dinamicamente
                if (!map[p.categoria]) {
                    map[p.categoria] = { id: 'cat-' + p.prato_id, label: p.categoria, icon: '🍽️', items: [] };
                }
                map[p.categoria].items.push(_toItem(p));
            } else {
                map[catKey].items.push(_toItem(p));
            }
        });

        MENU = Object.values(map).filter(cat => cat.items.length > 0);
    } catch (err) {
        console.error(err);
        MENU = [];
    }

    renderMenu();
    renderSidebarCategories();
}

function _toItem(p) {
    return {
        id:          p.prato_id,
        prato_id:    p.prato_id,
        name:        p.nome,
        price:       Number(p.preco),
        description: p.descricao || p.nome,
        emoji:       p.emoji || '🍽️',
    };
}

// ── RENDER CARDÁPIO ──
function renderMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (MENU.length === 0) {
        content.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted);">Nenhum prato disponível no momento.</div>';
        return;
    }

    MENU.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'category-section';
        section.innerHTML = `
            <div id="anchor-${cat.id}" style="height:1px;margin-top:-1px"></div>
            <div class="category-header">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-title">${cat.label}</span>
            </div>`;
        cat.items.forEach(dish => section.appendChild(buildDishCard(dish)));
        content.appendChild(section);
    });
}

function buildDishCard(dish) {
    const s    = selection[dish.id] || { qty: 0, note: '' };
    const card = document.createElement('div');
    card.className = `dish-card${s.qty > 0 ? ' has-quantity' : ''}${s.note ? ' has-note' : ''}`;
    card.id = `dish-${dish.id}`;
    card.innerHTML = `
        <div class="dish-main">
            <div class="dish-info">
                <div class="dish-name">${escHtml(dish.name)}</div>
                <div class="dish-price">R$ ${dish.price.toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="note-badge" title="Tem anotação"></div>
            <button class="dish-expand-btn" onclick="togglePanel(${dish.id})" aria-label="Detalhes">
                <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dish-qty">
                <button class="qty-btn" onclick="changeQty(${dish.id}, 1)">▲</button>
                <input class="qty-value" type="number" min="0" max="99" value="${s.qty}"
                    id="qty-${dish.id}"
                    onchange="setQty(${dish.id}, this.value)"
                    onkeydown="if(event.key==='Enter')this.blur()">
                <button class="qty-btn" onclick="changeQty(${dish.id}, -1)">▼</button>
            </div>
        </div>
        <div class="dish-panel">
            <p class="dish-description">${escHtml(dish.description)}</p>
            <div class="note-label">Anotação</div>
            <textarea class="note-input" id="note-${dish.id}"
                placeholder="Ex: sem cebola, molho à parte..."
                oninput="saveNote(${dish.id}, this.value)">${s.note}</textarea>
        </div>`;
    return card;
}

function renderSidebarCategories() {
    const container = document.getElementById('sidebar-categories');
    if (!container) return;
    container.innerHTML = '';
    MENU.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'nav-item category';
        btn.setAttribute('data-tooltip', cat.label);
        btn.innerHTML = `<div class="cat-dot"></div><span class="nav-label">${cat.icon} ${cat.label}</span>`;
        btn.addEventListener('click', () =>
            document.getElementById(`anchor-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        );
        container.appendChild(btn);
    });
}

// ── SELEÇÃO ──
function changeQty(id, delta) {
    setQty(id, (selection[id]?.qty || 0) + delta);
}

function setQty(id, raw) {
    const qty = Math.max(0, Math.min(99, parseInt(raw) || 0));
    if (!selection[id]) selection[id] = { qty: 0, note: '' };
    selection[id].qty = qty;
    const input = document.getElementById(`qty-${id}`);
    if (input) input.value = qty;
    document.getElementById(`dish-${id}`)?.classList.toggle('has-quantity', qty > 0);
    updateBadge();
}

function saveNote(id, value) {
    if (!selection[id]) selection[id] = { qty: 0, note: '' };
    selection[id].note = value.trim();
    document.getElementById(`dish-${id}`)?.classList.toggle('has-note', !!value.trim());
}

function togglePanel(id) {
    const card = document.getElementById(`dish-${id}`);
    card.classList.toggle('expanded');
    if (card.classList.contains('expanded')) {
        setTimeout(() => document.getElementById(`note-${id}`)?.focus(), 150);
    }
}

function updateBadge() {
    const total = Object.values(selection).reduce((s, v) => s + v.qty, 0);
    const el = document.getElementById('fab-badge');
    if (el) el.textContent = total;
}

function getSelectedItems() {
    const out = [];
    MENU.forEach(cat => cat.items.forEach(dish => {
        const s = selection[dish.id];
        if (s?.qty > 0) out.push({ ...dish, qty: s.qty, note: s.note || '' });
    }));
    return out;
}

function fmtPrice(n) {
    return 'R$ ' + Number(n).toFixed(2).replace('.', ',');
}

// ── MODAL DE REVISÃO ──
function openReviewModal() {
    const items = getSelectedItems();
    if (!items.length) { showToast('Nenhum item selecionado.'); return; }

    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('modal-subtitle').textContent =
        `Mesa ${tableId} · ${items.length} item${items.length > 1 ? 'ns' : ''} · ${fmtPrice(total)}`;

    document.getElementById('modal-body').innerHTML =
        items.map(i => `
            <div class="review-item">
                <div class="review-item-left">
                    <div class="review-item-name">${escHtml(i.name)}</div>
                    ${i.note ? `<div class="review-item-note">📝 ${escHtml(i.note)}</div>` : ''}
                </div>
                <div class="review-item-right">
                    <div class="review-item-qty">×${i.qty}</div>
                    <div class="review-item-price">${fmtPrice(i.price * i.qty)}</div>
                </div>
            </div>`).join('') +
        `<div class="review-total">
            <span class="review-total-label">Total desta rodada</span>
            <span class="review-total-value">${fmtPrice(total)}</span>
        </div>`;

    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ── CONFIRMAR PEDIDO ──
async function confirmOrder() {
    const items = getSelectedItems();
    if (!items.length) return;

    const btn = document.getElementById('btn-confirm-order');
    btn.disabled    = true;
    btn.textContent = 'Enviando...';

    try {
        const itens = items.map(i => ({ prato_id: i.prato_id, quantidade: i.qty }));
        const res = await fetch(`/api/mesas/${tableId}/pedidos`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({ itens })
        });
        if (!res.ok) throw new Error();
        closeReviewModal();
        showToast('✓ Pedido enviado para a cozinha!');
        setTimeout(() => { window.location.href = 'waiter.html'; }, 1200);
    } catch (_) {
        showToast('Erro ao enviar pedido. Tente novamente.');
        btn.disabled    = false;
        btn.textContent = 'Confirmar pedido';
    }
}

// ── CANCELAR ──
function handleCancel() {
    const hasItems = Object.values(selection).some(s => s.qty > 0);
    if (hasItems) document.getElementById('cancel-overlay').classList.add('open');
    else window.location.href = 'waiter.html';
}

function handleNavMesas(e) {
    const hasItems = Object.values(selection).some(s => s.qty > 0);
    if (hasItems) { e.preventDefault(); document.getElementById('cancel-overlay').classList.add('open'); }
}

function closeCancelModal() { document.getElementById('cancel-overlay').classList.remove('open'); }
function doCancel()         { window.location.href = 'waiter.html'; }

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
     T4U.requireAuth(['garcom', 'admin']);

    document.getElementById('topbar-title').textContent = `Pedido — Mesa ${tableId}`;

    document.getElementById('modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeReviewModal();
    });
    document.getElementById('cancel-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeCancelModal();
    });

    fetchMenu();
});