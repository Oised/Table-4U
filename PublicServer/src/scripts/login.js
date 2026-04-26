document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('cadastro') === 'true') {
        mostrarStep('step-cadastro');
    }

    const motivo = sessionStorage.getItem('motivo');
    if (motivo) {
        showToast(motivo + ', é necessário fazer login ou criar uma conta.');
    }
});

// --- SISTEMA DE NOTIFICAÇÃO (TOAST) ---
function showToast(mensagem) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensagem;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

// --- VALIDAÇÕES ---
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarSenha(senha) {
    return senha.length >= 8 && /\d/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha);
}

// --- INTERFACE ---
function mostrarStep(id) {
    document.querySelectorAll('.login-card').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function toggleSenha(inputId, btn) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.style.opacity = input.type === 'text' ? '0.9' : '0.4';
}

// --- LÓGICA DE NEGÓCIO ---

async function fazerLogin() {
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;

    if (!validarEmail(email)) {
        showToast("E-mail inválido.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        if (!response.ok) {
            showToast("Login ou senha incorretos.");
            return;
        }

        const data = await response.json();
        localStorage.setItem("usuarioLogado", JSON.stringify(data.user));
        
        showToast("Bem-vindo(a)! ✨");
        setTimeout(() => {
            // Ajustado para o caminho da sua estrutura
            window.location.href = "../index.html"; 
        }, 1000);

    } catch (err) {
        showToast("Erro ao conectar com o servidor.");
    }
}

async function fazerCadastro() {
    const nome = document.getElementById("cadastro-nome").value;
    const email = document.getElementById("cadastro-email").value;
    const senha = document.getElementById("cadastro-senha").value;

    if (!nome || !email || !senha) {
        showToast("Preencha todos os campos!");
        return;
    }

    if (!validarEmail(email)) {
        showToast("E-mail inválido!");
        return;
    }

    if (!validarSenha(senha)) {
        showToast("Senha fraca: use 8+ caracteres, números e símbolos.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email, senha })
        });

        if (!response.ok) {
            showToast("Este e-mail já existe.");
            return;
        }

        // --- LOGIN AUTOMÁTICO ---
        showToast("Conta criada! Entrando...");

        const loginRes = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        if (loginRes.ok) {
            const loginData = await loginRes.json();
            localStorage.setItem("usuarioLogado", JSON.stringify(loginData.user));
            
            setTimeout(() => {
                // Como login.html está em /src/pages/, subimos um nível para achar o index.html em /src/
                window.location.href = "../index.html"; 
            }, 1500);
        } else {
            mostrarStep("step-login");
        }

    } catch (err) {
        showToast("Erro no servidor.");
    }
}