/**
 * t4u-shared.js — Table4U · Lógica Compartilhada
 * Versão: 2.0.0
 *
 * Índice
 * ──────
 * 1. Constantes globais
 * 2. Tema (light / dark)
 * 3. Sidebar
 * 4. Profile dropdown
 * 5. Toast
 * 6. Sessão / autenticação
 * 7. Helpers de formato
 * 8. Storage de pedidos (sessionStorage)
 * 9. Dados de domínio — mesas (TABLES)
 * 10. Utilitários DOM
 * 11. Init automático
 */

if (typeof window.T4U !== 'undefined') {
    console.warn('[t4u-shared] Já carregado — ignorando redeclaração.');
} else {

window.T4U = (function () {
    'use strict';

    /* ─────────────────────────────────────────────────────────
       1. CONSTANTES GLOBAIS
    ───────────────────────────────────────────────────────── */
    const THEME_KEY    = 't4u-private-theme';
    const SESSION_KEY  = 't4u-user';
    const ORDERS_PREFIX  = 't4u-orders-table-';
    const RELEASE_PREFIX = 't4u-release-table-';

    /* ─────────────────────────────────────────────────────────
       2. TEMA
    ───────────────────────────────────────────────────────── */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
        const icon = document.getElementById('toggle-icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    function initTheme() {
        const saved = localStorage.getItem(THEME_KEY) || 'light';
        applyTheme(saved);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'light' ? 'dark' : 'light');
    }

    function _bindThemeBtn() {
        const btn = document.getElementById('toggle-theme-btn');
        if (btn) btn.addEventListener('click', toggleTheme);
    }

    /* ─────────────────────────────────────────────────────────
       3. SIDEBAR
    ───────────────────────────────────────────────────────── */
    function _bindSidebar() {
        const btn     = document.getElementById('sidebar-toggle-btn');
        const sidebar = document.getElementById('sidebar');
        if (btn && sidebar) {
            btn.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
        }
    }

    /* ─────────────────────────────────────────────────────────
       4. PROFILE DROPDOWN
    ───────────────────────────────────────────────────────── */
    function initProfileUI() {
        const user     = getUser();
        const initials = _initials(user.label);
        _setText('profile-initials', initials);
        _setText('dropdown-avatar',  initials);
        _setText('dropdown-name',    user.label);
        _setText('dropdown-role',    user.email);
    }

    function _bindProfileDropdown() {
        const btn      = document.getElementById('profile-btn');
        const dropdown = document.getElementById('profile-dropdown');
        if (!btn || !dropdown) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
        });
        dropdown.addEventListener('click', (e) => e.stopPropagation());
    }

    /* ─────────────────────────────────────────────────────────
       5. TOAST
    ───────────────────────────────────────────────────────── */
    function showToast(msg, duration) {
        duration = duration !== undefined ? duration : 3000;
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className  = 'toast';
        toast.textContent = msg;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.animation = 't4u-toast-out 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    /* ─────────────────────────────────────────────────────────
       6. SESSÃO / AUTENTICAÇÃO
    ───────────────────────────────────────────────────────── */
    function getUser() {
        try {
            return JSON.parse(sessionStorage.getItem(SESSION_KEY))
                || { label: 'Usuário', email: 'usuario@rest.com', role: '' };
        } catch (_) {
            return { label: 'Usuário', email: 'usuario@rest.com', role: '' };
        }
    }

    function setUser(user) {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }

    function logout() {
        showToast('Saindo...');
        setTimeout(() => {
            sessionStorage.removeItem(SESSION_KEY);
            window.location.href = 'login.html';
        }, 900);
    }

    /**
     * Verifica se há sessão ativa. Se não houver, redireciona
     * para login.html imediatamente.
     * Uso opcional: chamar no topo do script de cada página.
     *
     * @param {string} [requiredRole]  Se informado, verifica também o cargo.
     */
    function requireAuth(allowedRoles) {
        const user = getUser();
        if (!user.email || user.email === 'usuario@rest.com') {
            window.location.href = 'login.html';
            return;
        }
        if (allowedRoles) {
            const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
            if (!roles.includes(user.role)) {
                window.location.href = 'login.html';
            }
        }
    }

    /* ─────────────────────────────────────────────────────────
       7. HELPERS DE FORMATO
    ───────────────────────────────────────────────────────── */
    function fmtTime(ts) {
        return new Date(ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    }

    function fmtDate(ts) {
        return new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
    }

    function fmtPrice(n) {
        return 'R$ ' + Number(n).toFixed(2).replace('.', ',');
    }

    function escHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g,  '&lt;')
            .replace(/>/g,  '&gt;')
            .replace(/"/g, '&quot;');
    }

    /* ─────────────────────────────────────────────────────────
       8. STORAGE DE PEDIDOS
    ───────────────────────────────────────────────────────── */
    function getOrders(tableId) {
        try {
            return JSON.parse(sessionStorage.getItem(ORDERS_PREFIX + tableId)) || [];
        } catch (_) {
            return [];
        }
    }

    function addOrderRound(tableId, round) {
        const history = getOrders(tableId);
        history.push(round);
        sessionStorage.setItem(ORDERS_PREFIX + tableId, JSON.stringify(history));
    }

    function clearOrders(tableId) {
        sessionStorage.removeItem(ORDERS_PREFIX + tableId);
    }

    function signalTableRelease(tableId) {
        sessionStorage.setItem(RELEASE_PREFIX + tableId, 'true');
    }

    function consumeTableRelease(tableId) {
        const key = RELEASE_PREFIX + tableId;
        if (sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);
            return true;
        }
        return false;
    }

    /* ─────────────────────────────────────────────────────────
       9. DADOS DE DOMÍNIO — MESAS
    ───────────────────────────────────────────────────────── */
    const TABLES = [
        { id: 1,  capacity: 4,  status: 'available',   guests: 0, checkinTime: null },
        { id: 2,  capacity: 6,  status: 'occupied',    guests: 4, checkinTime: '18:15' },
        { id: 3,  capacity: 2,  status: 'unavailable', guests: 0, checkinTime: null },
        { id: 4,  capacity: 4,  status: 'available',   guests: 0, checkinTime: null },
        { id: 5,  capacity: 8,  status: 'occupied',    guests: 6, checkinTime: '17:50' },
        { id: 6,  capacity: 4,  status: 'available',   guests: 0, checkinTime: null },
        { id: 7,  capacity: 2,  status: 'unavailable', guests: 0, checkinTime: null },
        { id: 8,  capacity: 6,  status: 'available',   guests: 0, checkinTime: null },
        { id: 9,  capacity: 10, status: 'available',   guests: 0, checkinTime: null },
        { id: 10, capacity: 4,  status: 'occupied',    guests: 2, checkinTime: '18:40' },
    ];

    const STATUS_CONFIG = {
        available:   { icon: '🟢', label: 'Disponível',   meta: 'Pronta para receber clientes' },
        occupied:    { icon: '🔵', label: 'Ocupada',      meta: null },
        unavailable: { icon: '🔴', label: 'Indisponível', meta: 'Requer atenção antes de liberar' },
    };

    /* ─────────────────────────────────────────────────────────
       10. UTILITÁRIOS DOM
    ───────────────────────────────────────────────────────── */
    function _setText(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function _initials(label) {
        return (label || 'U')
            .split(' ')
            .filter(Boolean)
            .map(w => w[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }

    /* ─────────────────────────────────────────────────────────
       11. INIT AUTOMÁTICO
    ───────────────────────────────────────────────────────── */
    function _init() {
        initTheme();
        _bindThemeBtn();
        _bindSidebar();
        _bindProfileDropdown();
        initProfileUI();
    }

    document.addEventListener('DOMContentLoaded', _init);

    /* ── API PÚBLICA ── */
    return {
        applyTheme, initTheme, toggleTheme,
        initProfileUI,
        showToast,
        getUser, setUser, logout, requireAuth,
        fmtTime, fmtDate, fmtPrice, escHtml,
        getOrders, addOrderRound, clearOrders, signalTableRelease, consumeTableRelease,
        TABLES, STATUS_CONFIG,
        THEME_KEY, SESSION_KEY, ORDERS_PREFIX, RELEASE_PREFIX,
    };

}());

/* ── ATALHOS GLOBAIS ── */
if (typeof window.logout    === 'undefined') window.logout    = () => T4U.logout();
if (typeof window.showToast === 'undefined') window.showToast = (m, d) => T4U.showToast(m, d);
if (typeof window.escHtml   === 'undefined') window.escHtml   = str =>
    String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

} // fim do guard