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