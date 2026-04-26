function toggleSenha(inputId, btn) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = '🔒';
    } else {
        input.type = 'password';
        btn.textContent = '👁';
    }
}

function fazerLoginFuncionario() {
    const email = document.getElementById('func-email').value.trim();
    const senha = document.getElementById('func-senha').value;
    const cargo = document.getElementById('func-cargo').value;

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
//*********************************************************************** */
//BACK END ------> REMOVER ISSO QDO FOREM FAZZER
    
    const contas = {
        'recepcao@table4u.com': { senha: '1234', cargo: 'recepcao' }, // Adicionado recepção
        'garcom@table4u.com':  { senha: '1234', cargo: 'garcom' },
        'cozinha@table4u.com': { senha: '1234', cargo: 'cozinha' },
        'adm@table4u.com':     { senha: '1234', cargo: 'adm' },
    };

    const conta = contas[email];
    if (!conta || conta.senha !== senha || conta.cargo !== cargo) {
        alert("Credenciais inválidas.");
        return;
    }

    sessionStorage.setItem('logado', 'true');
    sessionStorage.setItem('usuario-email', email);
    sessionStorage.setItem('usuario-nome', email.split('@')[0]);
    sessionStorage.setItem('usuario-cargo', cargo);

   
    switch(cargo) {
        case 'recepcao':
            window.location.href = '../pages/reception.html'; //vinicius o ngc é aqui kk
            break;
        case 'garcom':
            window.location.href = '../pages/waiter.html';
            break;
        case 'cozinha':
            window.location.href = '../pages/cozinha.html';
            break;
        case 'adm':
            window.location.href = '../pages/admin.html';
            break;
        default:
            window.location.href = '../pages/index.html';
    }
}











    sessionStorage.setItem('logado', 'true');
    sessionStorage.setItem('usuario-email', email);
    sessionStorage.setItem('usuario-nome', email.split('@')[0]);
    sessionStorage.setItem('usuario-cargo', cargo);

switch(cargo) {
    case 'garcom':
        window.location.href = '../pages/waiter.html';
        break;
    case 'cozinha':
        window.location.href = '../pages/cozinha.html';
        break;
    case 'adm':
        window.location.href = '../pages/admin.html';
        break;
    default:
        window.location.href = '../pages/index.html';
}
