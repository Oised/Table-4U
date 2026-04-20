window.onload = function() {
  const usuario = localStorage.getItem("usuarioLogado");

  console.log("Usuário no booking:", usuario);

  if (!usuario) {
    alert("Você precisa estar logado!");
    window.location.href = "/src/pages/login.html";
  }
};
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
  const pessoas = document.getElementById("pessoas-count").innerText;
  const data = document.getElementById("reserva-data").value;

  const horarioSelecionado = document.querySelector(".horario-btn.selecionado");
  const horario = horarioSelecionado ? horarioSelecionado.innerText : "";

  // PEGAR USUÁRIO LOGADO
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  // PEGAR RESERVAS EXISTENTES
  let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  // CRIAR NOVA RESERVA
  const novaReserva = {
    nome: usuario.nome,
    email: usuario.email,
    pessoas,
    data,
    horario
  };

  // SALVAR
  reservas.push(novaReserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  // SEU BACKEND CONTINUA NORMAL
  fetch("http://localhost:3000/reserva", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pessoas,
      data,
      horario
    })
  })
  .then(res => res.json())
  .then(resposta => {
    console.log(resposta);

    // UI
    document.getElementById("step-confirm").style.display = "none";
    document.getElementById("step-sucesso").style.display = "block";

    document.getElementById("sucesso-pessoas").innerText = pessoas;
    document.getElementById("sucesso-data").innerText = data;
    document.getElementById("sucesso-horario").innerText = horario;
    
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    document.getElementById("sucesso-nome").innerText = usuario.nome;
    document.getElementById("sucesso-email").innerText = usuario.email;
  })
  .catch(err => {
    console.error("Erro:", err);
  });
}