// admin.js — Table4U · Admin
// Toda a lógica do painel administrativo

// ── NAVEGAÇÃO ──
const sectionTitles = {
    dashboard:    'Dashboard',
    restaurante:  'Restaurante',
    faturamento:  'Faturamento',
    menu:         'Pratos / Menu',
    funcionarios: 'Funcionários',
    filareservas: 'Fila e Reservas',
    auditlog:     'Histórico de alterações'
};
const sectionIcons = {
    dashboard:    `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
    restaurante:  `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    faturamento:  `<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    menu:         `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`,
    funcionarios: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`,
    filareservas: `<svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/></svg>`,
    auditlog:     `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
};

function showSection(id, navEl) {
    document.querySelectorAll('.section-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('section-' + id).classList.add('active');
    if (navEl) navEl.classList.add('active');
    document.getElementById('topbar-title').textContent = sectionTitles[id] || id;
    document.getElementById('topbar-icon').innerHTML   = sectionIcons[id]  || '';
    if (id === 'dashboard')    fetchDashboard();
    if (id === 'restaurante')  fetchMesasAdmin();
    if (id === 'menu')         fetchPratos();
    if (id === 'funcionarios') fetchFuncionarios();
    if (id === 'filareservas') loadFilaReservas();
    if (id === 'auditlog')     { updateAuditTabCounts(); renderAuditLog(); }
}

// ── DASHBOARD ──
async function fetchDashboard() {
    try {
        const res = await fetch('/api/dashboard');
        if (!res.ok) throw new Error();
        const d = await res.json();
        renderDashboard(d);
        fetchFaturamento7Dias();
        fetchVendasCategoria();
    } catch (_) {
        showToast('Erro ao carregar dashboard');
    }
}

async function fetchFaturamento7Dias() {
    try {
        const res = await fetch('/api/dashboard/faturamento-7dias');
        if (!res.ok) throw new Error();
        const dias = await res.json();
        renderFaturamento7Dias(dias);
    } catch (_) {
        console.error('Erro ao carregar faturamento 7 dias');
    }
}

async function fetchVendasCategoria() {
    try {
        const res = await fetch('/api/dashboard/vendas-categoria');
        if (!res.ok) throw new Error();
        const data = await res.json();
        renderVendasCategoria(data);
    } catch (_) {
        console.error('Erro ao carregar vendas por categoria');
    }
}

function renderFaturamento7Dias(dias) {
    const svg = document.querySelector('.bar-chart-group');
    if (!svg) return;
    
    const maxValor = Math.max(...dias.map(d => d.valor), 6000);
    const barWidth = 32;
    const spacing = 50;
    const baseY = 140;
    
    // Limpar barras antigas
    svg.querySelectorAll('.bar-rect').forEach(bar => bar.remove());
    
    // Limpar labels de dias antigos
    const textElements = svg.querySelectorAll('text[x]');
    textElements.forEach(text => {
        const yPos = text.getAttribute('y');
        if (yPos === '155') { // These are the day labels
            text.remove();
        }
    });
    
    dias.forEach((dia, i) => {
        const x = 30 + i * spacing;
        const height = (dia.valor / maxValor) * 120;
        const y = baseY - height;
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('class', 'bar-rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', barWidth);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', '#3a6ea5');
        rect.setAttribute('opacity', '0.8');
        rect.setAttribute('rx', '3');
        
        svg.appendChild(rect);
        
        // Add day label
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x + barWidth / 2);
        text.setAttribute('y', '155');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '11');
        text.setAttribute('fill', i === dias.length - 1 ? 'var(--text-primary)' : 'var(--text-muted)');
        if (i === dias.length - 1) text.setAttribute('font-weight', '600');
        text.textContent = dia.dia;
        
        svg.appendChild(text);
    });
}

function renderVendasCategoria(data) {
    const svg = document.querySelector('.donut-svg');
    if (!svg) return;
    
    const donutText = svg.querySelector('text[font-family="IBM Plex Mono"]');
    if (donutText) {
        donutText.textContent = fmt(data.total);
    }
    
    // Remover círculos antigos (mantendo apenas a base)
    const circles = svg.querySelectorAll('circle[stroke-dasharray]');
    circles.forEach(c => c.remove());
    
    const cx = 60, cy = 60, r = 45, circumference = 2 * Math.PI * r;
    const colors = ['#2c3e50', '#3a6ea5', '#16a34a', '#d97706', '#8b5cf6', '#ec4899', '#f59e0b'];
    
    let offset = 0;
    data.categorias.forEach((cat, i) => {
        const dashArray = (cat.percentual / 100) * circumference;
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', r);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', colors[i % colors.length]);
        circle.setAttribute('stroke-width', '18');
        circle.setAttribute('stroke-dasharray', `${dashArray} ${circumference}`);
        circle.setAttribute('stroke-dashoffset', `-${offset}`);
        circle.setAttribute('transform', 'rotate(-90 60 60)');
        
        svg.appendChild(circle);
        offset += dashArray;
    });
    
    // Atualizar legenda
    const legend = document.querySelector('.donut-legend');
    if (legend) {
        legend.innerHTML = data.categorias.map((cat, i) => `
            <div class="donut-legend-item">
                <div class="donut-legend-dot" style="background:${colors[i % colors.length]}"></div>
                <span class="donut-legend-label">${escHtml(cat.categoria)}</span>
                <span class="donut-legend-val">${cat.percentual}%</span>
            </div>
        `).join('');
    }
}

function fmt(n) { return 'R$ ' + Number(n).toFixed(2).replace('.', ','); }
function fmtHora(iso) {
    return new Date(iso).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function renderDashboard(d) {
    // KPIs
    document.getElementById('kpi-faturamento').textContent = fmt(d.faturamento);
    document.getElementById('kpi-clientes').textContent    = d.clientesAtendidos;
    document.getElementById('kpi-ocupacao').textContent    = d.ocupacao.pct + '%';
    document.getElementById('kpi-ocupacao-sub').textContent = `${d.ocupacao.ocupadas} de ${d.ocupacao.total} mesas`;
    document.getElementById('kpi-ticket').textContent      = fmt(d.ticketMedio);

    // Top pratos
    const topEl = document.getElementById('top-pratos-list');
    if (d.topPratos.length === 0) {
        topEl.innerHTML = '<div style="color:var(--text-muted);text-align:center;padding:20px;font-size:0.83rem;">Nenhum pedido hoje.</div>';
    } else {
        const max = d.topPratos[0]?.quantidade || 1;
        topEl.innerHTML = d.topPratos.map((p, i) => `
            <div class="list-row">
                <span class="list-rank">#${i + 1}</span>
                <div class="list-icon">${escHtml(p.emoji || '🍽️')}</div>
                <div style="flex:1;min-width:0">
                    <div class="list-name">${escHtml(p.nome)}</div>
                    <div class="list-bar-wrap"><div class="list-bar-fill" style="width:${Math.round((p.quantidade / max) * 100)}%"></div></div>
                </div>
                <span class="list-amount">×${p.quantidade}</span>
            </div>`).join('');
    }

    // Atividade recente
    const atEl = document.getElementById('atividade-list');
    if (d.atividade.length === 0) {
        atEl.innerHTML = '<div style="color:var(--text-muted);text-align:center;padding:20px;font-size:0.83rem;">Nenhuma atividade hoje.</div>';
    } else {
        atEl.innerHTML = d.atividade.map(a => {
            let cor = 'blue', texto = '';
            if (a.tipo === 'checkin') {
                cor = 'green';
                texto = `<strong>Mesa ${a.mesa_id}</strong> realizou check-in — ${a.pessoas} pessoa${a.pessoas !== 1 ? 's' : ''}`;
            } else if (a.tipo === 'checkout') {
                cor = 'green';
                texto = `<strong>Mesa ${a.mesa_id}</strong> encerrou conta — ${fmt(a.total)}`;
            } else if (a.tipo === 'pedido') {
                cor = 'blue';
                texto = `<strong>Mesa ${a.mesa_id}</strong> pediu ${escHtml(a.prato)} ×${a.quantidade}`;
            }
            return `<div class="activity-item">
                <div class="activity-dot ${cor}"></div>
                <div class="activity-text">${texto}</div>
                <div class="activity-time">${fmtHora(a.hora)}</div>
            </div>`;
        }).join('');
    }
}

// ── FUNCIONÁRIOS ──
const cargoLabels = {
    admin:    { label: 'Administrador', cls: 'admin' },
    garcom:   { label: 'Garçom',        cls: 'garcom' },
    cozinha:  { label: 'Cozinha',       cls: 'cozinha' },
    recepcao: { label: 'Recepção',      cls: 'recepcao' }
};
let funcionarios = [], pendingRemoveId = null, editingId = null;

async function fetchFuncionarios() {
    try {
        const res = await fetch('/api/funcionarios');
        const dbFuncs = await res.json();
        funcionarios = dbFuncs.map(f => ({
            id:    f.funcionario_id,
            nome:  f.nome,
            email: f.email,
            cargo: f.cargo || 'garcom'
        }));
        renderFuncionarios();
    } catch (err) { console.error(err); }
}

function getInitials(nome) {
    const p = nome.trim().split(' ').filter(Boolean);
    return p.length === 1 ? p[0][0].toUpperCase() : (p[0][0] + p[p.length - 1][0]).toUpperCase();
}

function renderFuncionarios() {
    const q = (document.getElementById('func-search').value || '').toLowerCase();
    const list = funcionarios.filter(f => f.nome.toLowerCase().includes(q) || f.email.toLowerCase().includes(q));
    document.getElementById('func-count').textContent = `${list.length} funcionário${list.length !== 1 ? 's' : ''}`;
    const tbody = document.getElementById('func-tbody');
    if (!list.length) {
        tbody.innerHTML = `<tr><td colspan="3"><div class="func-empty">
            <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            Nenhum funcionário encontrado.</div></td></tr>`;
        return;
    }
    tbody.innerHTML = list.map(f => {
        const cargo = cargoLabels[f.cargo] || { label: f.cargo, cls: 'garcom' };
        return `<tr>
            <td><div class="func-name-cell">
                <div class="func-avatar">${getInitials(f.nome)}</div>
                <div><div class="func-name">${escHtml(f.nome)}</div><div class="func-email">${escHtml(f.email)}</div></div>
            </div></td>
            <td><span class="func-role-badge ${cargo.cls}">${cargo.label}</span></td>
            <td><div class="func-actions">
                <button class="func-btn edit" onclick="openEditModal(${f.id})">
                    <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Gerenciar
                </button>
                <button class="func-btn remove" onclick="openRemoveModal(${f.id})">
                    <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                    Remover
                </button>
            </div></td>
        </tr>`;
    }).join('');
}

function openAddModal() {
    editingId = null;
    document.getElementById('edit-id').value = '';
    document.getElementById('input-nome').value = '';
    document.getElementById('input-email').value = '';
    document.getElementById('input-cargo').value = 'garcom';
    document.getElementById('input-edit-motivo').value = '';
    document.getElementById('edit-motivo-field').style.display = 'none';
    clearFuncErrors();
    document.getElementById('add-modal-title').textContent    = 'Adicionar funcionário';
    document.getElementById('add-modal-subtitle').textContent = 'Preencha os dados do novo membro';
    document.getElementById('add-modal-confirm-btn').textContent = 'Adicionar';
    openModal('modal-add');
    setTimeout(() => document.getElementById('input-nome').focus(), 80);
}

function openEditModal(id) {
    const f = funcionarios.find(x => x.id === id);
    if (!f) return;
    editingId = id;
    document.getElementById('edit-id').value        = id;
    document.getElementById('input-nome').value     = f.nome;
    document.getElementById('input-email').value    = f.email;
    document.getElementById('input-cargo').value    = f.cargo;
    document.getElementById('input-edit-motivo').value = '';
    document.getElementById('edit-motivo-field').style.display = '';
    clearFuncErrors();
    document.getElementById('add-modal-title').textContent    = 'Editar funcionário';
    document.getElementById('add-modal-subtitle').textContent = 'Altere os dados do funcionário';
    document.getElementById('add-modal-confirm-btn').textContent = 'Salvar alterações';
    openModal('modal-add');
    setTimeout(() => document.getElementById('input-nome').focus(), 80);
}

async function confirmAddEdit() {
    const nome  = document.getElementById('input-nome').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const cargo = document.getElementById('input-cargo').value;
    let valid = true;
    clearFuncErrors();
    if (!nome)  { showFuncError('error-nome', 'input-nome'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showFuncError('error-email', 'input-email'); valid = false; }
    if (editingId) {
        const motivo = document.getElementById('input-edit-motivo').value.trim();
        if (!motivo) {
            document.getElementById('error-edit-motivo').classList.add('visible');
            document.getElementById('input-edit-motivo').classList.add('error');
            valid = false;
        }
    }
    if (!valid) return;

    if (editingId) {
        const f = funcionarios.find(x => x.id === editingId);
        if (f) {
            const diff = [], cargoPtBR = k => cargoLabels[k]?.label || k;
            if (f.nome  !== nome)  diff.push({ campo: 'Nome',   de: f.nome,            para: nome });
            if (f.email !== email) diff.push({ campo: 'E-mail', de: f.email,           para: email });
            if (f.cargo !== cargo) diff.push({ campo: 'Cargo',  de: cargoPtBR(f.cargo), para: cargoPtBR(cargo) });
            const motivo = document.getElementById('input-edit-motivo').value.trim();
            try {
                const req = await fetch('/api/funcionarios/' + editingId, {
                    method: 'PUT', headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nome, email, cargo })
                });
                if (req.ok) {
                    f.nome = nome; f.email = email; f.cargo = cargo;
                    writeAuditFunc({ funcionario: nome, email, cargo, acao: 'editar', motivo, diff, usuario: 'Admin' });
                    showToast(`✓ ${nome} atualizado`);
                    closeModal('modal-add');
                    fetchFuncionarios();
                } else showToast('❌ Erro ao atualizar');
            } catch (e) { console.error(e); }
        }
    } else {
        try {
            const req = await fetch('/api/funcionarios', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, cargo })
            });
            if (req.ok) {
                writeAuditFunc({ funcionario: nome, email, cargo, acao: 'adicionar', usuario: 'Admin' });
                showToast(`✓ ${nome} adicionado`);
                closeModal('modal-add');
                fetchFuncionarios();
            } else showToast('❌ Erro ao salvar');
        } catch (e) { console.error(e); }
    }
}

function openRemoveModal(id) {
    const f = funcionarios.find(x => x.id === id);
    if (!f) return;
    pendingRemoveId = id;
    document.getElementById('remove-confirm-text').innerHTML = `Tem certeza que deseja remover <strong>${escHtml(f.nome)}</strong>?`;
    document.getElementById('remove-func-motivo').value = '';
    document.getElementById('remove-func-motivo-error').classList.remove('visible');
    document.getElementById('remove-func-motivo').classList.remove('error');
    openModal('modal-remove');
}

async function confirmRemove() {
    const f = funcionarios.find(x => x.id === pendingRemoveId);
    if (!f) return;
    const motivo = document.getElementById('remove-func-motivo').value.trim();
    if (!motivo) {
        document.getElementById('remove-func-motivo-error').classList.add('visible');
        document.getElementById('remove-func-motivo').classList.add('error');
        return;
    }
    try {
        const req = await fetch('/api/funcionarios/' + pendingRemoveId, { method: 'DELETE' });
        if (req.ok) {
            writeAuditFunc({ funcionario: f.nome, email: f.email, cargo: f.cargo, acao: 'remover', motivo, usuario: 'Admin' });
            showToast(`${f.nome} removido`);
            closeModal('modal-remove');
            fetchFuncionarios();
        } else showToast('❌ Erro ao remover');
    } catch (e) { console.error(e); }
    pendingRemoveId = null;
}

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function closeModalOnBg(e, id) { if (e.target === document.getElementById(id)) closeModal(id); }
function showFuncError(errId, inputId) { document.getElementById(errId).classList.add('visible'); document.getElementById(inputId).classList.add('error'); }
function clearFuncErrors() {
    ['error-nome', 'error-email', 'error-edit-motivo'].forEach(id => document.getElementById(id).classList.remove('visible'));
    ['input-nome', 'input-email', 'input-edit-motivo'].forEach(id => document.getElementById(id).classList.remove('error'));
}

// ── FILA E RESERVAS ──
async function chamarFila(id) {
    try { await fetch('/api/chamar-fila/' + id, { method: 'POST' }); loadFilaReservas(); showToast('Cliente chamado!'); }
    catch (err) { console.error(err); }
}
async function atenderFila(id) {
    try { await fetch('/api/atender-fila/' + id, { method: 'POST' }); loadFilaReservas(); showToast('Cliente atendido!'); }
    catch (err) { console.error(err); }
}
async function loadFilaReservas() {
    try {
        const [fRes, rRes] = await Promise.all([fetch('/api/todas-filas'), fetch('/api/todas-reservas')]);
        const filas = await fRes.json(), reservas = await rRes.json();

        document.getElementById('fila-count-dash').textContent = filas.length;
        const filaContainer = document.getElementById('fila-container');
        if (!filas.length) {
            filaContainer.innerHTML = '<div style="color:var(--text-muted);text-align:center;padding:20px;">Nenhum cliente na fila</div>';
        } else {
            filaContainer.innerHTML = filas.map(f => {
                const isSuaVez = f.status === 'sua vez chegou';
                const actionBtn = isSuaVez
                    ? `<button onclick="atenderFila(${f.id_fila})" style="background:var(--status-available);color:white;border:none;padding:4px 10px;border-radius:6px;font-weight:600;cursor:pointer;font-size:0.75rem;">Atender</button>`
                    : `<button onclick="chamarFila(${f.id_fila})" style="background:var(--accent);color:white;border:none;padding:4px 10px;border-radius:6px;font-weight:600;cursor:pointer;font-size:0.75rem;">Chamar</button>`;
                const sc = isSuaVez ? 'var(--status-available)' : 'var(--status-warning)';
                const sb = isSuaVez ? 'var(--status-available-bg)' : 'var(--status-warning-bg)';
                const sbr = isSuaVez ? 'var(--status-available-border)' : 'var(--status-warning-border)';
                return `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;border-bottom:1px solid var(--border);">
                    <div>
                        <div style="font-weight:600;color:var(--text-primary);font-size:0.85rem;">${f.Cliente ? f.Cliente.nome : 'Desconhecido'}</div>
                        <div style="font-size:0.75rem;color:var(--text-muted);">${new Date(f.data_entrada).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })} · ${f.numero_pessoas} pessoas</div>
                    </div>
                    <div style="display:flex;gap:8px;align-items:center;">
                        <span style="font-size:0.7rem;padding:3px 8px;border-radius:12px;background:${sb};color:${sc};border:1px solid ${sbr};">${f.status}</span>
                        ${actionBtn}
                    </div>
                </div>`;
            }).join('');
        }

        document.getElementById('reservas-count-dash').textContent = reservas.length;
        const reservasContainer = document.getElementById('reservas-container');
        if (!reservas.length) {
            reservasContainer.innerHTML = '<div style="color:var(--text-muted);text-align:center;padding:20px;">Sem reservas</div>';
        } else {
            reservasContainer.innerHTML = reservas.map(r => `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;border-bottom:1px solid var(--border);">
                    <div>
                        <div style="font-weight:600;color:var(--text-primary);font-size:0.95rem;margin-bottom:4px;">${r.Cliente ? r.Cliente.nome : 'Desconhecido'}</div>
                        <div style="font-size:1.15rem;font-weight:bold;color:var(--accent);margin-bottom:4px;">${new Date(r.data_reserva).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</div>
                        <div style="font-size:0.8rem;color:var(--text-muted);">${r.numero_pessoas} pessoas</div>
                    </div>
                    <span style="font-size:0.7rem;padding:3px 8px;border-radius:12px;background:var(--status-warning-bg);color:var(--status-warning);border:1px solid var(--status-warning-border);">${r.status}</span>
                </div>`).join('');
        }
    } catch (err) { console.error(err); }
}

// ── MENU / PRATOS ──
let pratoMenu = [], menuFilterCat = 'todos', pratoPendingDelId = null, pratoEditingId = null, pratoAvailState = true, toggleDispPendingId = null;

async function fetchPratos() {
    try {
        const res = await fetch('/api/pratos');
        if (!res.ok) throw new Error();
        pratoMenu = await res.json();
    } catch (_) { pratoMenu = []; }
    renderMenu();
}

function getFilteredMenu() {
    const q = (document.getElementById('menu-search')?.value || '').toLowerCase();
    return pratoMenu.filter(p =>
        (menuFilterCat === 'todos' || p.categoria === menuFilterCat) &&
        (p.nome.toLowerCase().includes(q) || (p.descricao || '').toLowerCase().includes(q) || (p.categoria || '').toLowerCase().includes(q))
    );
}
function setMenuFilter(cat, el) { menuFilterCat = cat; document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active')); el.classList.add('active'); renderMenu(); }
function renderMenuStats() {
    const total = pratoMenu.length, avail = pratoMenu.filter(p => p.disponivel !== false).length, unavail = total - avail, cats = [...new Set(pratoMenu.map(p => p.categoria))].length;
    document.getElementById('menu-stats-strip').innerHTML = `
        <div class="menu-stat"><div class="menu-stat-dot" style="background:var(--accent)"></div><span class="menu-stat-label">Total</span><span class="menu-stat-val">${total}</span></div>
        <div class="menu-stat"><div class="menu-stat-dot" style="background:var(--status-available)"></div><span class="menu-stat-label">Disponíveis</span><span class="menu-stat-val">${avail}</span></div>
        <div class="menu-stat"><div class="menu-stat-dot" style="background:var(--status-unavailable)"></div><span class="menu-stat-label">Indisponíveis</span><span class="menu-stat-val">${unavail}</span></div>
        <div class="menu-stat"><div class="menu-stat-dot" style="background:var(--status-warning)"></div><span class="menu-stat-label">Categorias</span><span class="menu-stat-val">${cats}</span></div>`;
}
function renderMenu() {
    renderMenuStats();
    const grid = document.getElementById('menu-grid'), list = getFilteredMenu();
    if (!list.length) {
        grid.innerHTML = `<div class="menu-empty" style="grid-column:1/-1">
            <div class="menu-empty-icon"><svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></div>
            <div class="menu-empty-title">Nenhum prato encontrado</div>
            <div class="menu-empty-desc">Tente outro filtro ou adicione um novo prato ao cardápio.</div>
        </div>`;
        return;
    }
    grid.innerHTML = list.map(p => {
        const avail = p.disponivel !== false;
        return `<div class="prato-card ${avail ? '' : 'unavailable'}">
            <div class="prato-card-top">
                <div class="prato-card-row1">
                    <span class="prato-emoji">${escHtml(p.emoji || '🍽️')}</span>
                    <span class="prato-status-badge ${avail ? 'available' : 'unavailable'}">${avail ? 'Disponível' : 'Indisponível'}</span>
                </div>
                <div class="prato-name">${escHtml(p.nome)}</div>
                <div class="prato-cat-badge">${escHtml(p.categoria || '')}</div>
                <div class="prato-desc">${escHtml(p.descricao || '')}</div>
                <div class="prato-price">R$ ${Number(p.preco).toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="prato-card-footer">
                <button class="prato-btn ${avail ? 'toggle-unavail' : 'toggle-avail'}" onclick="togglePratoDisp(${p.prato_id})">
                    <svg viewBox="0 0 24 24">${avail ? '<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>' : '<polyline points="20 6 9 17 4 12"/>'}</svg>
                    ${avail ? 'Desativar' : 'Ativar'}
                </button>
                <button class="prato-btn edit" onclick="openEditPratoModal(${p.prato_id})">
                    <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Editar
                </button>
                <button class="prato-btn del" onclick="openDelPratoModal(${p.prato_id})">
                    <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                </button>
            </div>
        </div>`;
    }).join('');
}

function togglePratoDisp(id) {
    const p = pratoMenu.find(x => x.prato_id === id); if (!p) return;
    toggleDispPendingId = id;
    const activating = p.disponivel === false;
    const wrap = document.getElementById('tmodal-icon-wrap'), svg = document.getElementById('tmodal-icon-svg');
    wrap.className = 'tmodal-icon-wrap ' + (activating ? 'activate' : 'deactivate');
    svg.innerHTML  = activating ? '<polyline points="20 6 9 17 4 12"/>' : '<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>';
    document.getElementById('tmodal-title').textContent      = activating ? 'Ativar prato' : 'Desativar prato';
    document.getElementById('tmodal-prato-name').textContent = p.nome;
    document.getElementById('tmodal-motivo').value           = '';
    document.getElementById('tmodal-motivo').placeholder     = activating ? 'Ex: Ingredientes disponíveis novamente.' : 'Ex: Ingrediente em falta.';
    document.getElementById('tmodal-motivo-error').classList.remove('visible');
    document.getElementById('tmodal-motivo').classList.remove('error');
    const btn = document.getElementById('tmodal-confirm-btn');
    btn.className   = 'pmodal-btn ' + (activating ? 'activate' : 'deactivate');
    btn.textContent = activating ? 'Ativar' : 'Desativar';
    document.getElementById('modal-toggle-disp').classList.add('open');
    setTimeout(() => document.getElementById('tmodal-motivo').focus(), 80);
}
async function confirmToggleDisp() {
    const motivo = document.getElementById('tmodal-motivo').value.trim();
    if (!motivo) { document.getElementById('tmodal-motivo-error').classList.add('visible'); document.getElementById('tmodal-motivo').classList.add('error'); return; }
    const p = pratoMenu.find(x => x.prato_id === toggleDispPendingId); if (!p) return;
    const novoDisponivel = p.disponivel === false;
    try {
        const res = await fetch(`/api/pratos/${p.prato_id}`, {
            method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: p.nome, preco: p.preco, custo: p.custo || 0, categoria: p.categoria, descricao: p.descricao, emoji: p.emoji, disponivel: novoDisponivel })
        });
        if (!res.ok) throw new Error();
        p.disponivel = novoDisponivel;
        writeAuditCardapio({ prato: p.nome, pratoId: p.prato_id, acao: novoDisponivel ? 'ativar' : 'desativar', motivo, usuario: 'Admin' });
        closeToggleDispModal(); renderMenu();
        showToast(novoDisponivel ? `✓ ${p.nome} — disponível` : `${p.nome} — indisponível`);
    } catch (_) { showToast('Erro ao atualizar disponibilidade'); }
}
function closeToggleDispModal() { document.getElementById('modal-toggle-disp').classList.remove('open'); toggleDispPendingId = null; }

function openAddPratoModal() {
    pratoEditingId = null; pratoAvailState = true;
    ['prato-edit-id','prato-nome','prato-preco','prato-desc','prato-emoji'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('prato-categoria').value = 'Entradas';
    document.getElementById('prato-avail-switch').classList.add('on');
    clearPratoErrors();
    document.getElementById('pmodal-title').textContent    = 'Adicionar prato';
    document.getElementById('pmodal-subtitle').textContent = 'Preencha as informações do novo prato';
    document.getElementById('pmodal-confirm-btn').textContent = 'Adicionar';
    document.getElementById('pmodal-icon').textContent = '🍽️';
    document.getElementById('modal-prato').classList.add('open');
    setTimeout(() => document.getElementById('prato-nome').focus(), 80);
}
function openEditPratoModal(id) {
    const p = pratoMenu.find(x => x.prato_id === id); if (!p) return;
    pratoEditingId = id; pratoAvailState = p.disponivel !== false;
    document.getElementById('prato-edit-id').value   = id;
    document.getElementById('prato-nome').value      = p.nome;
    document.getElementById('prato-categoria').value = p.categoria || 'Entradas';
    document.getElementById('prato-preco').value     = p.preco;
    document.getElementById('prato-desc').value      = p.descricao || '';
    document.getElementById('prato-emoji').value     = p.emoji || '';
    document.getElementById('prato-avail-switch').classList.toggle('on', pratoAvailState);
    clearPratoErrors();
    document.getElementById('pmodal-title').textContent    = 'Editar prato';
    document.getElementById('pmodal-subtitle').textContent = 'Altere as informações do prato';
    document.getElementById('pmodal-confirm-btn').textContent = 'Salvar alterações';
    document.getElementById('pmodal-icon').textContent = p.emoji || '🍽️';
    document.getElementById('modal-prato').classList.add('open');
    setTimeout(() => document.getElementById('prato-nome').focus(), 80);
}
function togglePratoAvail() { pratoAvailState = !pratoAvailState; document.getElementById('prato-avail-switch').classList.toggle('on', pratoAvailState); }
async function confirmPrato() {
    const nome      = document.getElementById('prato-nome').value.trim();
    const categoria = document.getElementById('prato-categoria').value;
    const preco     = parseFloat(document.getElementById('prato-preco').value);
    const descricao = document.getElementById('prato-desc').value.trim();
    const emoji     = document.getElementById('prato-emoji').value.trim() || '🍽️';
    let valid = true; clearPratoErrors();
    if (!nome)               { document.getElementById('prato-error-nome').classList.add('visible'); document.getElementById('prato-nome').classList.add('error'); valid = false; }
    if (isNaN(preco)||preco<0) { document.getElementById('prato-error-preco').classList.add('visible'); document.getElementById('prato-preco').classList.add('error'); valid = false; }
    if (!valid) return;
    const payload = { nome, preco, custo: 0, categoria, descricao, emoji, disponivel: pratoAvailState };
    try {
        let res;
        if (pratoEditingId) {
            const old = pratoMenu.find(x => x.prato_id === pratoEditingId);
            res = await fetch(`/api/pratos/${pratoEditingId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!res.ok) throw new Error();
            const updated = await res.json();
            const idx = pratoMenu.findIndex(x => x.prato_id === pratoEditingId);
            if (idx >= 0) pratoMenu[idx] = updated;
            const diff = [];
            if (old) {
                if (old.nome      !== nome)      diff.push({ campo: 'Nome',      de: old.nome,      para: nome });
                if (Number(old.preco) !== preco) diff.push({ campo: 'Preço',     de: `R$${Number(old.preco).toFixed(2)}`, para: `R$${preco.toFixed(2)}` });
                if (old.categoria !== categoria) diff.push({ campo: 'Categoria', de: old.categoria, para: categoria });
            }
            writeAuditCardapio({ prato: nome, pratoId: pratoEditingId, acao: 'editar', diff, usuario: 'Admin' });
            showToast(`✓ ${nome} atualizado`);
        } else {
            res = await fetch('/api/pratos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!res.ok) throw new Error();
            const created = await res.json();
            pratoMenu.push(created);
            writeAuditCardapio({ prato: nome, pratoId: created.prato_id, acao: 'adicionar', usuario: 'Admin' });
            showToast(`✓ ${nome} adicionado ao cardápio`);
        }
        closePratoModal(); renderMenu();
    } catch (_) { showToast('Erro ao salvar prato'); }
}
function clearPratoErrors() {
    ['prato-error-nome','prato-error-preco'].forEach(id => document.getElementById(id).classList.remove('visible'));
    ['prato-nome','prato-preco'].forEach(id => document.getElementById(id).classList.remove('error'));
}
function closePratoModal()        { document.getElementById('modal-prato').classList.remove('open'); }
function closePratoModalOnBg(e)   { if (e.target === document.getElementById('modal-prato')) closePratoModal(); }
function openDelPratoModal(id) {
    const p = pratoMenu.find(x => x.prato_id === id); if (!p) return;
    pratoPendingDelId = id;
    document.getElementById('del-prato-subtitle').textContent = p.nome;
    document.getElementById('del-prato-text').innerHTML = `Tem certeza que deseja remover <strong>${escHtml(p.nome)}</strong>?`;
    document.getElementById('del-prato-motivo').value = '';
    document.getElementById('del-prato-motivo-error').classList.remove('visible');
    document.getElementById('del-prato-motivo').classList.remove('error');
    document.getElementById('modal-del-prato').classList.add('open');
}
async function confirmDelPrato() {
    const p = pratoMenu.find(x => x.prato_id === pratoPendingDelId); if (!p) return;
    const motivo = document.getElementById('del-prato-motivo').value.trim();
    if (!motivo) { document.getElementById('del-prato-motivo-error').classList.add('visible'); document.getElementById('del-prato-motivo').classList.add('error'); return; }
    try {
        const res = await fetch(`/api/pratos/${pratoPendingDelId}`, { method: 'DELETE' });
        if (!res.ok) throw new Error();
        writeAuditCardapio({ prato: p.nome, pratoId: pratoPendingDelId, acao: 'remover', motivo, usuario: 'Admin' });
        pratoMenu = pratoMenu.filter(x => x.prato_id !== pratoPendingDelId);
        pratoPendingDelId = null;
        closeDelPratoModal(); renderMenu();
        showToast(`${p.nome} removido do cardápio`);
    } catch (_) { showToast('Erro ao remover prato'); }
}
function closeDelPratoModal() { document.getElementById('modal-del-prato').classList.remove('open'); pratoPendingDelId = null; }

