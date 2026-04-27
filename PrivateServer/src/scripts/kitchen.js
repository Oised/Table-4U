const toggleBtn = document.getElementById("toggleSidebar");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebarMenu.classList.toggle("show");
    });
}

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});