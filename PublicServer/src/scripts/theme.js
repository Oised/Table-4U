// === SISTEMA DE TEMA (CLARO / ESCURO) ===
// Arquivo: scripts/theme.js
// Inclua este script em todas as páginas públicas.

(function () {
    const STORAGE_KEY = 'table4u-theme';
    const DARK  = 'dark';
    const LIGHT = 'light';

    // Aplica o tema ao <html> antes de qualquer render para evitar flash
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    // Retorna o tema salvo ou detecta preferência do sistema
    function getSavedTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
    }

    // Aplica imediatamente (antes do DOMContentLoaded) para evitar flash
    applyTheme(getSavedTheme());

    // Cria e injeta o botão na página
    function injectThemeButton() {
        const btn = document.createElement('button');
        btn.id = 'theme-toggle-btn';
        btn.className = 'theme-toggle-btn';
        btn.setAttribute('aria-label', 'Alternar tema claro/escuro');
        btn.setAttribute('title', 'Alternar tema');
        btn.innerHTML = `
            <span class="theme-icon theme-icon--moon">🌙</span>
            <span class="theme-icon theme-icon--sun">☀️</span>
        `;
        btn.addEventListener('click', toggleTheme);
        document.body.appendChild(btn);
        updateButtonState(getSavedTheme());
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || DARK;
        const next = current === DARK ? LIGHT : DARK;
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
        updateButtonState(next);
    }

    function updateButtonState(theme) {
        const btn = document.getElementById('theme-toggle-btn');
        if (!btn) return;
        btn.setAttribute('data-theme', theme);
        btn.setAttribute('aria-label', theme === DARK ? 'Mudar para modo claro' : 'Mudar para modo escuro');
    }

    // Injeta o botão quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectThemeButton);
    } else {
        injectThemeButton();
    }
})();