// ── AUDIT LOG ──
const AUDIT_KEY_CARDAPIO = 't4u-audit-cardapio';
const AUDIT_KEY_FUNC     = 't4u-audit-func';

function loadAuditLog(key)      { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; } }
function saveAuditLog(key, log) { localStorage.setItem(key, JSON.stringify(log)); }
function writeAuditCardapio(entry) { const log = loadAuditLog(AUDIT_KEY_CARDAPIO); log.unshift({ id: Date.now(), timestamp: new Date().toISOString(), ...entry }); saveAuditLog(AUDIT_KEY_CARDAPIO, log); updateAuditTabCounts(); }
function writeAuditFunc(entry)     { const log = loadAuditLog(AUDIT_KEY_FUNC);     log.unshift({ id: Date.now(), timestamp: new Date().toISOString(), ...entry }); saveAuditLog(AUDIT_KEY_FUNC,     log); updateAuditTabCounts(); }

let auditCurrentTab = 'cardapio', auditFilterCardapio = 'todos', auditFilterFunc = 'todos', auditFilterPedidos = 'todos', auditFilterMesas = 'todos';
let auditPedidosDB = [], auditMesasDB = [];

function setAuditTab(tab, el) {
    auditCurrentTab = tab;
    document.querySelectorAll('.audit-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.audit-tab-panel').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('audit-panel-' + tab).classList.add('active');
    renderAuditLog();
}

