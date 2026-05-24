# PrivateServer — Table4U

Servidor da aplicação interna do Table4U, voltada exclusivamente para a **equipe do restaurante** — administradores, garçons, cozinha e recepção. Gerencia funcionários, atendimentos, pedidos, pagamentos e cardápio interno.

Roda em paralelo e de forma isolada do [PublicServer](../PublicServer/README.md), na porta **4000**, com banco de dados próprio. Acessa o banco público em modo somente leitura para consultar a fila e as reservas feitas pelos clientes.

---

## Estrutura de diretórios

```
PrivateServer/
├── server.js               # Entrada do servidor Express (porta 4000)
├── prisma.config.ts        # Configuração do Prisma (aponta para DATABASE_URL_PRIVATE)
├── prisma/
│   ├── schema.prisma       # Schema do banco privado (adm, funcionario, atendimento, pedido, prato, pagamento, tempo, pratos_do_dia)
│   ├── schema_public.prisma # Schema do banco público (somente leitura pelo Private)
│   ├── migrations/         # Histórico de migrations do banco privado
│   └── DBcommtxt.txt       # Notas de triggers SQL (log de deleção de funcionários)
├── src/
│   ├── pages/              # Páginas HTML da aplicação interna
│   │   ├── login.html      # Página de login (entrada única para todos os cargos)
│   │   ├── admin.html      # Dashboard administrativo (KPIs, cardápio, funcionários, histórico)
│   │   ├── waiter.html     # Gestão de mesas (check-in, check-out, status)
│   │   ├── order.html      # Realização de pedidos por mesa
│   │   ├── checkout.html   # Fechamento de conta por mesa
│   │   ├── kitchen.html    # Fila de pedidos para a cozinha
│   │   └── reception.html  # Gestão de fila de espera e reservas
│   ├── scripts/
│   │   ├── shared.js       # Lógica compartilhada entre todas as páginas (tema, sidebar, profile, toast, sessão)
│   │   ├── waiter.js       # Lógica de mesas — fetch, render, check-in, check-out, status
│   │   ├── order.js        # Lógica de pedidos — busca cardápio da API, seleção e envio
│   │   ├── reception.js    # Lógica de recepção — fila e reservas da API
│   │   └── rehash-senhas.js # Script de migração: rehash de senhas em texto puro para bcrypt
│   ├── styles/
│   │   └── shared.css      # Design system compartilhado (tokens CSS, sidebar, topbar, modais, status)
│   ├── api/
│   │   └── model/          # Modelo de ML para previsão de tempo de espera (mesmo do PublicServer)
│   │       ├── model.py
│   │       ├── modelo_xgboost.pkl
│   │       └── colunas.pkl
│   ├── components/         # (reservado para assets estáticos futuros)
│   ├── services/           # (reservado para integrações futuras)
│   ├── config/             # (reservado para configurações futuras)
│   └── utils/              # (reservado para utilitários futuros)
├── .env.example            # Variáveis de ambiente necessárias
├── .gitignore
└── package.json
```

---

## Pré-requisitos

