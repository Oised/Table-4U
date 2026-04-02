document.addEventListener('DOMContentLoaded', function() {
    carregarReservas();
});

function carregarReservas() {
    const listaContainer = document.getElementById('lista-reservas');
    const msgSemReservas = document.getElementById('sem-reservas');
    
    // Puxa as reservas do navegador
    const reservasStr = sessionStorage.getItem('lista-reservas');
    const reservas = reservasStr ? JSON.parse(reservasStr) : [];

    // Limpa o container antes de renderizar
    listaContainer.innerHTML = '';

    if (reservas.length === 0) {
        msgSemReservas.style.display = 'block';
    } else {
        msgSemReservas.style.display = 'none';
        
        // Inverte o array para mostrar a reserva mais recente primeiro
        reservas.reverse().forEach((reserva, index) => {
            const card = document.createElement('div');
            card.className = 'reserva-card';
            
            card.innerHTML = `
                <span class="reserva-status">${reserva.status}</span>
                <div class="reserva-info-grid">
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
        let reservas = JSON.parse(sessionStorage.getItem('lista-reservas'));
        
        // Como invertemos o array para exibir, precisamos corrigir o índice para apagar o item certo
        const indiceReal = (reservas.length - 1) - indexReverso;
        
        reservas.splice(indiceReal, 1); // Remove o item
        sessionStorage.setItem('lista-reservas', JSON.stringify(reservas));
        
        carregarReservas(); // Recarrega a tela
    }
}