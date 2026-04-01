document.addEventListener('DOMContentLoaded', function() {
    const motivo = sessionStorage.getItem('motivo');
    if (motivo) {
        const banner = document.createElement('div');
        banner.className = 'motivo-banner';
        banner.textContent = motivo + ', é necessário fazer login ou criar uma conta.';
        document.querySelector('.login-container').insertBefore(
            banner,
            document.querySelector('.login-card')
        );
    }
});


function mostrarStep(id) {
    document.querySelectorAll('.login-card').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function toggleSenha(inputId, btn) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.style.opacity = input.type === 'text' ? '0.9' : '0.4';
}

function fazerLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;
    if (!email || !senha) return;

    sessionStorage.setItem('logado', 'true');
    sessionStorage.setItem('usuario-email', email);
    sessionStorage.setItem('usuario-nome', email.split('@')[0]);

    const destino = sessionStorage.getItem('destino') || '../index.html';
    sessionStorage.removeItem('destino');
    window.location.href = destino;
}

function fazerCadastro() {
    const nome = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;
    if (!nome || !email || !senha) return;

    sessionStorage.setItem('usuario-nome', nome);
    sessionStorage.setItem('usuario-email', email);

    mostrarStep('step-sucesso');
}

function enviarCodigo() {
    const email = document.getElementById('esqueci-email').value;
    if (!email) return;
    document.getElementById('step-esqueci-email').style.display = 'none';
    document.getElementById('step-esqueci-codigo').style.display = 'block';
}

function redefinirSenha() {
    const nova = document.getElementById('nova-senha').value;
    const confirmar = document.getElementById('confirmar-senha').value;
    if (!nova || !confirmar || nova !== confirmar) return;
    mostrarStep('step-login');
}