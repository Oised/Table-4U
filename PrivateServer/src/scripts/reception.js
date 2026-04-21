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

function confirmarRemocao() {
    // Lógica visual para remover a pessoa da tela
    if (itemParaRemoverId) {
        // Remove um item da lista
        const elemento = document.getElementById(itemParaRemoverId);
        if(elemento) elemento.remove();
    } else {
        // Se for null, significa que clicou em remover o Primeiro da Fila
        // Num sistema real, aqui você puxaria o próximo da lista para o destaque
        alert("O primeiro da fila foi removido do sistema.");
        document.querySelector('.fila-destaque').style.opacity = '0.5';
        document.querySelector('.fila-destaque').style.pointerEvents = 'none';
    }
    
    fecharModalRemover();
}

function fazerCheckin(nomePessoa) {
    // Num sistema real, abriria tela para associar ele a uma mesa
    alert(`${nomePessoa} foi chamado para fazer Check-in! A mesa será liberada.`);
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