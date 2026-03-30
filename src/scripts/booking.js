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
    const data = document.getElementById('reserva-data').value;
    if (!data || !horarioSelecionado) return;

    const dataFormatada = new Date(data + 'T00:00:00').toLocaleDateString('pt-BR', {
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

function finalizarReserva() {
    const usuario = { nome: 'Quincas Borba', email: 'quincas.borba@email.com' };

    document.getElementById('sucesso-nome').textContent = usuario.nome;
    document.getElementById('sucesso-email').textContent = usuario.email;
    document.getElementById('sucesso-pessoas').textContent = document.getElementById('confirm-pessoas').textContent;
    document.getElementById('sucesso-data').textContent = document.getElementById('confirm-data').textContent;
    document.getElementById('sucesso-horario').textContent = document.getElementById('confirm-horario').textContent;

    document.getElementById('step-confirm').style.display = 'none';
    document.getElementById('step-sucesso').style.display = 'block';
}