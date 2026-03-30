const usuario = {
    nome: 'Quincas Borba',
    email: 'quincas.borba@email.com'
};

function iniciarPerfil() {
    const iniciais = usuario.nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

    document.querySelectorAll('.perfil-iniciais').forEach(el => {
        el.textContent = iniciais;
    });

    document.querySelectorAll('.perfil-nome').forEach(el => {
        el.textContent = usuario.nome;
    });

    document.querySelectorAll('.perfil-email').forEach(el => {
        el.textContent = usuario.email;
    });

    document.querySelectorAll('.perfil-avatar-grande').forEach(el => {
        el.textContent = iniciais;
    });
}

function togglePerfil() {
    const popup = document.getElementById('popup-perfil');
    popup.classList.toggle('ativo');
}

document.addEventListener('click', function(e) {
    const popup = document.getElementById('popup-perfil');
    const btn = document.querySelector('.perfil-btn');
    if (popup && btn && !popup.contains(e.target) && !btn.contains(e.target)) {
        popup.classList.remove('ativo');
    }
});

document.addEventListener('DOMContentLoaded', iniciarPerfil);