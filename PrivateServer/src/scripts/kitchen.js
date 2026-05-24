// kitchen.js — Table4U · Cozinha

// ── ESTADO ──
let pedidos = [];       // pedidos vindos do banco
let historico = [];     // finalizados nesta sessão
let kMenu = [];         // pratos do banco
let kMenuFilterCat = 'todos';
let reportTargetId = null;
let toggleKPendingId = null;

const AUDIT_KEY = 't4u-audit-log';

// ── NAVEGAÇÃO ──
const topbarTitles = { pedidos: 'Pedidos', historico: 'Histórico', menu: 'Menu' };
const topbarIcons = {
    pedidos:   `<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
    historico: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    menu:      `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`
};

function showSection(id, el) {
    document.querySelectorAll('.section-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('section-' + id).classList.add('active');
    if (el) el.classList.add('active');
    document.getElementById('topbar-title').textContent = topbarTitles[id] || id;
    document.getElementById('topbar-icon').innerHTML = topbarIcons[id] || '';
}

// ── FETCH PEDIDOS ──
async function fetchPedidos() {
    try {
        const res = await fetch('/api/pedidos-ativos');
        if (!res.ok) throw new Error();
        const data = await res.json();

        // Mantém estado de "done" dos itens já marcados nesta sessão
        pedidos = data.map(atd => {
            const existing = pedidos.find(p => p.atendimento_id === atd.atendimento_id);
            return {
                ...atd,
                itens: atd.itens.map(item => {
                    const existingItem = existing?.itens.find(i => i.pedido_id === item.pedido_id);
                    return { ...item, done: existingItem?.done || false };
                })
            };
        });

        renderPedidos();
    } catch (err) {
        console.error('Erro ao buscar pedidos:', err);
    }
}

// ── FETCH MENU ──
async function fetchMenu() {
    try {
        const res = await fetch('/api/pratos');
        if (!res.ok) throw new Error();
        const pratos = await res.json();
       kMenu = pratos.map(p => ({
    id:        p.prato_id,
    nome:      p.nome,
    cat:       p.categoria || 'Pratos',
    desc:      p.nome,
    emoji:     '🍽️',
    avail:     p.disponivel  // ← era true fixo, agora vem do banco
}));
    } catch (err) {
        console.error('Erro ao buscar menu:', err);
        kMenu = [];
    }
    renderKMenu();
}

// ── HELPERS ──
function allDone(pedido) { return pedido.itens.every(i => i.done); }
function progressPct(pedido) {
    const total = pedido.itens.length;
    const done  = pedido.itens.filter(i => i.done).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
}
function fmtTime(ts) {
    return new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
function formatKAuditTime(iso) {
    const d = new Date(iso);
    const pad = n => String(n).padStart(2, '0');
    return `${pad(d.getDate())}/${pad(d.getMonth()+1)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// ── RENDER PEDIDOS ──
function renderPedidos() {
    const list   = document.getElementById('pedidos-list');
    const badge  = document.getElementById('pedidos-count-badge');
    const sbadge = document.getElementById('sidebar-badge');

    badge.textContent  = `${pedidos.length} pedido${pedidos.length !== 1 ? 's' : ''}`;
    sbadge.textContent = pedidos.length;
    sbadge.style.display = pedidos.length === 0 ? 'none' : '';

    if (pedidos.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div class="empty-title">Tudo em dia!</div>
                <div class="empty-desc">Não há pedidos em andamento no momento. Novos pedidos aparecerão aqui automaticamente.</div>
            </div>`;
        return;
    }

    list.innerHTML = pedidos.map(p => {
        const pct  = progressPct(p);
        const done = allDone(p);
        const fillClass = pct === 100 ? 'done' : pct > 0 ? 'partial' : '';
        const hora = fmtTime(p.checkin);

        return `
            <div class="pedido-card${done ? ' all-done' : ''}" id="pedido-${p.atendimento_id}">
                <div class="pedido-card-header">
                    <span class="pedido-mesa-badge">Mesa ${p.mesa_id}</span>
                    <span class="pedido-hora">🕐 ${hora}</span>
                    <div class="pedido-progress">
                        <span class="pedido-progress-text">${p.itens.filter(i => i.done).length}/${p.itens.length}</span>
                        <div class="pedido-progress-track">
                            <div class="pedido-progress-fill ${fillClass}" style="width:${pct}%"></div>
                        </div>
                    </div>
                </div>
                <div class="pedido-itens">
                    ${p.itens.map((item, idx) => `
                        <div class="pedido-item${item.done ? ' item-done' : ''}" id="item-${p.atendimento_id}-${idx}">
                            <input type="checkbox" class="item-check" ${item.done ? 'checked' : ''}
                                onchange="toggleItem(${p.atendimento_id}, ${idx}, this.checked)"
                                aria-label="Marcar ${escHtml(item.nome)} como pronto">
                            <div class="pedido-item-info">
                                <div class="pedido-item-nome">${escHtml(item.nome)}</div>
                                <div class="pedido-item-obs" style="font-size:0.72rem;color:var(--text-muted);">×${item.quantidade}</div>
                            </div>
                        </div>`).join('')}
                </div>
                <div class="pedido-card-footer">
                    <button class="btn-report" onclick="openReport(${p.atendimento_id})">
                        <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                        Reportar
                    </button>
                    <button class="btn-pronto" onclick="finalizarPedido(${p.atendimento_id})"
                        ${done ? '' : 'disabled'} id="btn-pronto-${p.atendimento_id}">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        Pedido pronto
                    </button>
                </div>
            </div>`;
    }).join('');
}

// ── TOGGLE ITEM ──
function toggleItem(atdId, idx, checked) {
    const p = pedidos.find(x => x.atendimento_id === atdId);
    if (!p) return;
    p.itens[idx].done = checked;

    const itemEl = document.getElementById(`item-${atdId}-${idx}`);
    if (itemEl) itemEl.classList.toggle('item-done', checked);

    const pct  = progressPct(p);
    const done = allDone(p);
    const card = document.getElementById(`pedido-${atdId}`);
    if (card) {
        card.classList.toggle('all-done', done);
        const fill = card.querySelector('.pedido-progress-fill');
        const txt  = card.querySelector('.pedido-progress-text');
        if (fill) {
            fill.style.width  = pct + '%';
            fill.className = 'pedido-progress-fill' + (pct === 100 ? ' done' : pct > 0 ? ' partial' : '');
        }
        if (txt) txt.textContent = `${p.itens.filter(i => i.done).length}/${p.itens.length}`;
        const btnPronto = document.getElementById(`btn-pronto-${atdId}`);
        if (btnPronto) btnPronto.disabled = !done;
    }
}

// ── FINALIZAR PEDIDO ──
function finalizarPedido(atdId) {
    const p = pedidos.find(x => x.atendimento_id === atdId);
    if (!p || !allDone(p)) return;

    const card = document.getElementById(`pedido-${atdId}`);
    if (card) {
        card.classList.add('removing');
        card.addEventListener('animationend', () => {
            pedidos = pedidos.filter(x => x.atendimento_id !== atdId);
            historico.unshift({ ...p, horaFinalizado: fmtTime(Date.now()) });
            renderHistorico();
            renderPedidos();
        }, { once: true });
    }
    showToast(`✓ Pedido da Mesa ${p.mesa_id} finalizado`);
}

// ── HISTÓRICO ──
function renderHistorico() {
    const wrap  = document.getElementById('historico-wrap');
    const badge = document.getElementById('hist-count-badge');
    badge.textContent = `${historico.length} finalizado${historico.length !== 1 ? 's' : ''}`;

    if (historico.length === 0) {
        wrap.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div class="empty-title">Histórico vazio</div>
                <div class="empty-desc">Os pedidos finalizados aparecerão aqui ao longo do dia.</div>
            </div>`;
        return;
    }

    wrap.innerHTML = `
        <div class="hist-card">
            ${historico.map(p => `
                <div class="hist-row">
                    <span class="hist-mesa">Mesa ${p.mesa_id}</span>
                    <div class="hist-info">
                        <div class="hist-itens">${p.itens.map(i => escHtml(i.nome) + ' ×' + i.quantidade).join(', ')}</div>
                        <div class="hist-time">Check-in às ${fmtTime(p.checkin)} · Finalizado às ${p.horaFinalizado}</div>
                    </div>
                    <div class="hist-done-badge">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                        Pronto
                    </div>
                </div>`).join('')}
        </div>`;
}

// ── MODAL REPORT ──
function openReport(atdId) {
    reportTargetId = atdId;
    const p = pedidos.find(x => x.atendimento_id === atdId);
    document.getElementById('report-subtitle').textContent = `Mesa ${p ? p.mesa_id : '—'}`;
    document.getElementById('report-text').value = '';
    document.getElementById('char-count').textContent = '0';
    document.getElementById('modal-report').classList.add('open');
    setTimeout(() => document.getElementById('report-text').focus(), 80);
}

function closeModal() { document.getElementById('modal-report').classList.remove('open'); }
function closeModalBg(e) { if (e.target === document.getElementById('modal-report')) closeModal(); }
function updateChar() { document.getElementById('char-count').textContent = document.getElementById('report-text').value.length; }

function sendReport() {
    const msg = document.getElementById('report-text').value.trim();
    if (!msg) { document.getElementById('report-text').style.borderColor = 'var(--status-unavailable)'; return; }
    document.getElementById('report-text').style.borderColor = '';
    const p = pedidos.find(x => x.atendimento_id === reportTargetId);
    closeModal();
    showToast(`📢 Aviso enviado para a sala — Mesa ${p ? p.mesa_id : '—'}`);
}

// ── MENU (COZINHA) ──
function setKMenuFilter(cat, el) {
    kMenuFilterCat = cat;
    document.querySelectorAll('.kpill').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    renderKMenu();
}

function getKFiltered() {
    const q = (document.getElementById('kmenu-search')?.value || '').toLowerCase();
    return kMenu.filter(p =>
        (kMenuFilterCat === 'todos' || p.cat === kMenuFilterCat) &&
        (p.nome.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
    );
}

function renderKMenuStats() {
    const total   = kMenu.length;
    const avail   = kMenu.filter(p => p.avail).length;
    const unavail = total - avail;
    document.getElementById('kmenu-stats').innerHTML = `
        <div class="kmenu-stat"><div class="kmenu-stat-dot" style="background:var(--accent)"></div><span class="kmenu-stat-label">Total</span><span class="kmenu-stat-val">${total}</span></div>
        <div class="kmenu-stat"><div class="kmenu-stat-dot" style="background:var(--status-available)"></div><span class="kmenu-stat-label">Disponíveis</span><span class="kmenu-stat-val">${avail}</span></div>
        <div class="kmenu-stat"><div class="kmenu-stat-dot" style="background:var(--status-unavailable)"></div><span class="kmenu-stat-label">Indisponíveis</span><span class="kmenu-stat-val">${unavail}</span></div>`;
}

function renderKMenu() {
    renderKMenuStats();
    const grid = document.getElementById('kmenu-grid');
    const list = getKFiltered();

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="kmenu-empty">
                <div class="kmenu-empty-icon">
                    <svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
                </div>
                <div class="kmenu-empty-title">Nenhum prato encontrado</div>
                <div class="kmenu-empty-desc">Tente outro filtro ou busca.</div>
            </div>`;
        return;
    }

    const auditLog = loadAuditLog();
    grid.innerHTML = list.map(p => {
        const pratoLog = auditLog.filter(e => e.pratoId === p.id).slice(0, 5);
        const hasLog   = pratoLog.length > 0;
        const histItems = pratoLog.map(e => {
            const dot   = e.acao === 'desativar' ? 'desativar' : 'ativar';
            const label = e.acao === 'desativar' ? 'Desativado' : 'Ativado';
            const origem = e.origem === 'Admin' ? '(Admin)' : '(Cozinha)';
            return `
                <div class="kprato-hist-item">
                    <div class="kprato-hist-dot ${dot}"></div>
                    <div class="kprato-hist-content">
                        <div class="kprato-hist-motivo">${escHtml(e.motivo)}</div>
                        <div class="kprato-hist-meta">${label} por ${escHtml(e.usuario)} ${origem} · ${formatKAuditTime(e.timestamp)}</div>
                    </div>
                </div>`;
        }).join('');

        return `
            <div class="kprato-card ${p.avail ? 'available' : 'unavailable'}" id="kprato-${p.id}">
                <div class="kprato-main">
                    <div class="kprato-stripe"></div>
                    <div class="kprato-body">
                        <div class="kprato-top">
                            <span class="kprato-emoji">${escHtml(p.emoji)}</span>
                            <span class="kprato-name">${escHtml(p.nome)}</span>
                        </div>
                        <div class="kprato-cat">${escHtml(p.cat)}</div>
                        <div class="kprato-desc">${escHtml(p.desc)}</div>
                    </div>
                    <div class="kprato-side">
                        <button class="kprato-toggle ${p.avail ? 'on' : ''}" onclick="toggleKPrato(${p.id})" aria-label="Alternar disponibilidade">
                            <div class="kprato-toggle-knob"></div>
                        </button>
                        <span class="kprato-toggle-label">${p.avail ? 'On' : 'Off'}</span>
                    </div>
                </div>
                <div class="kprato-hist-panel" id="khist-${p.id}">
                    <div class="kprato-hist-title">
                        Histórico
                        ${hasLog ? `<span style="font-family:'IBM Plex Mono',monospace;font-size:0.62rem;color:var(--text-muted)">${pratoLog.length} evento${pratoLog.length !== 1 ? 's' : ''}</span>` : ''}
                    </div>
                    ${hasLog ? histItems : '<div class="kprato-hist-empty">Nenhuma alteração registrada.</div>'}
                </div>
                ${hasLog ? `
                    <div style="border-top:1px solid var(--border);display:flex;justify-content:center">
                        <button class="kprato-hist-btn" onclick="toggleKHist(${p.id})" id="khistbtn-${p.id}">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Ver histórico
                        </button>
                    </div>` : ''}
            </div>`;
    }).join('');
}

function toggleKHist(id) {
    const panel = document.getElementById('khist-' + id);
    const btn   = document.getElementById('khistbtn-' + id);
    if (!panel) return;
    const open = panel.classList.toggle('open');
    if (btn) btn.innerHTML = open
        ? `<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg> Ocultar histórico`
        : `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Ver histórico`;
}

function toggleKPrato(id) {
    const p = kMenu.find(x => x.id === id);
    if (!p) return;
    toggleKPendingId = id;
    const activating = !p.avail;
    const wrap = document.getElementById('tmodal-k-icon-wrap');
    const svg  = document.getElementById('tmodal-k-icon-svg');
    wrap.className = 'tmodal-icon-wrap ' + (activating ? 'activate' : 'deactivate');
    svg.innerHTML  = activating
        ? '<polyline points="20 6 9 17 4 12"/>'
        : '<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>';
    document.getElementById('tmodal-k-title').textContent     = activating ? 'Ativar prato' : 'Desativar prato';
    document.getElementById('tmodal-k-prato-name').textContent = p.nome;
    const textarea = document.getElementById('tmodal-k-motivo');
    textarea.value       = '';
    textarea.placeholder = activating
        ? 'Ex: Ingredientes disponíveis novamente.'
        : 'Ex: Ingrediente em falta, prato temporariamente retirado.';
    textarea.classList.remove('error');
    document.getElementById('tmodal-k-motivo-error').classList.remove('visible');
    const btn = document.getElementById('tmodal-k-confirm-btn');
    btn.className   = 'modal-btn ' + (activating ? 'activate' : 'deactivate');
    btn.textContent = activating ? 'Ativar' : 'Desativar';
    document.getElementById('modal-toggle-k').classList.add('open');
    setTimeout(() => textarea.focus(), 80);
}

function confirmToggleK() {
    const motivo = document.getElementById('tmodal-k-motivo').value.trim();
    if (!motivo) {
        document.getElementById('tmodal-k-motivo-error').classList.add('visible');
        document.getElementById('tmodal-k-motivo').classList.add('error');
        return;
    }
    const p = kMenu.find(x => x.id === toggleKPendingId);
    if (!p) return;
    const acao = p.avail ? 'desativar' : 'ativar';
    p.avail = !p.avail;

    // Persiste no banco
    fetch(`/api/pratos/${p.id}/disponibilidade`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disponivel: p.avail })
    }).catch(err => console.error('Erro ao salvar disponibilidade:', err));

    writeAuditLog({ prato: p.nome, pratoId: p.id, acao, motivo, usuario: 'Cozinha', origem: 'Cozinha' });
    closeToggleKModal();
    renderKMenu();
    showToast(p.avail ? `✓ ${p.nome} — disponível` : `${p.nome} — indisponível`);
}

function closeToggleKModal() {
    document.getElementById('modal-toggle-k').classList.remove('open');
    toggleKPendingId = null;
}

// ── AUDIT LOG ──
function loadAuditLog() {
    try { return JSON.parse(localStorage.getItem(AUDIT_KEY) || '[]'); } catch { return []; }
}
function saveAuditLog(log) { localStorage.setItem(AUDIT_KEY, JSON.stringify(log)); }
function writeAuditLog(entry) {
    const log = loadAuditLog();
    log.unshift({ id: Date.now(), timestamp: new Date().toISOString(), ...entry });
    saveAuditLog(log);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
    T4U.requireAuth(['cozinha', 'admin']);

    const user = T4U.getUser();
    if (user.role === 'admin') {
        document.getElementById('btn-voltar-admin')?.classList.remove('oculto');
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeModal(); closeToggleKModal(); }
    });

    await Promise.all([fetchPedidos(), fetchMenu()]);
    renderHistorico();

    // Polling: atualiza pedidos a cada 15 segundos
    setInterval(fetchPedidos, 15000);
});