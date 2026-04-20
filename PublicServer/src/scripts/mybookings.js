document.addEventListener('DOMContentLoaded', function() {
    carregarReservas();
});

async function carregarReservas() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {
        window.location.href = "/src/pages/login.html";
        return;
    }

    const listaContainer = document.getElementById('lista-reservas');
    const msgSemReservas = document.getElementById('sem-reservas');

    try {
        const response = await fetch(`http://localhost:3000/reservas/${usuario.email}`);
        const reservas = await response.json();

        listaContainer.innerHTML = '';

        if (reservas.length === 0) {
            msgSemReservas.style.display = 'block';
        } else {
            msgSemReservas.style.display = 'none';

            reservas.reverse().forEach((reserva, index) => {
                const card = document.createElement('div');
                card.className = 'reserva-card';

                card.innerHTML = `
                    <span class="reserva-status">Confirmado</span>

                    <div class="reserva-info-grid">
                        <div class="info-box"><span class="info-label">Nome</span><span>${reserva.nome}</span></div>
                        <div class="info-box"><span class="info-label">E-mail</span><span>${reserva.email}</span></div>
                        <div class="info-box"><span class="info-label">Data</span><span>${reserva.data}</span></div>
                        <div class="info-box"><span class="info-label">Horário</span><span>${reserva.horario}</span></div>
                        <div class="info-box"><span class="info-label">Pessoas</span><span>${reserva.pessoas}</span></div>
                    </div>
                `;

                listaContainer.appendChild(card);
            });
        }

    } catch (err) {
        console.error(err);
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