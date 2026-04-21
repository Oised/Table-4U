let mesaSelecionada = null;
let checkinPessoas = 2;

const menuItens = [
    { categoria: 'Entradas', itens: [
        { nome: 'Bruschetta Clássica', preco: 'R$ 32' },
        { nome: 'Salada Italiana', preco: 'R$ 28' },
    ]},
    { categoria: 'Pratos Principais', itens: [
        { nome: 'Risoto de Funghi', preco: 'R$ 64' },
    ]},
];

const mesas = [
    { id: 1, status: 'livre', icones: [] },
    { id: 2, status: 'ocupada', pessoas: 4, previsao: '21:30', icones: ['prato'], pedidos: [
        { nome: 'Bruschetta Clássica', qty: 2 },
        { nome: 'Risoto de Funghi', qty: 4 },
    ]},
    { id: 3, status: 'limpar', icones: [] },
    { id: 4, status: 'livre', icones: [] },
    { id: 5, status: 'ocupada', pessoas: 2, previsao: '22:00', icones: ['chamada'], pedidos: [
        { nome: 'Salada Italiana', qty: 2 },
    ]},
    { id: 6, status: 'ocupada', pessoas: 6, previsao: '21:00', icones: ['aviso', 'prato'], pedidos: [
        { nome: 'Bruschetta Clássica', qty: 1 },
        { nome: 'Salada Italiana', qty: 2 },
        { nome: 'Risoto de Funghi', qty: 3 },
    ]},
    { id: 7, status: 'limpar', icones: [] },
    { id: 8, status: 'livre', icones: [] },
];

const iconeMap = {
    prato:   { emoji: '🍽', titulo: 'Prato pronto na cozinha', classe: 'prato' },
    aviso:   { emoji: '⚠️', titulo: 'Aviso da cozinha', classe: 'aviso' },
    chamada: { emoji: '🔔', titulo: 'Cliente chamando', classe: 'chamada' },
};

function sairFuncionario() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function renderizarMesas() {
    const grid = document.getElementById('mesas-grid');
    grid.innerHTML = '';

    const corMap = {
        livre: 'verde',
        ocupada: 'azul',
        limpar: 'vermelho'
    };

    mesas.forEach(mesa => {
        const corDaMesa = corMap[mesa.status];
        const card = document.createElement('div');
        card.className = `mesa-card ${corDaMesa}`;
        card.onclick = () => clicarMesa(mesa);

        const statusTexto = { livre: 'Livre', ocupada: 'Ocupada', limpar: 'Limpar' }[mesa.status];

        let pessoasHTML = mesa.status === 'ocupada'
            ? `<div class="mesa-pessoas">👤 ${mesa.pessoas}</div>` : '';

        let iconesHTML = mesa.icones.map(ic =>
            `<button class="mesa-icone ${iconeMap[ic].classe}" title="${iconeMap[ic].titulo}" onclick="event.stopPropagation()">
                ${iconeMap[ic].emoji}
            </button>`
        ).join('');

        card.innerHTML = `
            ${pessoasHTML}
            <div class="mesa-nome">Mesa ${mesa.id}</div>
            <div class="mesa-status-row">
                <span class="mesa-bolinha ${corDaMesa}"></span>
                <span class="mesa-status">${statusTexto}</span>
            </div>
            <div class="mesa-icones">${iconesHTML}</div>
        `;
        grid.appendChild(card);
    });
}

function clicarMesa(mesa) {
    mesaSelecionada = mesa;

    if (mesa.status === 'livre') {
        document.getElementById('modal-livre-titulo').textContent = `Mesa ${mesa.id}`;
        abrirModal('modal-livre');
    } else if (mesa.status === 'ocupada') {
        document.getElementById('modal-ocupada-titulo').textContent = `Mesa ${mesa.id}`;
        document.getElementById('ocupada-pessoas').textContent = mesa.pessoas + ' pessoas';
        document.getElementById('ocupada-previsao').textContent = mesa.previsao;

        const lista = document.getElementById('ocupada-pedidos');
        lista.innerHTML = mesa.pedidos.map(p => `
            <div class="pedido-item">
                <span class="pedido-nome">${p.nome}</span>
                <span class="pedido-qty">x${p.qty}</span>
            </div>
        `).join('');

        abrirModal('modal-ocupada');
    } else if (mesa.status === 'limpar') {
        document.getElementById('modal-limpar-titulo').textContent = `Mesa ${mesa.id}`;
        abrirModal('modal-limpar');
    }
}

