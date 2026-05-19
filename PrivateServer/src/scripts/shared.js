/**
 * t4u-shared.js — Table4U · Lógica Compartilhada
 * Versão: 1.0.0
 *
 * Índice
 * ──────
 *  1.  Constantes globais
 *  2.  Tema (light / dark)
 *  3.  Sidebar
 *  4.  Profile dropdown
 *  5.  Toast
 *  6.  Sessão / autenticação
 *  7.  Helpers de formato
 *  8.  Storage de pedidos (sessionStorage)
 *  9.  Dados de domínio compartilhados
 *      9a. Tabela de mesas (TABLES)
 *      9b. Cardápio (MENU)
 * 10.  Utilitários DOM
 * 11.  Init automático (chamado no DOMContentLoaded)
 *
 * Como usar
 * ─────────
 * Adicione no <head> de cada página interna (não na login):
 *
 *   <script src="t4u-shared.js" defer></script>
 *
 * Todas as funções ficam no objeto global `T4U`, evitando
 * colisão com variáveis locais de cada página.
 * Funções que precisam ser acessadas por handlers inline no
 * HTML (onclick="...") são TAMBÉM expostas no escopo global
 * como atalhos ao final deste arquivo.
 */

/* ─────────────────────────────────────────────────────────────
   Guard: evita redeclaração se o script for incluído 2 vezes
   ───────────────────────────────────────────────────────────── */
