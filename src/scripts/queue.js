let intervaloFila = null;
let intervaloTimer10Min = null;

document.addEventListener('DOMContentLoaded', function() {
    verificarStatusFila();
});

function verificarStatusFila() {
    const naFila = sessionStorage.getItem('usuario-na-fila');
    const vezChegou = sessionStorage.getItem('usuario-vez-chegou');

    // Limpa os intervalos para não encavalar
    clearInterval(intervaloFila);
    clearInterval(intervaloTimer10Min);

    if (vezChegou === 'true') {
        // TELA 3: É a vez do usuário
        document.getElementById('step-entrar').style.display = 'none';
        document.getElementById('step-status').style.display = 'none';
        document.getElementById('step-vez').style.display = 'block';
        
        iniciarTimer10Minutos();

    } else if (naFila === 'true') {
        // TELA 2: Está na fila aguardando
        document.getElementById('step-entrar').style.display = 'none';
        document.getElementById('step-status').style.display = 'block';
        document.getElementById('step-vez').style.display = 'none';

        let posicao = sessionStorage.getItem('fila-posicao');
        let tempo = sessionStorage.getItem('fila-tempo');

        if (!posicao || !tempo) {
            posicao = Math.floor(Math.random() * 3) + 1; // Posição 1 a 3 para testar rápido
            tempo = posicao * 15; 
            sessionStorage.setItem('fila-posicao', posicao);
            sessionStorage.setItem('fila-tempo', tempo);
        }

        atualizarTextosFila(posicao, tempo);
        iniciarSimulacaoFilaAcelerada();

    } else {
        // TELA 1: Não está na fila
        document.getElementById('step-entrar').style.display = 'block';
        document.getElementById('step-status').style.display = 'none';
        document.getElementById('step-vez').style.display = 'none';

        const pessoasAguardando = Math.floor(Math.random() * 15) + 3;
        document.getElementById('pessoas-na-fila').textContent = pessoasAguardando;
    }
}

function atualizarTextosFila(posicao, tempo) {
    document.getElementById('posicao-usuario').textContent = `${posicao}º lugar`;
    document.getElementById('tempo-espera').textContent = `~ ${tempo} min`;
}

function entrarNaFila() {
    sessionStorage.setItem('usuario-na-fila', 'true');
    sessionStorage.removeItem('usuario-vez-chegou');
    
    // Posição inicial curta para você não esperar muito no teste
    const posicao = Math.floor(Math.random() * 2) + 1; 
    const tempo = posicao * 15;
    
    sessionStorage.setItem('fila-posicao', posicao);
    sessionStorage.setItem('fila-tempo', tempo);

    verificarStatusFila();
}

function sairDaFila() {
    sessionStorage.removeItem('usuario-na-fila');
    sessionStorage.removeItem('fila-posicao');
    sessionStorage.removeItem('fila-tempo');
    sessionStorage.removeItem('usuario-vez-chegou');
    sessionStorage.removeItem('limite-apresentacao');
    
    verificarStatusFila();
}

// --- LÓGICA DOS TEMPORIZADORES ---

function iniciarSimulacaoFilaAcelerada() {
    // Para efeito de protótipo: 1 minuto cai a cada 1 segundo!
    intervaloFila = setInterval(() => {
        let tempo = parseInt(sessionStorage.getItem('fila-tempo'));
        let posicao = parseInt(sessionStorage.getItem('fila-posicao'));

        if (tempo > 0) {
            tempo--; 
            // A cada 15 "minutos" que passam, a posição diminui
            if (tempo % 15 === 0 && posicao > 1) {
                posicao--;
            }
            sessionStorage.setItem('fila-tempo', tempo);
            sessionStorage.setItem('fila-posicao', posicao);
            atualizarTextosFila(posicao, tempo);
        }

        if (tempo <= 0) {
            clearInterval(intervaloFila);
            // Chegou a vez! Define o tempo limite para daqui 10 minutos reais
            sessionStorage.setItem('usuario-vez-chegou', 'true');
            const limite = new Date().getTime() + (10 * 60 * 1000); 
            sessionStorage.setItem('limite-apresentacao', limite);
            
            verificarStatusFila();
        }
    }, 1000); // Mude de 1000 para 60000 se quiser que demore minutos reais
}

function iniciarTimer10Minutos() {
    intervaloTimer10Min = setInterval(() => {
        const limite = parseInt(sessionStorage.getItem('limite-apresentacao'));
        const agora = new Date().getTime();
        const diferenca = limite - agora;

        if (diferenca <= 0) {
            clearInterval(intervaloTimer10Min);
            document.getElementById('timer-atendimento').textContent = "00:00";
            alert("Seu tempo expirou! Sua vaga foi repassada para o próximo da fila.");
            sairDaFila();
        } else {
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
            
            // Formata para ficar 09:05 por exemplo
            document.getElementById('timer-atendimento').textContent = 
                `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }
    }, 1000);
}