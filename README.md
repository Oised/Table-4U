# Table-4U

## Descrição
Aplicativo para restaurantes. Abrange funcionalidades para o clinte (reserva e fila), sistema para funcionários (gerenciamento de mesas, pedidos, etc) e também ferramentas de controle para a administração.

## Tecnologias Utilizadas
- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Backend**: Node.js, Express
- **Banco de Dados**: PostgreSQL, Prisma ORM
- **Autenticação**: bcrypt (hash de senhas)
- **Outras**: dotenv, cors

## Estrutura do Projeto
```
Table-4U/
├── server.js                # Servidor principal (Express)
├── package.json             # Dependências do backend
├── prisma/
│   ├── schema.prisma        # Definição dos modelos (Cliente, Fila, Reserva)
│   └── migrations/          # Migrations do banco de dados
├── PublicServer/            # Aplicação voltada para clientes
│   ├── src/
│   │   ├── index.html       # Página inicial
│   │   ├── pages/           # Páginas (login, reserva, cardápio, fila, etc.)
│   │   ├── scripts/         # Scripts JavaScript (booking, login, profile, etc.)
│   │   ├── styles/          # Estilos CSS
│   │   ├── components/      # Componentes reutilizáveis (ex.: imagens, cardápio PDF)
│   │   ├── config/          # Configurações
│   │   └── utils/           # Utilitários
│   ├── database/            # Scripts SQL (se houver)
│   ├── docs/                # Documentação adicional
│   └── package.json         # Dependências do frontend público
├── PrivateServer/           # Aplicação voltada para funcionários
│   ├── src/
│   │   ├── pages/           # Páginas (login, recepção, garçom)
│   │   ├── scripts/         # Scripts JavaScript
│   │   ├── styles/          # Estilos CSS
│   │   ├── components/      # Componentes
│   │   ├── config/          # Configurações
│   │   └── utils/           # Utilitários
│   ├── generated/           # Código gerado pelo Prisma
│   └── package.json         # Dependências do servidor privado
├── node_modules/            # Dependências instaladas
└── .env                     # Variáveis de ambiente (DATABASE_URL)
```

## Diferenciação entre PublicServer e PrivateServer
- **PublicServer**: Interface para clientes. Permite criar conta, fazer login, reservar mesa, entrar na fila de espera, visualizar cardápio e gerenciar reservas.
- **PrivateServer**: Interface para staff. Restrita para a equipe do restaurante, oferece ferramentas de check-in, gerenciamento da fila e acompanhamento de pedidos.

## Integrantes
- **Arthur Vasconcellos França** – Back-end
- **João Guadagnucci Rozestraten** – Banco de dados
- **Pedro Desio Mendes Davoli** – Banco de dados
- **Ricardo Augusto Azambuja** – Back-end
- **Sophia Helena Amaral Leite** – Front-end
- **Vinícius Batista Moraes** – Front-end

## Status do Projeto
Em desenvolvimento.  
Primeira versão funcional (MVP) estimada para: **27/04/2026**.