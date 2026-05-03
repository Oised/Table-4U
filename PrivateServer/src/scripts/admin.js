function sairFuncionario() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    sidebar.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}