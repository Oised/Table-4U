function iniciarPerfil() {
    const nome = sessionStorage.getItem('usuario-nome') || '';
    const email = sessionStorage.getItem('usuario-email') || '';
    const logado = sessionStorage.getItem('logado');
    const iniciais = nome ? nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '?';

    document.querySelectorAll('.perfil-iniciais').forEach(el => el.textContent = iniciais);
    document.querySelectorAll('.perfil-avatar-grande').forEach(el => el.textContent = iniciais);
    document.querySelectorAll('.perfil-nome').forEach(el => el.textContent = logado ? nome : 'Visitante');
    document.querySelectorAll('.perfil-email').forEach(el => el.textContent = logado ? email : '');

    document.querySelectorAll('.perfil-logado').forEach(el => el.style.display = logado ? 'flex' : 'none');
    document.querySelectorAll('.perfil-deslogado').forEach(el => el.style.display = logado ? 'none' : 'flex');
}

function togglePerfil() {
    document.getElementById('popup-perfil').classList.toggle('ativo');
}

function sair() {
    sessionStorage.clear();
    window.location.href = '/src/index.html';
}

document.addEventListener('click', function(e) {
    const popup = document.getElementById('popup-perfil');
    const btn = document.querySelector('.perfil-btn');
    if (popup && btn && !popup.contains(e.target) && !btn.contains(e.target)) {
        popup.classList.remove('ativo');
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarPerfil);
} else {
    iniciarPerfil();
}