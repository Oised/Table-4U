function irPara(event, url, motivo) {
    event.preventDefault();
    const logado = sessionStorage.getItem('logado');
    if (logado) {
        window.location.href = url;
    } else {
        sessionStorage.setItem('destino', url);
        sessionStorage.setItem('motivo', motivo);
        window.location.href = 'pages/login.html';
    }
}
// Verifica o status da fila assim que a home carrega
document.addEventListener('DOMContentLoaded', function() {
    const naFila = sessionStorage.getItem('usuario-na-fila');
    
    // Procura o botão de entrar na fila pelo link dele
    const btnFila = document.querySelector('a[href="pages/queue.html"]');

    if (btnFila && naFila === 'true') {
        // Se já está na fila, muda o texto para algo mais direto
        btnFila.textContent = 'FILA';
        // Opcional: Adicionar um icone de status ou mudar a cor se quiser
    }
});