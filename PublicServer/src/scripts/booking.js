window.onload = function() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario || !usuario.email) {
        showToast("Você precisa estar logado!");
        setTimeout(() => {
            window.location.href = "/src/pages/login.html";
        }, 1500);
        return;
    }

    configurarLimitesData();
};

// --- SUA FUNÇÃO SHOWTOAST PADRONIZADA ---
function showToast(mensagem) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensagem;

    container.appendChild(toast);

    // Inicia o desaparecimento após 3.5 segundos
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

// --- CONFIGURAÇÃO DE LIMITES NO CALENDÁRIO ---
function configurarLimitesData() {
    const inputData = document.getElementById('reserva-data');
    if (!inputData) return;

    const hoje = new Date();
    const minDate = hoje.toISOString().split('T')[0];

    const maxDateObj = new Date();
    maxDateObj.setMonth(hoje.getMonth() + 3); // Limite de 3 meses para frente
    const maxDate = maxDateObj.toISOString().split('T')[0];

    inputData.setAttribute('min', minDate);
    inputData.setAttribute('max', maxDate);
}

let pessoasCount = 2;
let horarioSelecionado = null;

function alterarPessoas(valor) {
    pessoasCount = Math.max(1, Math.min(20, pessoasCount + valor));
    document.getElementById('pessoas-count').textContent = pessoasCount;
}

function selecionarHorario(btn) {
    document.querySelectorAll('.horario-btn').forEach(b => b.classList.remove('selecionado'));
    btn.classList.add('selecionado');
    horarioSelecionado = btn.textContent;
}

function confirmarReserva() {
    const inputData = document.getElementById('reserva-data');
    const dataValor = inputData.value;
    
    // 1. Validação: Campo de data vazio
    if (!dataValor) {
        showToast("Selecione uma data para a reserva! ✨");
        return;
    }

    // 2. Validação: Horário não selecionado
    if (!horarioSelecionado) {
        showToast("Por favor, selecione um horário! ✨");
        return;
    }

    const dataReserva = new Date(dataValor + 'T00:00:00');
    const agora = new Date(); // Domingo, 26 de Abril de 2026, 13:42
    
    const hojeApenasData = new Date();
    hojeApenasData.setHours(0, 0, 0, 0);

    // 3. Validação: Data no passado
    if (dataReserva < hojeApenasData) {
        showToast("Não é possível reservar datas passadas! ✨");
        return;
    }

    // 4. Validação: Horário que já passou (Apenas para HOJE)
    if (dataReserva.getTime() === hojeApenasData.getTime()) {
        const [horaReserva, minutoReserva] = horarioSelecionado.split(':').map(Number);
        const horaAtual = agora.getHours();
        const minutoAtual = agora.getMinutes();

        // Se agora são 13:42 e você tentar 13:30, ele barra
        if (horaReserva < horaAtual || (horaReserva === horaAtual && minutoReserva <= minutoAtual)) {
            showToast("Este horário já passou para hoje! ✨");
            return;
        }
    }

    // Se passar por todas as "travas" acima, ele segue para a confirmação
    const dataFormatada = dataReserva.toLocaleDateString('pt-BR', {
        weekday: 'long', day: '2-digit', month: 'long'
    });

    document.getElementById('confirm-pessoas').textContent = pessoasCount + ' pessoa' + (pessoasCount > 1 ? 's' : '');
    document.getElementById('confirm-data').textContent = dataFormatada;
    document.getElementById('confirm-horario').textContent = horarioSelecionado;

    document.getElementById('step-form').style.display = 'none';
    document.getElementById('step-confirm').style.display = 'block';
}

function voltarForm() {
    document.getElementById('step-confirm').style.display = 'none';
    document.getElementById('step-form').style.display = 'block';
}

async function finalizarReserva() {
    const pessoas = document.getElementById("pessoas-count").innerText;
    const data = document.getElementById("reserva-data").value;
    const horario = horarioSelecionado;
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    try {
        const response = await fetch("http://localhost:3000/reserva", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                pessoas,
                data,
                horario,
                nome: usuario.nome,
                email: usuario.email
            })
        });

        if (response.ok) {
            document.getElementById("step-confirm").style.display = "none";
            document.getElementById("step-sucesso").style.display = "block";

            document.getElementById("sucesso-pessoas").innerText = pessoas;
            document.getElementById("sucesso-data").innerText = data;
            document.getElementById("sucesso-horario").innerText = horario;
            document.getElementById("sucesso-nome").innerText = usuario.nome;
            document.getElementById("sucesso-email").innerText = usuario.email;
        } else {
            showToast("Erro ao processar reserva no servidor.");
        }
    } catch (err) {
        showToast("Erro ao conectar com o servidor.");
    }
}