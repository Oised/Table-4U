document.addEventListener('DOMContentLoaded', function() {
    carregarReservas();
});

function carregarReservas() {
    const listaContainer = document.getElementById('lista-reservas');
    const msgSemReservas = document.getElementById('sem-reservas');
    
    // Puxa as reservas do navegador
   const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
   const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
   const minhasReservas = reservas.filter(r => r.email === usuario.email);
    // Limpa o container antes de renderizar
    listaContainer.innerHTML = '';

    if (reservas.length === 0) {
        msgSemReservas.style.display = 'block';
    } else {
        msgSemReservas.style.display = 'none';
        
        // Inverte o array para mostrar a reserva mais recente primeiro
        minhasReservas.reverse().forEach((reserva, index) => {
            const card = document.createElement('div');
            card.className = 'reserva-card';
            
            card.innerHTML = `
        <span class="reserva-status">Confirmado</span>

        <div class="reserva-info-grid">
          <div class="info-box">
            <span class="info-label">Nome</span>
            <span class="info-valor">${reserva.nome}</span>
          </div>

          <div class="info-box">
            <span class="info-label">E-mail</span>
            <span class="info-valor">${reserva.email}</span>
          </div>

          <div class="info-box">
            <span class="info-label">Data</span>
            <span class="info-valor">${reserva.data}</span>
          </div>

          <div class="info-box">
            <span class="info-label">Horário</span>
            <span class="info-valor">${reserva.horario}</span>
          </div>

          <div class="info-box">
            <span class="info-label">Pessoas</span>
            <span class="info-valor">${reserva.pessoas}</span>
          </div>
        </div>

        <button class="btn-cancelar" onclick="cancelarReserva(${index})">Cancelar Reserva</button>
    `;
            
            listaContainer.appendChild(card);
        });
    }
}

// Bônus: Função para cancelar a reserva (remove do sessionStorage)
function cancelarReserva(indexReverso) {
    if(confirm("Tem certeza que deseja cancelar esta reserva?")) {
        let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        
        // Como invertemos o array para exibir, precisamos corrigir o índice para apagar o item certo
        const indiceReal = (reservas.length - 1) - indexReverso;
        
        reservas.splice(indiceReal, 1); // Remove o item
        localStorage.setItem('reservas', JSON.stringify(reservas));
        
        carregarReservas(); // Recarrega a tela
    }
}