- Node.js 20+
- PostgreSQL (local ou em nuvem — recomendamos [Neon](https://neon.tech))

---

## Configuração

1. Crie um arquivo `.env` na raiz de `PrivateServer/` com base no `.env.example`:

```env
DATABASE_URL_PRIVATE="postgresql://usuario:senha@host:5432/nomedobanco?sslmode=require"
```

> `DATABASE_URL_PRIVATE` é o banco interno do restaurante.
> O schema público (`schema_public.prisma`) lê a variável `DATABASE_URL_PUBLIC`, que também deve ser declarada no `.env` caso os endpoints `/api/todas-filas` e `/api/todas-reservas` sejam utilizados.

2. Instale as dependências:

```bash
npm install
```

O `postinstall` executa `prisma generate` automaticamente, gerando dois Prisma Clients: um para o banco privado (`generated/private`) e um para o banco público (`generated/public`).

3. Rode as migrations no banco privado:

```bash
npx prisma migrate deploy --config prisma.config.ts
```

---

## Rodando

```bash
npm start
# Disponível em http://localhost:4000
# Redireciona automaticamente para /pages/login.html
```

Para desenvolvimento (mata o processo anterior na porta 4000 automaticamente):

```bash
npm run dev
```

---

## Migração de senhas (primeira execução após atualização)

Se o banco tiver funcionários ou admins com senhas em texto puro (cadastrados antes da implementação do bcrypt), rode o script de migração **uma única vez**:

```bash
npm run rehash-senhas
```

O script detecta automaticamente quais senhas já estão hasheadas (`$2b$...`) e ignora, processando apenas as que ainda estão em texto puro.

---

## Rotas da API

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/login` | Autentica funcionário ou admin com bcrypt. Retorna `{ email, role, label }`. Busca primeiro em `funcionario`, depois em `adm`. |

### Funcionários

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/funcionarios` | Lista todos os funcionários |
| `POST` | `/api/funcionarios` | Cria novo funcionário (senha padrão `123` hasheada com bcrypt, vinculado ao primeiro admin encontrado) |
| `PUT` | `/api/funcionarios/:id` | Atualiza nome, e-mail e cargo de um funcionário |
| `DELETE` | `/api/funcionarios/:id` | Remove um funcionário pelo ID |

### Mesas

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/mesas` | Lista todas as mesas com status atual |
| `POST` | `/api/mesas/seed` | Cria as 12 mesas padrão (só executa se não houver nenhuma) |
| `PUT` | `/api/mesas/:id/status` | Atualiza o status de uma mesa (`available`, `occupied`, `unavailable`) |
| `POST` | `/api/mesas/:id/checkin` | Faz check-in: muda mesa para `occupied` e cria um `atendimento` |
| `POST` | `/api/mesas/:id/checkout` | Faz check-out: muda mesa para `available` e fecha o `atendimento` ativo |
| `GET` | `/api/mesas/:id/atendimento-ativo` | Retorna o atendimento em aberto de uma mesa (sem `checkout`) |

### Pedidos

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/mesas/:id/pedidos` | Retorna os pedidos do atendimento ativo da mesa, com dados do prato |
| `POST` | `/api/mesas/:id/pedidos` | Adiciona itens ao atendimento ativo da mesa |

### Cardápio (Pratos)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/pratos` | Lista todos os pratos com tempo de preparo |
| `POST` | `/api/pratos` | Cria novo prato (com `tempo` opcional) |
| `PUT` | `/api/pratos/:id` | Atualiza um prato (upsert no `tempo` de preparo) |
| `DELETE` | `/api/pratos/:id` | Remove um prato |

### Banco público — Fila (recepção)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/todas-filas` | Lista toda a fila de espera com dados do cliente |
| `GET` | `/api/todas-reservas` | Lista todas as reservas com dados do cliente |
| `POST` | `/api/chamar-fila/:id` | Atualiza o status da entrada na fila para `"sua vez chegou"` |
| `POST` | `/api/atender-fila/:id` | Remove a entrada da fila (cliente foi atendido) |

> Os endpoints de fila operam sobre o banco **público**, permitindo que a recepção gerencie a fila criada pelos clientes via PublicServer.

---

## Banco de dados

### Banco privado (`schema.prisma`)

| Modelo | Descrição |
|--------|-----------|
| `adm` | Administradores do sistema |
| `funcionario` | Funcionários (garçons, cozinha, recepção), vinculados a um `adm`, com campo `cargo` |
| `mesa` | Mesas do restaurante com capacidade e status (`available`, `occupied`, `unavailable`) |
| `atendimento` | Registro de cada atendimento (check-in/check-out, número de pessoas, funcionário, mesa) |
| `pedido` | Itens pedidos em um atendimento (prato + quantidade) |
| `prato` | Cardápio com nome, preço, custo, categoria, descrição, emoji e flag de disponibilidade |
| `tempo` | Tempo de preparo estimado por prato (relação 1-1 com `prato`) |
| `pratos_do_dia` | Pratos disponíveis em cada dia com quantidade |
| `pagamento` | Registro de pagamento de cada atendimento (forma, valor, data) |

### Banco público (`schema_public.prisma`)

Acessado em modo somente leitura. Contém `Cliente`, `Fila` e `Reserva` — os mesmos modelos gerenciados pelo PublicServer.

### Trigger SQL

O arquivo `prisma/DBcommtxt.txt` documenta um trigger PostgreSQL que registra deleções de funcionários em uma tabela `log_funcionario`. Esse trigger deve ser aplicado manualmente no banco após as migrations:

```sql
CREATE OR REPLACE FUNCTION log_delete_funcionario() ...
CREATE TRIGGER trigger_delete_funcionario ...
```

---

## Autenticação

O login é feito via `POST /api/login` com e-mail e senha. O servidor busca o usuário primeiro na tabela `funcionario` (retorna o campo `cargo` como role) e depois em `adm` (retorna `"admin"` como role). As senhas são comparadas com bcrypt.

O frontend salva `{ email, role, label }` no `sessionStorage` após login bem-sucedido. Todas as páginas verificam essa sessão ao carregar e redirecionam para `login.html` se ela estiver ausente ou o cargo não corresponder ao permitido para aquela página.

---

## Frontend interno

Todas as páginas seguem um padrão de layout compartilhado composto por:

- **Sidebar** recolhível com navegação por seção e botão de logout no rodapé
- **Topbar** com identificação da página atual, toggle de tema claro/escuro e menu de perfil
- **Toast** para notificações não intrusivas

O arquivo `src/scripts/shared.js` centraliza a lógica comum (tema, sidebar, profile dropdown, toast, sessão e guard de autenticação). Scripts específicos por página (`waiter.js`, `order.js`, `reception.js`) tratam a comunicação com a API e a renderização de cada funcionalidade. O arquivo `src/styles/shared.css` define os tokens de design (CSS custom properties para light/dark), o layout raiz, a sidebar, a topbar e os componentes de modal e status.

### Páginas e responsabilidades

| Página | Cargo | Descrição |
|--------|-------|-----------|
| `login.html` | Todos | Login com redirecionamento por cargo |
| `admin.html` | Admin | Dashboard com KPIs, gráficos, gestão de cardápio, funcionários e histórico de alterações |
| `waiter.html` | Garçom | Lista de mesas carregada via API, com status em tempo real, check-in, check-out e navegação para pedidos |
| `order.html` | Garçom | Cardápio carregado via API (`/api/pratos`), seleção por categoria, anotações por item e envio para `/api/mesas/:id/pedidos` |
| `checkout.html` | Garçom | Nota fiscal com lista de pedidos, toggle de taxa de serviço (10%) e fechamento de conta |
| `kitchen.html` | Cozinha | Fila de pedidos a preparar |
| `reception.html` | Recepção | Gestão da fila de espera e reservas vindas do banco público |

---

## Tema claro / escuro

Gerenciado por `T4U.applyTheme()` em `shared.js`. A preferência é salva no `localStorage` com a chave `t4u-private-theme` e persiste entre sessões. O snippet anti-flash está presente no `<head>` de cada página para evitar piscar ao carregar.