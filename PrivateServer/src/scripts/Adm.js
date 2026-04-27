document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        sidebar.classList.toggle("open");
    });
});