if (typeof window.T4U !== 'undefined') {
    console.warn('[t4u-shared] Já carregado — ignorando redeclaração.');
} else {

window.T4U = (function () {
    'use strict';

    /* ─────────────────────────────────────────────────────────
       1. CONSTANTES GLOBAIS
       ───────────────────────────────────────────────────────── */

    const THEME_KEY   = 't4u-private-theme';  // localStorage
    const SESSION_KEY = 't4u-user';            // sessionStorage
    const MENU_KEY    = 't4u-menu';            // localStorage  — cardápio persistido pelo Admin

    /**
     * Prefixo das chaves de pedidos por mesa no sessionStorage.
     * Uso: `ORDERS_PREFIX + tableId`  →  't4u-orders-table-3'
     */
    const ORDERS_PREFIX  = 't4u-orders-table-';

    /**
     * Prefixo das flags de liberação de mesa (escrita pelo checkout,
     * lida por waiter/reception ao recarregar).
     * Uso: `RELEASE_PREFIX + tableId`  →  't4u-release-table-3'
     */
    const RELEASE_PREFIX = 't4u-release-table-';


    /* ─────────────────────────────────────────────────────────
       2. TEMA
       ───────────────────────────────────────────────────────── */

    /**
     * Aplica um tema ao <html> e persiste a escolha.
     * Atualiza o ícone do toggle (☀️ / 🌙) se o elemento
     * #toggle-icon existir na página.
     *
     * @param {'light'|'dark'} theme
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);

        const icon = document.getElementById('toggle-icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    /**
     * Lê o tema salvo e o aplica. Deve ser chamado após o DOM
     * estar pronto (ou use o inline IIFE no <head> para evitar
     * flash — ver nota abaixo).
     *
     * Nota: o IIFE inline no <head> que cada página já possui:
     *   (function(){ var s=localStorage.getItem('t4u-private-theme');
     *     document.documentElement.setAttribute('data-theme',s||'light'); })();
     * continua sendo necessário para evitar FOUC. O initTheme() aqui
     * garante que o ícone do toggle também seja atualizado.
     */
    function initTheme() {
        const saved = localStorage.getItem(THEME_KEY) || 'light';
        applyTheme(saved);
    }

    /**
     * Alterna entre light e dark. Pode ser chamado diretamente
     * pelo handler do botão de toggle.
     */
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'light' ? 'dark' : 'light');
    }

    /**
     * Registra o listener no botão #toggle-theme-btn, se existir.
     */
    function _bindThemeBtn() {
        const btn = document.getElementById('toggle-theme-btn');
        if (btn) btn.addEventListener('click', toggleTheme);
    }


    /* ─────────────────────────────────────────────────────────
       3. SIDEBAR
       ───────────────────────────────────────────────────────── */

    /**
     * Registra o listener no botão #sidebar-toggle-btn.
     * Alterna a classe `.collapsed` no #sidebar.
     */
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

    /**
     * Preenche os elementos do profile dropdown com os dados
     * da sessão atual.
     * Elementos esperados no HTML:
     *   #profile-initials, #dropdown-avatar, #dropdown-name, #dropdown-role
     */
    function initProfileUI() {
        const user     = getUser();
        const initials = _initials(user.label);

        _setText('profile-initials', initials);
        _setText('dropdown-avatar',  initials);
        _setText('dropdown-name',    user.label);
        _setText('dropdown-role',    user.email);
    }

    /**
     * Registra os listeners do dropdown (#profile-btn ↔ #profile-dropdown).
     * - Clique no botão: abre/fecha
     * - Clique fora: fecha
     * - Clique dentro do dropdown: não propaga (evita fechar)
     */
    function _bindProfileDropdown() {
        const btn      = document.getElementById('profile-btn');
        const dropdown = document.getElementById('profile-dropdown');
        if (!btn || !dropdown) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        dropdown.addEventListener('click', (e) => e.stopPropagation());
    }


    /* ─────────────────────────────────────────────────────────
       5. TOAST
       ───────────────────────────────────────────────────────── */

    /**
     * Exibe uma notificação toast.
     *
     * @param {string} msg       Mensagem a exibir.
     * @param {number} [duration=3000]  Duração em milissegundos.
     */
    function showToast(msg, duration) {
        duration = duration !== undefined ? duration : 3000;

        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className   = 'toast';
        toast.textContent = msg;
        container.appendChild(toast);

        setTimeout(() => {
            // Reutiliza o nome do keyframe definido no CSS compartilhado.
            // Se a página usar nome legado 'toast-out', funciona também pois
            // o browser ignora animações não encontradas sem lançar erro.
            toast.style.animation = 't4u-toast-out 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }


    /* ─────────────────────────────────────────────────────────
       6. SESSÃO / AUTENTICAÇÃO
       ───────────────────────────────────────────────────────── */

    /**
     * Retorna o usuário logado lido do sessionStorage.
     * Fallback: objeto com label e email genéricos (nunca lança).
     *
     * @returns {{ email: string, role: string, label: string }}
     */
    function getUser() {
        try {
            return JSON.parse(sessionStorage.getItem(SESSION_KEY))
                || { label: 'Usuário', email: 'usuario@rest.com', role: '' };
        } catch (_) {
            return { label: 'Usuário', email: 'usuario@rest.com', role: '' };
        }
    }

    /**
     * Salva um objeto de usuário na sessão.
     *
     * @param {{ email: string, role: string, label: string }} user
     */
    function setUser(user) {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    }

    /**
     * Remove a sessão e redireciona para login.html.
     * Exibe um toast de saída antes de redirecionar.
     */
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
    function requireAuth(requiredRole) {
        const user = getUser();
        if (!user.email || user.email === 'usuario@rest.com') {
            window.location.href = 'login.html';
            return;
        }
        if (requiredRole && user.role !== requiredRole) {
            showToast('Acesso não autorizado.');
            setTimeout(() => { window.location.href = 'login.html'; }, 1200);
        }
    }


    /* ─────────────────────────────────────────────────────────
       7. HELPERS DE FORMATO
       ───────────────────────────────────────────────────────── */

    /**
     * Formata um timestamp em hora no padrão pt-BR (HH:MM).
     * @param {number} ts  Timestamp em milissegundos.
     * @returns {string}
     */
    function fmtTime(ts) {
        return new Date(ts).toLocaleTimeString('pt-BR', {
            hour:   '2-digit',
            minute: '2-digit',
        });
    }

    /**
     * Formata um timestamp em data no padrão pt-BR (DD/MM/AA).
     * @param {number} ts
     * @returns {string}
     */
    function fmtDate(ts) {
        return new Date(ts).toLocaleDateString('pt-BR', {
            day:   '2-digit',
            month: '2-digit',
            year:  '2-digit',
        });
    }

    /**
     * Formata um número como moeda BRL.
     * @param {number} n
     * @returns {string}  Ex: "R$ 78,00"
     */
    function fmtPrice(n) {
        return 'R$ ' + Number(n).toFixed(2).replace('.', ',');
    }

    /**
     * Escapa caracteres especiais HTML para inserção segura em innerHTML.
     * @param {string} str
     * @returns {string}
     */
    function escHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }


    /* ─────────────────────────────────────────────────────────
       8. STORAGE DE PEDIDOS
       ───────────────────────────────────────────────────────── */

    /**
     * Lê o histórico de pedidos de uma mesa do sessionStorage.
     *
     * Estrutura de cada rodada:
     *   { timestamp: number, items: [{id, name, price, qty, note}], total: number }
     *
     * @param {number|string} tableId
     * @returns {Array}
     */
    function getOrders(tableId) {
        try {
            return JSON.parse(sessionStorage.getItem(ORDERS_PREFIX + tableId)) || [];
        } catch (_) {
            return [];
        }
    }

    /**
     * Acrescenta uma rodada de pedido ao histórico da mesa.
     *
     * @param {number|string} tableId
     * @param {{ timestamp: number, items: Array, total: number }} round
     */
    function addOrderRound(tableId, round) {
        const history = getOrders(tableId);
        history.push(round);
        sessionStorage.setItem(ORDERS_PREFIX + tableId, JSON.stringify(history));
    }

    /**
     * Remove todos os pedidos de uma mesa (chamado no checkout).
     * @param {number|string} tableId
     */
    function clearOrders(tableId) {
        sessionStorage.removeItem(ORDERS_PREFIX + tableId);
    }

    /**
     * Sinaliza que a mesa deve ser liberada na próxima vez que
     * waiter.html ou reception.html carregar.
     * (Comunicação temporária via sessionStorage até o backend existir.)
     *
     * @param {number|string} tableId
     */
    function signalTableRelease(tableId) {
        sessionStorage.setItem(RELEASE_PREFIX + tableId, 'true');
    }

    /**
     * Lê e consome a flag de liberação de uma mesa.
     * Retorna true se havia flag (e a remove); false caso contrário.
     *
     * @param {number|string} tableId
     * @returns {boolean}
     */
    function consumeTableRelease(tableId) {
        const key = RELEASE_PREFIX + tableId;
        if (sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);
            return true;
        }
        return false;
    }


    /* ─────────────────────────────────────────────────────────
       9a. DADOS DE DOMÍNIO — MESAS
       Fonte de verdade única para as mesas enquanto o backend
       não existe. Quando o backend estiver pronto, este array
       deve ser substituído por uma chamada a GET /api/tables.
       ───────────────────────────────────────────────────────── */

    /**
     * Lista canônica de mesas do restaurante.
     * Todos os campos que o backend devolverá estão presentes,
     * inclusive checkinTime (null quando disponível/indisponível).
     *
     * status: 'available' | 'occupied' | 'unavailable'
     */
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

    /**
     * STATUS_CONFIG — configuração de exibição por status de mesa.
     * Usado por waiter.html, reception.html e admin.html para
     * renderizar cards e modais de forma consistente.
     */
    const STATUS_CONFIG = {
        available: {
            icon:  '🟢',
            label: 'Disponível',
            meta:  'Pronta para receber clientes',
        },
        occupied: {
            icon:  '🔵',
            label: 'Ocupada',
            meta:  null,   // preenchido dinamicamente (nº de pessoas)
        },
        unavailable: {
            icon:  '🔴',
            label: 'Indisponível',
            meta:  'Requer atenção antes de liberar',
        },
    };


    /* ─────────────────────────────────────────────────────────
       9b. DADOS DE DOMÍNIO — CARDÁPIO
       Fonte de verdade compartilhada entre order.html,
       kitchen.html e admin.html.

       - order.html   usa: name, price, description, category
       - kitchen.html usa: nome, cat, desc, emoji, avail
       - admin.html   usa: todos os campos (CRUD)

       Para manter compatibilidade com os dois formatos durante
       a refatoração gradual, o array usa a estrutura do admin
       (campos em português + `avail`) e os helpers abaixo
       convertem para o formato que order.html espera.

       Quando o backend existir, substituir por GET /api/menu.
       ───────────────────────────────────────────────────────── */

    /**
     * Cardápio padrão (fallback quando não há nada no localStorage).
     * Campos:
     *   id, nome, cat, preco, desc, emoji, avail
     */
    const DEFAULT_MENU = [
        /* Entradas */
        { id: 1,  nome: 'Bruschetta ao tomate',  cat: 'Entradas',          preco: 28.90, desc: 'Pão italiano grelhado com tomate fresco, manjericão e azeite extravirgem.',          emoji: '🍞', avail: true  },
        { id: 2,  nome: 'Carpaccio de carne',    cat: 'Entradas',          preco: 42.00, desc: 'Finas lâminas de filé mignon com alcaparras, parmesão e molho mostarda.',            emoji: '🥩', avail: true  },
        { id: 3,  nome: 'Sopa de cebola',        cat: 'Entradas',          preco: 34.00, desc: 'Cebolas caramelizadas, caldo de carne, croutons e queijo gruyère gratinado.',        emoji: '🍲', avail: false },
        /* Pratos principais */
        { id: 4,  nome: 'Risoto de cogumelos',   cat: 'Pratos principais', preco: 68.00, desc: 'Arroz arbóreo com mix de cogumelos frescos, parmesão e manteiga trufada.',          emoji: '🍚', avail: true  },
        { id: 5,  nome: 'Salmão grelhado',       cat: 'Pratos principais', preco: 89.00, desc: 'Filé de salmão grelhado com crosta de ervas, aspargos salteados e purê.',           emoji: '🐟', avail: true  },
        { id: 6,  nome: 'Frango à parmegiana',   cat: 'Pratos principais', preco: 58.00, desc: 'Filé de frango empanado, molho de tomate artesanal, mozzarella e presunto.',        emoji: '🍗', avail: true  },
        { id: 7,  nome: 'Picanha na brasa',      cat: 'Pratos principais', preco: 112.00, desc: 'Picanha premium grelhada na brasa, acompanha farofa, vinagrete e arroz.',           emoji: '🥩', avail: true  },
        /* Bebidas */
        { id: 8,  nome: 'Água mineral',          cat: 'Bebidas',           preco: 8.00,  desc: 'Água mineral natural ou com gás 500ml.',                                            emoji: '💧', avail: true  },
        { id: 9,  nome: 'Suco de laranja',       cat: 'Bebidas',           preco: 18.00, desc: 'Suco natural de laranja espremido na hora, sem adição de açúcar.',                  emoji: '🍊', avail: true  },
        { id: 10, nome: 'Refrigerante lata',     cat: 'Bebidas',           preco: 12.00, desc: 'Cola, guaraná, limão ou laranja — lata 350ml gelada.',                              emoji: '🥤', avail: true  },
        { id: 11, nome: 'Vinho da casa (taça)',  cat: 'Bebidas',           preco: 32.00, desc: 'Vinho tinto ou branco selecionado, taça 180ml.',                                    emoji: '🍷', avail: true  },
        /* Sobremesas */
        { id: 12, nome: 'Petit gâteau',          cat: 'Sobremesas',        preco: 34.00, desc: 'Bolinho de chocolate quente com sorvete de creme e calda de frutas.',               emoji: '🍫', avail: true  },
        { id: 13, nome: 'Pudim de leite',        cat: 'Sobremesas',        preco: 22.00, desc: 'Pudim cremoso de leite condensado com calda de caramelo artesanal.',                emoji: '🍮', avail: true  },
        { id: 14, nome: 'Torta de limão',        cat: 'Sobremesas',        preco: 26.00, desc: 'Torta gelada de limão siciliano com merengue italiano.',                            emoji: '🍋', avail: false },
    ];

    /**
     * Carrega o cardápio: primeiro tenta o localStorage (persiste
     * edições do Admin), depois cai no DEFAULT_MENU.
     *
     * @returns {Array}  Array de pratos no formato do admin/cozinha.
     */
    function loadMenu() {
        try {
            const raw = localStorage.getItem(MENU_KEY);
            return raw ? JSON.parse(raw) : DEFAULT_MENU;
        } catch (_) {
            return DEFAULT_MENU;
        }
    }

    /**
     * Persiste o cardápio no localStorage.
     * @param {Array} menu
     */
    function saveMenu(menu) {
        localStorage.setItem(MENU_KEY, JSON.stringify(menu));
    }

    /**
     * Retorna o cardápio no formato que order.html espera:
     * array de categorias, cada uma com seus itens.
     *
     * Formato de saída:
     *   [{ id, label, icon, items: [{ id, name, price, description }] }]
     *
     * Apenas pratos com avail === true são incluídos.
     *
     * @returns {Array}
     */
    function getMenuForOrder() {
        const menu = loadMenu();

        const CAT_CONFIG = {
            'Entradas':          { id: 'entradas',   label: 'Entradas',          icon: '🥗' },
            'Pratos principais': { id: 'principais', label: 'Pratos Principais', icon: '🍽️' },
            'Bebidas':           { id: 'bebidas',    label: 'Bebidas',           icon: '🥤' },
            'Sobremesas':        { id: 'sobremesas', label: 'Sobremesas',        icon: '🍮' },
        };

        /* Mantém a ordem das categorias */
        const catOrder = ['Entradas', 'Pratos principais', 'Bebidas', 'Sobremesas'];
        const map = {};

        catOrder.forEach(catName => {
            if (CAT_CONFIG[catName]) {
                map[catName] = { ...CAT_CONFIG[catName], items: [] };
            }
        });

        menu.forEach(prato => {
            if (!prato.avail) return;
            const cat = map[prato.cat];
            if (!cat) return;
            cat.items.push({
                id:          prato.id,
                name:        prato.nome,
                price:       prato.preco,
                description: prato.desc,
                emoji:       prato.emoji || '🍽️',
            });
        });

        return catOrder
            .map(catName => map[catName])
            .filter(cat => cat && cat.items.length > 0);
    }

    /**
     * Retorna o cardápio no formato que kitchen.html espera:
     * array plano sem preço (cozinha não precisa de preço),
     * incluindo pratos indisponíveis (cozinha os vê todos).
     *
     * @returns {Array}  [{ id, nome, cat, desc, emoji, avail }]
     */
    function getMenuForKitchen() {
        return loadMenu().map(({ id, nome, cat, desc, emoji, avail }) => ({
            id, nome, cat, desc: desc || '', emoji: emoji || '🍽️', avail,
        }));
    }


    /* ─────────────────────────────────────────────────────────
       10. UTILITÁRIOS DOM
       ───────────────────────────────────────────────────────── */

    /**
     * Define textContent de um elemento pelo id (safe — ignora se não existir).
     * @param {string} id
     * @param {string} text
     */
    function _setText(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    /**
     * Gera as iniciais de um nome (máx. 2 letras).
     * @param {string} label
     * @returns {string}
     */
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
       Chamado no DOMContentLoaded. Inicializa tudo que é
       comum a todas as páginas internas sem precisar de código
       nas páginas individuais.
       ───────────────────────────────────────────────────────── */

    function _init() {
        initTheme();
        _bindThemeBtn();
        _bindSidebar();
        _bindProfileDropdown();
        initProfileUI();
    }

    document.addEventListener('DOMContentLoaded', _init);


    /* ─────────────────────────────────────────────────────────
       API PÚBLICA
       ───────────────────────────────────────────────────────── */
    return {
        /* Tema */
        applyTheme,
        initTheme,
        toggleTheme,

        /* Profile */
        initProfileUI,

        /* Toast */
        showToast,

        /* Sessão */
        getUser,
        setUser,
        logout,
        requireAuth,

        /* Formato */
        fmtTime,
        fmtDate,
        fmtPrice,
        escHtml,

        /* Pedidos */
        getOrders,
        addOrderRound,
        clearOrders,
        signalTableRelease,
        consumeTableRelease,

        /* Dados de domínio */
        TABLES,
        STATUS_CONFIG,
        DEFAULT_MENU,
        loadMenu,
        saveMenu,
        getMenuForOrder,
        getMenuForKitchen,

        /* Constantes de chave */
        THEME_KEY,
        SESSION_KEY,
        MENU_KEY,
        ORDERS_PREFIX,
        RELEASE_PREFIX,
    };

}()); // fim do IIFE T4U


/* ─────────────────────────────────────────────────────────────
   ATALHOS GLOBAIS
   Funções chamadas diretamente em atributos onclick="..." no HTML
   precisam estar no escopo global. Os atalhos abaixo expõem
   apenas o necessário — evitando poluir o global com tudo.

   Durante a refatoração página a página, cada HTML pode
   manter seu próprio `function logout() { ... }` local;
   quando o HTML for refatorado, basta remover o local e
   os handlers inline passarão a usar este atalho.
   ───────────────────────────────────────────────────────────── */

if (typeof window.logout === 'undefined') {
    window.logout    = function () { T4U.logout(); };
}

if (typeof window.showToast === 'undefined') {
    window.showToast = function (msg, duration) { T4U.showToast(msg, duration); };
}

if (typeof window.escHtml === 'undefined') {
    window.escHtml = function(str) {
        return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    };
}

} // fim do guard de redeclaração