async function updateAuditTabCounts() {
    const cardapio    = loadAuditLog(AUDIT_KEY_CARDAPIO).length;
    const funcionarios = loadAuditLog(AUDIT_KEY_FUNC).length;
    const elC = document.getElementById('tab-count-cardapio');
    const elF = document.getElementById('tab-count-funcionarios');
    const elP = document.getElementById('tab-count-pedidos');
    const elM = document.getElementById('tab-count-mesas');
    if (elC) elC.textContent = cardapio    > 0 ? cardapio    : '';
    if (elF) elF.textContent = funcionarios > 0 ? funcionarios : '';
    if (elP) elP.textContent = auditPedidosDB.length > 0 ? auditPedidosDB.length : '';
    if (elM) elM.textContent = auditMesasDB.length   > 0 ? auditMesasDB.length   : '';
}

function formatAuditTime(iso) {
    const d = new Date(iso), hoje = new Date(), ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);
    const pad = n => String(n).padStart(2, '0');
    const hora = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    if (d.toDateString() === hoje.toDateString())  return `Hoje, ${hora}`;
    if (d.toDateString() === ontem.toDateString()) return `Ontem, ${hora}`;
    return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}, ${hora}`;
}
function filterByDate(log, dateVal) {
    if (!dateVal) return log;
    return log.filter(e => {
        const d = new Date(e.timestamp || e.hora || e.checkin);
        const pad = n => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}` === dateVal;
    });
}

