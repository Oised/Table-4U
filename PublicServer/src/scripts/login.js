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

    let destino = sessionStorage.getItem('destino');
    sessionStorage.removeItem('destino');

    if (destino) {
        // Aplica o mesmo truque aqui para quem faz login direto!
        let arquivoDestino = destino.split('/').pop();
        window.location.href = arquivoDestino;
    } else {
        window.location.href = '../index.html';
    }
}

function fazerCadastro() {
    const nome = document.getElementById('cadastro-nome').value;
    const email = document.getElementById('cadastro-email').value;
    const senha = document.getElementById('cadastro-senha').value;
    if (!nome || !email || !senha) return;

    // Salva os dados e o status de logado
    sessionStorage.setItem('usuario-nome', nome);
    sessionStorage.setItem('usuario-email', email);
    sessionStorage.setItem('logado', 'true');

    // Lógica para o botão dinâmico
    const destino = sessionStorage.getItem('destino');
    const btnContinuar = document.getElementById('btn-continuar-destino');
    
    if (destino) {
        btnContinuar.style.display = 'block';
        
        // Deixei a verificação mais simples para não falhar
        if (destino.includes('fila')) {
            btnContinuar.textContent = 'Entrar na Fila';
        } else if (destino.includes('booking')) {
            btnContinuar.textContent = 'Fazer Reserva';
        } else {
            btnContinuar.textContent = 'Continuar';
        }
    } else {
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
    let destino = sessionStorage.getItem('destino');
    
    // Limpa a memória para não bugar depois
    sessionStorage.removeItem('destino');
    sessionStorage.removeItem('motivo');
    
    // Se não tinha destino, vai pro início
    if (!destino) {
        window.location.href = '../index.html';
        return;
    }

    // TRUQUE DE MESTRE: Pega só o nome final do arquivo (tira as barras e pastas)
    // Exemplo: 'pages/fila.html' vira só 'fila.html'
    let arquivoDestino = destino.split('/').pop();
    
    // Como você já está na pasta pages, basta chamar o nome do arquivo direto
    window.location.href = arquivoDestino;
}