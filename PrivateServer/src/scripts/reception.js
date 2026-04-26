
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}


function mudarAba(abaDestino) {
    
    document.querySelectorAll('.aba-conteudo').forEach(el => el.classList.remove('ativo'));
    
    document.querySelectorAll('.sidebar-menu a').forEach(el => el.classList.remove('ativo'));

 
    document.getElementById(`aba-${abaDestino}`).classList.add('ativo');
    document.getElementById(`link-${abaDestino}`).classList.add('ativo');

    
    const pageTitle = document.getElementById('page-title');
    if (abaDestino === 'mesas') {
        pageTitle.innerText = "Mesas - Visão Geral";
    } else if (abaDestino === 'fila') {
        pageTitle.innerText = "Gerenciar Fila";
    }
}


let itemParaRemoverId = null; 


function abrirModalRemover(nomePessoa, isPrimeiro, idElementoHTML = null) {
    document.getElementById('nome-remover').innerText = nomePessoa;
    itemParaRemoverId = idElementoHTML; // Se for o primeiro, será null
    
    document.getElementById('modal-confirmacao').classList.add('ativo');
}

function fecharModalRemover() {
    document.getElementById('modal-confirmacao').classList.remove('ativo');
    itemParaRemoverId = null;
}


function avancarFila() {
    const filaLista = document.querySelector('.fila-lista');
    const proximos = filaLista.querySelectorAll('.fila-item');
    
    if (proximos.length > 0) {
        
        const proximo = proximos[0];
        const nomeProximo = proximo.querySelector('.fila-nome').innerText;
        
        
        document.querySelector('.destaque-nome').innerText = `1º - ${nomeProximo}`;
        
     
        const btnCheckin = document.querySelector('.destaque-actions .btn-primary');
        const btnRemover = document.querySelector('.destaque-actions .btn-remover');
        
        btnCheckin.setAttribute('onclick', `fazerCheckin('${nomeProximo}')`);
        btnRemover.setAttribute('onclick', `abrirModalRemover('${nomeProximo}', true)`);
        
     
        proximo.remove();
        
  
        atualizarPosicoesFila();
    } else {
      
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


function confirmarRemocao() {
    if (itemParaRemoverId) {
      
        const elemento = document.getElementById(itemParaRemoverId);
        if(elemento) elemento.remove();
        atualizarPosicoesFila();
    } else {
    
        avancarFila();
    }
    
    fecharModalRemover();
}


let pessoaAtualCheckin = "";

function fazerCheckin(nomePessoa) {
    pessoaAtualCheckin = nomePessoa;
    document.getElementById('nome-checkin').innerText = nomePessoa;
    
    const gridMesas = document.getElementById('lista-mesas-livres');
    gridMesas.innerHTML = ''; 
    

    const mesasLivres = document.querySelectorAll('.mesa-card.verde');
    
    if (mesasLivres.length === 0) {
        gridMesas.innerHTML = '<p style="color: #F44336; grid-column: 1/-1; text-align: center;">Nenhuma mesa livre no momento!</p>';
    } else {
    
        mesasLivres.forEach(mesa => {
            const nomeMesa = mesa.querySelector('.mesa-nome').innerText;
            const lugares = mesa.querySelector('.mesa-pessoas').innerText;
            
            const btn = document.createElement('button');
            btn.className = 'btn-mesa-livre';
            btn.innerHTML = `<strong>${nomeMesa}</strong><small>Livre</small>`;
            
          
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

    
 
    mesaElemento.classList.remove('verde');
    mesaElemento.classList.add('azul');
    
    const statusSpan = mesaElemento.querySelector('.mesa-status');
    if (statusSpan) {
        statusSpan.innerText = 'Ocupada';
    }
    

    let iconesDiv = mesaElemento.querySelector('.mesa-icones');
    if(!iconesDiv) {
        iconesDiv = document.createElement('div');
        iconesDiv.className = 'mesa-icones';
        mesaElemento.appendChild(iconesDiv);
    }
    iconesDiv.innerHTML = '<span class="mesa-icone prato">🍽️</span>';


    fecharModalCheckin();
    

    alert(`Check-in realizado com sucesso na ${nomeMesa}!`);
    

    avancarFila();
}


let minutosRestantes = 13;
let segundosRestantes = 58;

function atualizarCronometro() {
    const tempoEl = document.getElementById('tempo-primeiro');
    if(!tempoEl) return;

    if (segundosRestantes === 0) {
        if (minutosRestantes === 0) {
            tempoEl.innerText = "00:00";
            tempoEl.style.color = "#F44336"; 
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



function sairFuncionario() {
    sessionStorage.clear(); 
    window.location.href = 'login.html'; 
}







setInterval(atualizarCronometro, 1000);