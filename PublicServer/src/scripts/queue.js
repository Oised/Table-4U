let intervaloFila = null;
let intervaloTimer10Min = null;
let pessoasFilaCount = 2;

function alterarPessoasFila(valor) {
    pessoasFilaCount = Math.max(1, Math.min(20, pessoasFilaCount + valor));
    const countEl = document.getElementById('pessoas-count-fila');
    if (countEl) {
        countEl.textContent = pessoasFilaCount;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    verificarStatusFila();
});

function verificarStatusFila() {

const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {
        alert("Você precisa estar logado para acessar a fila!");
        window.location.href = "login.html";
        return;
    }



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

        if (posicao && tempo) {
            atualizarTextosFila(posicao, tempo);
            iniciarSimulacaoFilaAcelerada();
        } else {
            atualizarTextosFila("...", "...");
        }

    } else {
        // TELA 1: Não está na fila
        document.getElementById('step-entrar').style.display = 'block';
        document.getElementById('step-status').style.display = 'none';
        document.getElementById('step-vez').style.display = 'none';

        document.getElementById('mesas-na-fila').textContent = "...";
    }

    // Busca dados reais do backend para atualizar Tela 1 e Tela 2
    carregarDadosServidor();
}

function atualizarTextosFila(posicao, tempo) {
    document.getElementById('posicao-usuario').textContent = `${posicao}º lugar`;
    document.getElementById('tempo-espera').textContent = `~ ${tempo} min`;
}

async function entrarNaFila() {


const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    
    if (!usuario) {
        alert("Sessão inválida. Por favor, faça login.");
        window.location.href = "login.html";
        return;
    }

    // Registrar a entrada na fila no banco de dados
    const agora = new Date();
    const dataAtual = agora.toISOString().split('T')[0];
    const horarioAtual = agora.toTimeString().substring(0, 5); // "HH:MM"

    try {
        const response = await fetch("/fila", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pessoas: pessoasFilaCount,
                email: usuario.email
            })
        });

        if (!response.ok) {
            alert("Erro ao tentar entrar na fila no servidor.");
            return;
        }

        sessionStorage.setItem('usuario-na-fila', 'true');
        sessionStorage.removeItem('usuario-vez-chegou');
        sessionStorage.removeItem('fila-posicao');
        sessionStorage.removeItem('fila-tempo');

        verificarStatusFila();
    } catch (err) {
        alert("Erro de conexão com o servidor.");
    }
}

async function sairDaFila() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuario) {
        try {
            await fetch(`/fila/${usuario.email}`, {
                method: "DELETE"
            });
        } catch(err) {
        }
    }

    sessionStorage.removeItem('usuario-na-fila');
    sessionStorage.removeItem('fila-posicao');
    sessionStorage.removeItem('fila-tempo');
    sessionStorage.removeItem('usuario-vez-chegou');
    sessionStorage.removeItem('limite-apresentacao');
    
    verificarStatusFila();
}

// --- LÓGICA DOS TEMPORIZADORES ---

function iniciarSimulacaoFilaAcelerada() {
    // Simulação realista: 1 minuto de espera diminui a cada 60 segundos reais
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
    }, 60000); // 60000ms = 60 segundos (1 minuto real = 1 minuto de espera)
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

// --- INTEGRAÇÃO COM BACKEND ---
async function carregarDadosServidor() {
    try {
        const response = await fetch('/tempo-espera');
        if (response.ok) {
            const data = await response.json();
            
            // Atualizar TELA 1: Mesas na fila reais
            const mesasFilaEl = document.getElementById('mesas-na-fila');
            if (mesasFilaEl && document.getElementById('step-entrar').style.display !== 'none') {
                mesasFilaEl.textContent = data.fila_tamanho;
            }

            // Atualizar TELA 2: Previsão da IA
            const tempoIaEl = document.getElementById('tempo-espera-ia');
            if (tempoIaEl && document.getElementById('step-status').style.display !== 'none') {
                tempoIaEl.textContent = `~ ${Math.round(data.tempo_estimado_minutos)} min`;
                
                // Se o usuário acabou de entrar, inicia os valores
                let posicao = sessionStorage.getItem('fila-posicao');
                if (!posicao) {
                    sessionStorage.setItem('fila-posicao', data.fila_tamanho > 0 ? data.fila_tamanho : 1);
                    sessionStorage.setItem('fila-tempo', Math.round(data.tempo_estimado_minutos));
                    atualizarTextosFila(sessionStorage.getItem('fila-posicao'), sessionStorage.getItem('fila-tempo'));
                    iniciarSimulacaoFilaAcelerada();
                }
            }
        }
    } catch (error) {
        console.error("Erro ao buscar dados do servidor:", error);
    }
}