// LÓGICA PARA LIBERAR MESA OCUPADA
function abrirConfirmacaoLiberar() {
    document.getElementById('modal-ocupada').classList.remove('ativo');
    document.getElementById('confirmar-liberar-nome').textContent = `Mesa ${mesaSelecionada.id}`;
    document.getElementById('modal-confirmar-liberar').classList.add('ativo');
}

function voltarModalOcupada() {
    document.getElementById('modal-confirmar-liberar').classList.remove('ativo');
    document.getElementById('modal-ocupada').classList.add('ativo');
}

function confirmarLiberarMesaOcupada() {
    if (!mesaSelecionada) return;
    const mesa = mesas.find(m => m.id === mesaSelecionada.id);
    mesa.status = 'limpar'; 
    mesa.icones = [];
    mesa.pedidos = [];
    mesa.pessoas = 0;
    fecharModal();
    renderizarMesas();
}

function abrirModal(id) {
    document.getElementById('modal-overlay').classList.add('ativo');
    document.getElementById(id).classList.add('ativo');
}

function fecharModal() {
    document.getElementById('modal-overlay').classList.remove('ativo');
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('ativo'));
}

function liberarMesa() {
    if (!mesaSelecionada) return;
    const mesa = mesas.find(m => m.id === mesaSelecionada.id);
    mesa.status = 'livre';
    mesa.icones = [];
    fecharModal();
    renderizarMesas();
}

function irCheckin() {
    fecharModal();
    document.getElementById('checkin-titulo').textContent = `Mesa ${mesaSelecionada.id}`;
    checkinPessoas = 2;
    document.getElementById('checkin-pessoas-count').textContent = checkinPessoas;
    document.getElementById('pagina-checkin').style.display = 'flex';
}

function irPedido() {
    fecharModal();
    document.getElementById('pedido-titulo').textContent = `Mesa ${mesaSelecionada.id}`;
    renderizarMenuPedido();
    document.getElementById('pagina-pedido').style.display = 'flex';
}

function voltarParaMesas() {
    document.getElementById('pagina-checkin').style.display = 'none';
    document.getElementById('pagina-pedido').style.display = 'none';
}

function alterarCheckinPessoas(valor) {
    checkinPessoas = Math.max(1, Math.min(20, checkinPessoas + valor));
    document.getElementById('checkin-pessoas-count').textContent = checkinPessoas;
}

function confirmarCheckin() {
    const mesa = mesas.find(m => m.id === mesaSelecionada.id);
    mesa.status = 'ocupada';
    mesa.pessoas = checkinPessoas;
    mesa.previsao = '1h 20min';
    mesa.pedidos = [];
    mesa.icones = [];
    voltarParaMesas();
    renderizarMesas();
}

function renderizarMenuPedido() {
    const container = document.getElementById('pedido-categorias');
    container.innerHTML = '';

    menuItens.forEach(cat => {
        const titulo = document.createElement('div');
        titulo.className = 'categoria-titulo';
        titulo.textContent = cat.categoria;
        container.appendChild(titulo);

        cat.itens.forEach(item => {
            const linha = document.createElement('div');
            linha.className = 'pedido-linha';
            linha.dataset.nome = item.nome;
            linha.innerHTML = `
                <span class="pedido-linha-nome">${item.nome}</span>
                <span class="pedido-linha-preco">${item.preco}</span>
                <div class="qty-control">
                    <button class="qty-btn" onclick="alterarQty(this, -1)">−</button>
                    <span class="qty-value">0</span>
                    <button class="qty-btn" onclick="alterarQty(this, 1)">+</button>
                </div>
            `;
            container.appendChild(linha);
        });
    });
}

function alterarQty(btn, valor) {
    const display = btn.parentElement.querySelector('.qty-value');
    const atual = parseInt(display.textContent);
    display.textContent = Math.max(0, atual + valor);
}

function confirmarPedido() {
    const linhas = document.querySelectorAll('.pedido-linha');
    const novos = [];

    linhas.forEach(linha => {
        const qty = parseInt(linha.querySelector('.qty-value').textContent);
        if (qty > 0) {
            novos.push({ nome: linha.dataset.nome, qty });
        }
    });

    if (novos.length === 0) return;

    const mesa = mesas.find(m => m.id === mesaSelecionada.id);
    if (!mesa.pedidos) mesa.pedidos = [];
    novos.forEach(novo => {
        const existente = mesa.pedidos.find(p => p.nome === novo.nome);
        if (existente) existente.qty += novo.qty;
        else mesa.pedidos.push(novo);
    });

    mesa.status = 'ocupada';
    voltarParaMesas();
    renderizarMesas();
}

renderizarMesas();