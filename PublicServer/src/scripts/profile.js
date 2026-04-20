function iniciarPerfil() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario || !usuario.nome || !usuario.email) {
        mostrarDeslogado();
        return;
    }

    const nome = usuario.nome;
    const email = usuario.email;

    const iniciais = nome
        ? nome.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
        : '?';

    document.querySelectorAll('.perfil-iniciais').forEach(el => el.textContent = iniciais);
    document.querySelectorAll('.perfil-avatar-grande').forEach(el => el.textContent = iniciais);
    document.querySelectorAll('.perfil-nome').forEach(el => el.textContent = nome);
    document.querySelectorAll('.perfil-email').forEach(el => el.textContent = email);

    document.querySelectorAll('.perfil-logado').forEach(el => el.style.display = 'flex');
    document.querySelectorAll('.perfil-deslogado').forEach(el => el.style.display = 'none');
}

function mostrarDeslogado() {
    document.querySelectorAll('.perfil-nome').forEach(el => el.textContent = 'Visitante');
    document.querySelectorAll('.perfil-email').forEach(el => el.textContent = '');

    document.querySelectorAll('.perfil-logado').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.perfil-deslogado').forEach(el => el.style.display = 'flex');
}

function togglePerfil() {
    document.getElementById('popup-perfil').classList.toggle('ativo');
}

function sair() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "/src/pages/login.html";
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

function irParaMinhasReservas(event) {
    event.preventDefault();
    // Como o index fica na raiz e as outras páginas na pasta pages, 
    // precisamos checar onde estamos para não quebrar o link
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        window.location.href = 'mybookings.html';
    } else {
        window.location.href = 'pages/mybookings.html';
    }
}

function irParaEditarPerfil(event) {
    event.preventDefault();
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        window.location.href = 'editprofile.html';
    } else {
        window.location.href = 'pages/editprofile.html';
    }
}