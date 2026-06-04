document.addEventListener('DOMContentLoaded', function () {
    carregarReservas();
});

async function carregarReservas() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {
        window.location.href = "/pages/login.html";
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
    <span class="reserva-status">${reserva.status}</span>

    <div class="reserva-info-grid">
        <div class="info-box">
            <span class="info-label">Nome</span>
            <span>${usuario.nome}</span>
        </div>

        <div class="info-box">
            <span class="info-label">E-mail</span>
            <span>${usuario.email}</span>
        </div>

        <div class="info-box">
            <span class="info-label">Data</span>
            <span>
                ${new Date(reserva.data_reserva).toLocaleString("pt-BR")}
            </span>
        </div>

        <div class="info-box">
            <span class="info-label">Pessoas</span>
            <span>${reserva.numero_pessoas}</span>
        </div>

        <button class="btn-cancelar" onclick="cancelarReserva(${reserva.id_reserva})">
        Cancelar Reserva
        </button>
    </div>
`;


                listaContainer.appendChild(card);
            });
        }

    } catch (err) {
    }
}

// Função para cancelar a reserva 
async function cancelarReserva(id) {
    if (!confirm("Tem certeza que deseja cancelar esta reserva?")) {
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/reserva/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            alert("Erro ao cancelar reserva");
            return;
        }

        alert("Reserva cancelada com sucesso!");

        carregarReservas(); // recarrega lista

    } catch (err) {
        console.error(err);
        alert("Erro ao conectar com o servidor");
    }
}