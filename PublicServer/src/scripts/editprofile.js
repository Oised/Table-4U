document.addEventListener('DOMContentLoaded', function() {
    carregarDadosPerfil();
});

function carregarDadosPerfil() {
    // Puxa os dados salvos e preenche os inputs

    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    const nome = usuario?.nome || '';
    const email = usuario?.email || '';

    document.getElementById('edit-nome').value = nome;
    document.getElementById('edit-email').value = email;
}

function enviarCodigoSenha() {
    const codigo = Math.floor(100000 + Math.random() * 900000).toString();

    // salva código e email
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    localStorage.setItem("codigoRecuperacao", codigo);
    localStorage.setItem("emailRecuperacao", usuario.email);

    console.log("Código enviado (simulação):", codigo);

    alert("Código enviado para o seu email (simulado no console)");

    document.getElementById('fluxo-senha-1').style.display = 'none';
    document.getElementById('fluxo-senha-2').style.display = 'block';
}

function verificarCodigoSenha() {
    const codigoDigitado = document.getElementById('edit-codigo').value;
    const codigoSalvo = localStorage.getItem("codigoRecuperacao");

    if (codigoDigitado !== codigoSalvo) {
        alert("Código inválido!");
        return;
    }

    document.getElementById('fluxo-senha-2').style.display = 'none';
    document.getElementById('fluxo-senha-3').style.display = 'block';
}

function salvarPerfil() {
    const novoNome = document.getElementById('edit-nome').value;
    const novoEmail = document.getElementById('edit-email').value;
    
    // Atualiza os dados básicos
   let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
   const emailAntigo = usuario.email;

   if (novoNome) usuario.nome = novoNome;
   if (novoEmail) usuario.email = novoEmail;

localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios = usuarios.map(u => {
  if (u.email === usuario.email) {
    return {
      ...u,
      nome: usuario.nome,
      email: usuario.email,
      senha: u.senha // mantém a senha
    };
  }
  return u;
});

localStorage.setItem("usuarios", JSON.stringify(usuarios));

let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

reservas = reservas.map(r => {
  if (r.email === emailAntigo) {
    return {
      ...r,
      nome: usuario.nome,
      email: usuario.email
    };
  }
  return r;
});

localStorage.setItem("reservas", JSON.stringify(reservas));

    // Verifica se a pessoa chegou até a etapa de trocar senha
    const fluxo3Visivel = document.getElementById('fluxo-senha-3').style.display === 'block';
    
    if (fluxo3Visivel) {
        const senha1 = document.getElementById('edit-nova-senha').value;
        const senha2 = document.getElementById('edit-confirma-senha').value;

        if (senha1 !== senha2) {
            alert('As senhas não coincidem!');
            return;
        }

        if (senha1.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// atualiza senha no "banco"
  usuarios = usuarios.map(u => {
  if (u.email === emailAntigo) {
    return {
      ...u,
      senha: senha1
    };
  }
  return u;
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // atualiza usuário logado também
    usuario.senha = senha1;
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    }

    // Feedback visual de sucesso
    const msg = document.getElementById('msg-sucesso');
    msg.style.display = 'block';

    // Atualiza a bolinha de perfil no topo da tela instantaneamente
    if (typeof iniciarPerfil === 'function') {
        iniciarPerfil();
    }

    // Esconde a mensagem de sucesso depois de 3 segundos
    setTimeout(() => {
        msg.style.display = 'none';
        
        // Se trocou a senha, reseta a interface para o botão "Enviar Código" de novo
        if (fluxo3Visivel) {
            document.getElementById('fluxo-senha-3').style.display = 'none';
            document.getElementById('fluxo-senha-1').style.display = 'block';
            document.getElementById('edit-nova-senha').value = '';
            document.getElementById('edit-confirma-senha').value = '';
            document.getElementById('edit-codigo').value = '';
        }
    }, 3000);
}