function setAuditFilterCardapio(val, el) { auditFilterCardapio = val; document.querySelectorAll('#audit-filter-pills-cardapio .audit-pill').forEach(p => p.classList.remove('active')); el.classList.add('active'); renderAuditCardapio(); }
function setAuditFilterFunc(val, el)     { auditFilterFunc     = val; document.querySelectorAll('#audit-filter-pills-func .audit-pill').forEach(p => p.classList.remove('active'));     el.classList.add('active'); renderAuditFunc(); }
function setAuditFilterPedidos(val, el)  { auditFilterPedidos  = val; document.querySelectorAll('#audit-filter-pills-pedidos .audit-pill').forEach(p => p.classList.remove('active'));  el.classList.add('active'); renderAuditPedidos(); }
function setAuditFilterMesas(val, el)    { auditFilterMesas    = val; document.querySelectorAll('#audit-filter-pills-mesas .audit-pill').forEach(p => p.classList.remove('active'));    el.classList.add('active'); renderAuditMesas(); }

const CARDAPIO_ACTION_LABELS = {
    adicionar: { label: 'Adicionado', icon: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' },
    editar:    { label: 'Editado',    icon: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>' },
    remover:   { label: 'Removido',   icon: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>' },
    desativar: { label: 'Desativado', icon: '<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>' },
    ativar:    { label: 'Ativado',    icon: '<polyline points="20 6 9 17 4 12"/>' }
};
const FUNC_ACTION_LABELS = {
    adicionar: { label: 'Adicionado', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
    editar:    { label: 'Editado',    icon: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>' },
    remover:   { label: 'Removido',   icon: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>' }
};

function renderAuditEmpty(total, tipo) {
    return `<div class="audit-empty"><div class="audit-empty-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <div class="audit-empty-title">${total === 0 ? 'Nenhuma alteração registrada ainda' : 'Nenhum resultado para o filtro'}</div>
        <div class="audit-empty-desc">${total === 0 ? 'Quando houver uma ação registrada, ela aparecerá aqui.' : `Tente outro filtro ou busca por ${tipo}.`}</div>
    </div>`;
}

function renderAuditCardapio() {
    const log = loadAuditLog(AUDIT_KEY_CARDAPIO);
    const dateVal = document.getElementById('audit-date-cardapio')?.value || '';
    const q       = (document.getElementById('audit-search-cardapio')?.value || '').toLowerCase();
    const filtered = filterByDate(log, dateVal).filter(e => {
        const matchAcao = auditFilterCardapio === 'todos' || e.acao === auditFilterCardapio;
        const matchQ    = !q || (e.prato||'').toLowerCase().includes(q) || (e.motivo||'').toLowerCase().includes(q);
        return matchAcao && matchQ;
    });
    const total = log.length, adds = log.filter(e=>e.acao==='adicionar').length, edits = log.filter(e=>e.acao==='editar').length, dels = log.filter(e=>e.acao==='remover').length;
    document.getElementById('audit-stats-cardapio').innerHTML = `
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--accent)"></div><span class="audit-stat-label">Total</span><span class="audit-stat-val">${total}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-occupied)"></div><span class="audit-stat-label">Adições</span><span class="audit-stat-val">${adds}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-warning)"></div><span class="audit-stat-label">Edições</span><span class="audit-stat-val">${edits}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-unavailable)"></div><span class="audit-stat-label">Remoções</span><span class="audit-stat-val">${dels}</span></div>`;
    const wrap = document.getElementById('audit-log-cardapio');
    if (!filtered.length) { wrap.innerHTML = renderAuditEmpty(total, 'prato'); return; }
    wrap.innerHTML = filtered.map(e => {
        const def = CARDAPIO_ACTION_LABELS[e.acao] || { label: e.acao, icon: '' };
        const motivoHtml = e.motivo ? `<div class="audit-entry-motivo">${escHtml(e.motivo)}</div>` : '';
        const diffHtml   = e.diff?.length ? `<div class="audit-entry-diff">${e.diff.map(d => `<div class="audit-diff-row"><span class="audit-diff-field">${escHtml(d.campo)}</span><span class="audit-diff-old">${escHtml(String(d.de))}</span><svg style="width:11px;height:11px;flex-shrink:0;fill:none;stroke:var(--text-muted);stroke-width:2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="audit-diff-new">${escHtml(String(d.para))}</span></div>`).join('')}</div>` : '';
        return `<div class="audit-entry"><div class="audit-entry-icon ${e.acao}"><svg viewBox="0 0 24 24">${def.icon}</svg></div><div class="audit-entry-body"><div class="audit-entry-main"><span class="audit-entry-prato">${escHtml(e.prato||'')}</span><span class="audit-entry-action ${e.acao}">${def.label}</span></div>${motivoHtml}${diffHtml}<div class="audit-entry-meta"><span class="audit-entry-user"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${escHtml(e.usuario||'Admin')}</span><span class="audit-entry-time">${formatAuditTime(e.timestamp)}</span></div></div></div>`;
    }).join('');
}

function renderAuditFunc() {
    const log = loadAuditLog(AUDIT_KEY_FUNC);
    const dateVal = document.getElementById('audit-date-func')?.value || '';
    const q       = (document.getElementById('audit-search-func')?.value || '').toLowerCase();
    const filtered = filterByDate(log, dateVal).filter(e => {
        const matchAcao = auditFilterFunc === 'todos' || e.acao === auditFilterFunc;
        const matchQ    = !q || (e.funcionario||'').toLowerCase().includes(q) || (e.email||'').toLowerCase().includes(q) || (e.motivo||'').toLowerCase().includes(q);
        return matchAcao && matchQ;
    });
    const total = log.length, adds = log.filter(e=>e.acao==='adicionar').length, edits = log.filter(e=>e.acao==='editar').length, dels = log.filter(e=>e.acao==='remover').length;
    document.getElementById('audit-stats-func').innerHTML = `
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--accent)"></div><span class="audit-stat-label">Total</span><span class="audit-stat-val">${total}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-available)"></div><span class="audit-stat-label">Adições</span><span class="audit-stat-val">${adds}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-warning)"></div><span class="audit-stat-label">Edições</span><span class="audit-stat-val">${edits}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-unavailable)"></div><span class="audit-stat-label">Remoções</span><span class="audit-stat-val">${dels}</span></div>`;
    const wrap = document.getElementById('audit-log-func');
    if (!filtered.length) { wrap.innerHTML = renderAuditEmpty(total, 'funcionário'); return; }
    wrap.innerHTML = filtered.map(e => {
        const def = FUNC_ACTION_LABELS[e.acao] || { label: e.acao, icon: '' };
        const cargoLabel = e.cargo ? (cargoLabels[e.cargo]?.label || e.cargo) : '';
        const motivoHtml = e.motivo ? `<div class="audit-entry-motivo">${escHtml(e.motivo)}</div>` : '';
        const diffHtml   = e.diff?.length ? `<div class="audit-entry-diff">${e.diff.map(d => `<div class="audit-diff-row"><span class="audit-diff-field">${escHtml(d.campo)}</span><span class="audit-diff-old">${escHtml(String(d.de))}</span><svg style="width:11px;height:11px;flex-shrink:0;fill:none;stroke:var(--text-muted);stroke-width:2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><span class="audit-diff-new">${escHtml(String(d.para))}</span></div>`).join('')}</div>` : '';
        return `<div class="audit-entry"><div class="audit-entry-icon ${e.acao}"><svg viewBox="0 0 24 24">${def.icon}</svg></div><div class="audit-entry-body"><div class="audit-entry-main"><span class="audit-entry-prato">${escHtml(e.funcionario||'')}</span><span class="audit-entry-action ${e.acao}">${def.label}</span>${cargoLabel?`<span class="audit-entry-origin">${escHtml(cargoLabel)}</span>`:''}</div>${e.email?`<div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:4px">${escHtml(e.email)}</div>`:''}${motivoHtml}${diffHtml}<div class="audit-entry-meta"><span class="audit-entry-user"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${escHtml(e.usuario||'Admin')}</span><span class="audit-entry-time">${formatAuditTime(e.timestamp)}</span></div></div></div>`;
    }).join('');
}

async function renderAuditPedidos() {
    const dateVal = document.getElementById('audit-date-pedidos')?.value || '';
    const q       = (document.getElementById('audit-search-pedidos')?.value || '').toLowerCase();

    try {
        const params = dateVal ? `?de=${dateVal}&ate=${dateVal}` : '';
        const res = await fetch('/api/audit/pedidos' + params);
        auditPedidosDB = await res.json();
    } catch (_) { auditPedidosDB = []; }

    const filtered = auditPedidosDB.filter(e => {
        const matchStatus = auditFilterPedidos === 'todos' ||
            (auditFilterPedidos === 'aberto'   && !e.checkout) ||
            (auditFilterPedidos === 'fechado'  &&  e.checkout);
        const matchQ = !q || String(e.mesa||'').toLowerCase().includes(q) || (e.responsavel||'').toLowerCase().includes(q) ||
            e.itens.some(i => i.nome.toLowerCase().includes(q));
        return matchStatus && matchQ;
    });

    const total    = auditPedidosDB.length;
    const abertos  = auditPedidosDB.filter(e => !e.checkout).length;
    const fechados = auditPedidosDB.filter(e =>  e.checkout).length;
    const totalFat = auditPedidosDB.reduce((s, e) => s + e.total, 0);

    document.getElementById('audit-stats-pedidos').innerHTML = `
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--accent)"></div><span class="audit-stat-label">Atendimentos</span><span class="audit-stat-val">${total}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-occupied)"></div><span class="audit-stat-label">Abertos</span><span class="audit-stat-val">${abertos}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-available)"></div><span class="audit-stat-label">Fechados</span><span class="audit-stat-val">${fechados}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-warning)"></div><span class="audit-stat-label">Faturamento</span><span class="audit-stat-val">R$${totalFat.toFixed(2).replace('.',',')}</span></div>`;

    const wrap = document.getElementById('audit-log-pedidos');
    if (!filtered.length) { wrap.innerHTML = renderAuditEmpty(total, 'mesa ou garçom'); updateAuditTabCounts(); return; }

    wrap.innerHTML = filtered.map(e => {
        const statusCls  = e.checkout ? 'activate' : 'editar';
        const statusLabel = e.checkout ? 'Fechado' : 'Aberto';
        const itensHtml  = e.itens.length ? `<div class="audit-entry-diff">${e.itens.map(i => `<div class="audit-diff-row"><span class="audit-diff-field">${escHtml(i.nome)}</span><span style="color:var(--text-muted)">×${i.quantidade} — R$${i.subtotal.toFixed(2).replace('.',',')}</span></div>`).join('')}</div>` : '';
        return `<div class="audit-entry">
            <div class="audit-entry-icon ${statusCls}"><svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg></div>
            <div class="audit-entry-body">
                <div class="audit-entry-main">
                    <span class="audit-entry-prato">Mesa ${e.mesa}</span>
                    <span class="audit-entry-action ${statusCls}">${statusLabel}</span>
                    <span class="audit-entry-origin">R$ ${e.total.toFixed(2).replace('.',',')}</span>
                    <span class="audit-entry-origin">👥 ${e.n_pessoas} pessoa${e.n_pessoas!==1?'s':''}</span>
                </div>
                ${itensHtml}
                <div class="audit-entry-meta">
                    <span class="audit-entry-user"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${escHtml(e.responsavel)}</span>
                    <span class="audit-entry-time">${formatAuditTime(e.checkin)}</span>
                    ${e.checkout ? `<span class="audit-entry-origin">Fechado ${formatAuditTime(e.checkout)}</span>` : ''}
                </div>
            </div>
        </div>`;
    }).join('');
    updateAuditTabCounts();
}

async function renderAuditMesas() {
    const dateVal = document.getElementById('audit-date-mesas')?.value || '';
    const q       = (document.getElementById('audit-search-mesas')?.value || '').toLowerCase();

    try {
        const params = dateVal ? `?de=${dateVal}&ate=${dateVal}` : '';
        const res = await fetch('/api/audit/mesas' + params);
        auditMesasDB = await res.json();
    } catch (_) { auditMesasDB = []; }

    const filtered = auditMesasDB.filter(e => {
        const matchEvento = auditFilterMesas === 'todos' || e.evento === auditFilterMesas;
        const matchQ      = !q || String(e.mesa||'').toLowerCase().includes(q) || (e.responsavel||'').toLowerCase().includes(q);
        return matchEvento && matchQ;
    });

    const total    = auditMesasDB.length;
    const checkins  = auditMesasDB.filter(e => e.evento === 'checkin').length;
    const checkouts = auditMesasDB.filter(e => e.evento === 'checkout').length;

    document.getElementById('audit-stats-mesas').innerHTML = `
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--accent)"></div><span class="audit-stat-label">Total</span><span class="audit-stat-val">${total}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-available)"></div><span class="audit-stat-label">Check-ins</span><span class="audit-stat-val">${checkins}</span></div>
        <div class="audit-stat"><div class="audit-stat-dot" style="background:var(--status-occupied)"></div><span class="audit-stat-label">Check-outs</span><span class="audit-stat-val">${checkouts}</span></div>`;

    const wrap = document.getElementById('audit-log-mesas');
    if (!filtered.length) { wrap.innerHTML = renderAuditEmpty(total, 'mesa ou responsável'); updateAuditTabCounts(); return; }

    const cfgMap = {
        checkin:  { label: 'Check-in',  cls: 'activate',   icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>' },
        checkout: { label: 'Check-out', cls: 'adicionar',  icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' }
    };

    wrap.innerHTML = filtered.map(e => {
        const cfg = cfgMap[e.evento] || cfgMap.checkin;
        return `<div class="audit-entry">
            <div class="audit-entry-icon ${cfg.cls}"><svg viewBox="0 0 24 24">${cfg.icon}</svg></div>
            <div class="audit-entry-body">
                <div class="audit-entry-main">
                    <span class="audit-entry-prato">Mesa ${e.mesa}</span>
                    <span class="audit-entry-action ${cfg.cls}">${cfg.label}</span>
                    ${e.pessoas ? `<span class="audit-entry-origin">👥 ${e.pessoas} pessoa${e.pessoas!==1?'s':''}</span>` : ''}
                </div>
                <div class="audit-entry-meta">
                    <span class="audit-entry-user"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${escHtml(e.responsavel)}</span>
                    <span class="audit-entry-time">${formatAuditTime(e.hora)}</span>
                </div>
            </div>
        </div>`;
    }).join('');
    updateAuditTabCounts();
}

function renderAuditLog() {
    if (auditCurrentTab === 'cardapio')     renderAuditCardapio();
    else if (auditCurrentTab === 'funcionarios') renderAuditFunc();
    else if (auditCurrentTab === 'pedidos')      renderAuditPedidos();
    else if (auditCurrentTab === 'mesas')        renderAuditMesas();
}

// ── RESTAURANTE (mesas ao vivo) ──
const MESA_STATUS_CFG = {
    available:   { icon: '🟢', label: 'Disponível' },
    occupied:    { icon: '🔵', label: 'Ocupada' },
    unavailable: { icon: '🔴', label: 'Indisponível' },
};

let adminTables = [];
let adminTablesInterval = null;

async function fetchMesasAdmin() {
    try {
        const res = await fetch('/api/mesas');
        if (!res.ok) throw new Error('Erro ao buscar mesas');
        adminTables = await res.json();

        // Enrich occupied tables with active atendimento (same as reception does on modal open)
        await Promise.all(
            adminTables
                .filter(t => t.status === 'occupied')
                .map(async t => {
                    try {
                        const r = await fetch(`/api/mesas/${t.mesa_id}/atendimento-ativo`);
                        if (r.ok) t._atendimento = await r.json();
                    } catch (_) {}
                })
        );

        renderMesasAdmin();
    } catch (err) {
        console.error(err);
        showToast('Erro ao carregar mesas');
    }
}

function renderStatsAdmin() {
    const counts = { available: 0, occupied: 0, unavailable: 0 };
    adminTables.forEach(t => counts[t.status]++);
    const total = adminTables.length;
    const ocupacao = total ? Math.round((counts.occupied / total) * 100) : 0;
    const el = document.getElementById('rest-stats-bar');
    if (!el) return;
    el.innerHTML = `
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--status-available)"></div><span class="stat-chip-label">Disponíveis</span><span class="stat-chip-val">${counts.available}</span></div>
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--status-occupied)"></div><span class="stat-chip-label">Ocupadas</span><span class="stat-chip-val">${counts.occupied}</span></div>
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--status-unavailable)"></div><span class="stat-chip-label">Indisponíveis</span><span class="stat-chip-val">${counts.unavailable}</span></div>
        <div class="stat-chip"><div class="stat-chip-dot" style="background:var(--accent)"></div><span class="stat-chip-label">Ocupação</span><span class="stat-chip-val">${ocupacao}%</span></div>`;
}

function renderMesasAdmin() {
    const grid = document.getElementById('rest-tables-grid');
    const countEl = document.getElementById('rest-table-count');
    if (!grid) return;
    if (countEl) countEl.textContent = `${adminTables.length} mesas`;
    renderStatsAdmin();

    grid.innerHTML = adminTables.map(t => {
        const cfg = MESA_STATUS_CFG[t.status] || MESA_STATUS_CFG.available;
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
        return `<div class="rest-table-card ${t.status}">
            <div class="rest-card-top"><span class="rest-card-num">Mesa ${t.mesa_id}</span><span class="rest-card-badge">${cfg.label}</span></div>
            <div class="rest-card-icon">${cfg.icon}</div>
            <div class="rest-card-meta">${meta}</div>
            <div class="capacity-dots">${dots}</div>
        </div>`;
    }).join('');
}

// ── ESC ──
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closePratoModal(); closeDelPratoModal(); closeToggleDispModal();
        closeModal('modal-add'); closeModal('modal-remove');
    }
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
    fetchDashboard();
    fetchFuncionarios();
    loadFilaReservas();
    setInterval(loadFilaReservas, 30000);
    setInterval(fetchDashboard, 60000);
    setInterval(fetchMesasAdmin, 30000);
    updateAuditTabCounts();
});
