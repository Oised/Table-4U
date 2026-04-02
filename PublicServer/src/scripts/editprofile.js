document.addEventListener('DOMContentLoaded', function() {
    carregarDadosPerfil();
});

function carregarDadosPerfil() {
    // Puxa os dados salvos e preenche os inputs
    const nome = sessionStorage.getItem('usuario-nome') || '';
    const email = sessionStorage.getItem('usuario-email') || '';

    document.getElementById('edit-nome').value = nome;
    document.getElementById('edit-email').value = email;
}

function enviarCodigoSenha() {
    // FINGE que chamou o back-end e enviou o e-mail
    document.getElementById('fluxo-senha-1').style.display = 'none';
    document.getElementById('fluxo-senha-2').style.display = 'block';
}

function verificarCodigoSenha() {
    const codigo = document.getElementById('edit-codigo').value;
    
    // Como é um mock de front-end, aceitamos qualquer código que não seja vazio
    if(codigo.trim() === '') {
        alert('Por favor, digite o código.');
        return;
    }

    // Código validado! Mostra os campos de nova senha
    document.getElementById('fluxo-senha-2').style.display = 'none';
    document.getElementById('fluxo-senha-3').style.display = 'block';
}

function salvarPerfil() {
    const novoNome = document.getElementById('edit-nome').value;
    const novoEmail = document.getElementById('edit-email').value;
    
    // Atualiza os dados básicos
    if (novoNome) sessionStorage.setItem('usuario-nome', novoNome);
    if (novoEmail) sessionStorage.setItem('usuario-email', novoEmail);

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
        
        // Aqui no futuro o front enviaria um POST pro back-end atualizar a senha no BD
        console.log("Senha pronta para ser enviada e criptografada pelo back-end.");
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