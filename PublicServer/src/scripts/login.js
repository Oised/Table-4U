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
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  //procura pelo email E senha
  const usuario = usuarios.find(user => user.email === email && user.senha === senha);

  if (!usuario) {
    alert("Email ou senha inválidos!");
    return;
  }

  //salva o usuário atualizado
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  alert("Login realizado!");

  window.location.href = "/src/pages/queue.html";
}

function fazerCadastro() {
  const nome = document.getElementById("cadastro-nome").value;
  const email = document.getElementById("cadastro-email").value;
  const senha = document.getElementById("cadastro-senha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  // pega usuários já cadastrados
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // verifica se já existe
  const existe = usuarios.find(user => user.email === email);

  if (existe) {
    alert("Esse email já está cadastrado!");
    return;
  }

  // cria novo usuário
  const novoUsuario = { nome, email, senha };

  usuarios.push(novoUsuario);

  // salva no localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Conta criada com sucesso!");

  // volta para login
  mostrarStep("step-login");
}

function enviarCodigo() {
    const email = document.getElementById("esqueci-email").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(u => u.email === email);

    if (!usuario) {
        alert("Email não encontrado!");
        return;
    }

    const codigo = Math.floor(100000 + Math.random() * 900000).toString();

    localStorage.setItem("codigoRecuperacao", codigo);
    localStorage.setItem("emailRecuperacao", email);

    console.log("Código:", codigo);

    alert("Código enviado (simulado no console)");

    document.getElementById("step-esqueci-email").style.display = "none";
    document.getElementById("step-esqueci-codigo").style.display = "block";
}

function redefinirSenha() {
    const codigo = document.getElementById("codigo-input").value;
    const novaSenha = document.getElementById("nova-senha").value;
    const confirmar = document.getElementById("confirmar-senha").value;

    const codigoSalvo = localStorage.getItem("codigoRecuperacao");
    const email = localStorage.getItem("emailRecuperacao");

    if (codigo !== codigoSalvo) {
        alert("Código inválido!");
        return;
    }

    if (novaSenha !== confirmar) {
        alert("Senhas não coincidem!");
        return;
    }

    if (novaSenha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios = usuarios.map(u => {
        if (u.email === email) {
            return {
                ...u,
                senha: novaSenha
            };
        }
        return u;
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Senha redefinida com sucesso!");

    window.location.href = "/src/pages/login.html";
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