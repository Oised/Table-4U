// --- CONTROLE DO MENU LATERAL ---
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}

// --- CONTROLE DE ABAS (MESAS / FILA) ---
function mudarAba(abaDestino) {
    // Esconde todas as abas
    document.querySelectorAll('.aba-conteudo').forEach(el => el.classList.remove('ativo'));
    // Remove classe ativo dos links do menu
    document.querySelectorAll('.sidebar-menu a').forEach(el => el.classList.remove('ativo'));

    // Mostra a aba selecionada
    document.getElementById(`aba-${abaDestino}`).classList.add('ativo');
    document.getElementById(`link-${abaDestino}`).classList.add('ativo');

    // Muda o título da página no cabeçalho
    const pageTitle = document.getElementById('page-title');
    if (abaDestino === 'mesas') {
        pageTitle.innerText = "Mesas - Visão Geral";
    } else if (abaDestino === 'fila') {
        pageTitle.innerText = "Gerenciar Fila";
    }
}

// --- LÓGICA DA FILA ---
let itemParaRemoverId = null; // Guarda o ID da div que será removida

// Função para abrir o modal de confirmação de exclusão
function abrirModalRemover(nomePessoa, isPrimeiro, idElementoHTML = null) {
    document.getElementById('nome-remover').innerText = nomePessoa;
    itemParaRemoverId = idElementoHTML; // Se for o primeiro, será null
    
    document.getElementById('modal-confirmacao').classList.add('ativo');
}

function fecharModalRemover() {
    document.getElementById('modal-confirmacao').classList.remove('ativo');
    itemParaRemoverId = null;
}

// --- LÓGICA DE AVANÇAR A FILA ---
function avancarFila() {
    const filaLista = document.querySelector('.fila-lista');
    const proximos = filaLista.querySelectorAll('.fila-item');
    
    if (proximos.length > 0) {
        // Pega o primeiro card da lista de espera
        const proximo = proximos[0];
        const nomeProximo = proximo.querySelector('.fila-nome').innerText;
        
        // Atualiza o destaque (Nome grandão)
        document.querySelector('.destaque-nome').innerText = `1º - ${nomeProximo}`;
        
        // Atualiza os botões do destaque para usar o nome do novo primeiro da fila
        const btnCheckin = document.querySelector('.destaque-actions .btn-primary');
        const btnRemover = document.querySelector('.destaque-actions .btn-remover');
        
        btnCheckin.setAttribute('onclick', `fazerCheckin('${nomeProximo}')`);
        btnRemover.setAttribute('onclick', `abrirModalRemover('${nomeProximo}', true)`);
        
        // Remove o elemento que subiu para o destaque da lista de baixo
        proximo.remove();
        
        // Reorganiza a numeração (#2, #3...) do resto da fila
        atualizarPosicoesFila();
    } else {
        // Se não tem mais ninguém na fila
        document.querySelector('.destaque-nome').innerText = "Fila Vazia";
        document.querySelector('.destaque-actions').style.display = 'none';
        document.querySelector('.tempo-box').style.display = 'none';
    }
}

function atualizarPosicoesFila() {
    const itens = document.querySelectorAll('.fila-item');
    itens.forEach((item, index) => {
        const posicao = index + 2; // Começa do 2 porque o 1º está no destaque
        item.querySelector('.fila-posicao').innerText = `#${posicao}`;
    });
}

// --- ATUALIZAÇÃO: CONFIRMAR REMOÇÃO ---
function confirmarRemocao() {
    if (itemParaRemoverId) {
        // Remove alguém do meio da lista
        const elemento = document.getElementById(itemParaRemoverId);
        if(elemento) elemento.remove();
        atualizarPosicoesFila();
    } else {
        // Remove o Primeiro da Fila (Destaque) e faz a fila andar
        avancarFila();
    }
    
    fecharModalRemover();
}

// --- LÓGICA DO CHECK-IN E MODAL DE MESAS LIVRES ---
let pessoaAtualCheckin = "";

function fazerCheckin(nomePessoa) {
    pessoaAtualCheckin = nomePessoa;
    document.getElementById('nome-checkin').innerText = nomePessoa;
    
    const gridMesas = document.getElementById('lista-mesas-livres');
    gridMesas.innerHTML = ''; // Limpa a lista anterior
    
    // Varre o DOM procurando APENAS mesas com a classe 'verde' (Livres)
    const mesasLivres = document.querySelectorAll('.mesa-card.verde');
    
    if (mesasLivres.length === 0) {
        gridMesas.innerHTML = '<p style="color: #F44336; grid-column: 1/-1; text-align: center;">Nenhuma mesa livre no momento!</p>';
    } else {
        // Cria um botão para cada mesa livre encontrada
        mesasLivres.forEach(mesa => {
            const nomeMesa = mesa.querySelector('.mesa-nome').innerText;
            const lugares = mesa.querySelector('.mesa-pessoas').innerText;
            
            const btn = document.createElement('button');
            btn.className = 'btn-mesa-livre';
            btn.innerHTML = `<strong>${nomeMesa}</strong><small>Livre</small>`;
            
            // Quando clicar na mesa, confirma o check-in
            btn.onclick = () => confirmarCheckinDaMesa(mesa, nomeMesa);
            gridMesas.appendChild(btn);
        });
    }
    
    document.getElementById('modal-checkin').classList.add('ativo');
}

function fecharModalCheckin() {
    document.getElementById('modal-checkin').classList.remove('ativo');
    pessoaAtualCheckin = "";
}

function confirmarCheckinDaMesa(mesaElemento, nomeMesa) {

    
    // 1. Muda visualmente o status da mesa escolhida para Ocupada (Azul)
    mesaElemento.classList.remove('verde');
    mesaElemento.classList.add('azul');
    
    const statusSpan = mesaElemento.querySelector('.mesa-status');
    if (statusSpan) {
        statusSpan.innerText = 'Ocupada';
    }
    
    // Adiciona o ícone de prato indicando que estão comendo (se já não tiver a div)
    let iconesDiv = mesaElemento.querySelector('.mesa-icones');
    if(!iconesDiv) {
        iconesDiv = document.createElement('div');
        iconesDiv.className = 'mesa-icones';
        mesaElemento.appendChild(iconesDiv);
    }
    iconesDiv.innerHTML = '<span class="mesa-icone prato">🍽️</span>';

    // 2. Fecha o modal
    fecharModalCheckin();
    
    // 3. Exibe a mensagem de sucesso com o nome da pessoa e a mesa escolhida
    alert(`Check-in realizado com sucesso na ${nomeMesa}!`);
    
    // 4. Faz a fila andar já que o cliente foi acomodado!
    avancarFila();
}

// --- SIMULADOR DE CRONÔMETRO PARA O 1º DA FILA ---
let minutosRestantes = 13;
let segundosRestantes = 58;

function atualizarCronometro() {
    const tempoEl = document.getElementById('tempo-primeiro');
    if(!tempoEl) return;

    if (segundosRestantes === 0) {
        if (minutosRestantes === 0) {
            tempoEl.innerText = "00:00";
            tempoEl.style.color = "#F44336"; // Fica vermelho quando zera
            return;
        }
        minutosRestantes--;
        segundosRestantes = 59;
    } else {
        segundosRestantes--;
    }

    const minStr = minutosRestantes.toString().padStart(2, '0');
    const segStr = segundosRestantes.toString().padStart(2, '0');
    tempoEl.innerText = `${minStr}:${segStr}`;
}

// Inicia o relógio decrescente
setInterval(atualizarCronometro, 1000);