document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('cadastro') === 'true') {
        mostrarStep('step-cadastro');
    }

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

    console.log('logado:', sessionStorage.getItem('logado'));
    console.log('nome:', sessionStorage.getItem('usuario-nome'));

    const destino = sessionStorage.getItem('destino') || '/src/index.html';
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
    sessionStorage.setItem('logado', 'true'); // A correção que fizemos antes!

    // Lógica nova para arrumar a tela de sucesso
    const destino = sessionStorage.getItem('destino');
    const btnContinuar = document.getElementById('btn-continuar-destino');
    
    if (destino) {
        btnContinuar.style.display = 'block'; // Mostra o botão
        
        // Define o texto do botão baseado na URL
        if (destino.includes('fila.html')) {
            btnContinuar.textContent = 'Entrar na Fila';
        } else if (destino.includes('booking.html')) {
            btnContinuar.textContent = 'Fazer Reserva';
        } else {
            btnContinuar.textContent = 'Continuar';
        }
    } else {
        // Se não tinha destino (clicou em criar conta direto pelo perfil), esconde o botão
        btnContinuar.style.display = 'none'; 
    }

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

function irParaDestino() {
    // Pega o destino salvo ou manda pro início por padrão
    const destino = sessionStorage.getItem('destino') || '../index.html';
    

    sessionStorage.removeItem('destino');
    sessionStorage.removeItem('motivo');
    
    // Redireciona
    window.location.href = destino;
}
