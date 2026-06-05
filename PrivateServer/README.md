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
│   ├── schema.prisma       # Schema do banco privado (adm, funcionario, mesa, atendimento, pedido, prato, tempo, pagamento, pratos_do_dia)
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
│   │   └── model/          # Modelo de ML (mesmo do PublicServer)
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

- Node.js 18+
- PostgreSQL (local ou em nuvem — recomendamos [Neon](https://neon.tech))

---

## Configuração

1. Crie um arquivo `.env` na raiz de `PrivateServer/` com base no `.env.example`:

```env
DATABASE_URL_PRIVATE="postgresql://usuario:senha@host:5432/nomedobanco"
DATABASE_URL_PUBLIC="postgresql://usuario:senha@host:5432/nomedobanco"
```

> `DATABASE_URL_PRIVATE` é o banco interno do restaurante.
> `DATABASE_URL_PUBLIC` é necessário porque o PrivateServer acessa o banco público para consultar fila e reservas.

> **Atenção:** o `PrismaClientPublic` no `server.js` ainda tem a URL do banco local hardcoded como fallback. Certifique-se de que `DATABASE_URL_PUBLIC` esteja definido no `.env` para que a variável de ambiente tenha precedência.

2. Instale as dependências:

```bash
npm install
```

O `postinstall` executa `prisma generate` automaticamente, gerando dois Prisma Clients: um para o banco privado (`generated/private`) e um para o banco público (`generated/public`).

3. Rode as migrations no banco privado:

```bash
npx prisma migrate deploy --config prisma.config.ts
```

4. Popule as mesas padrão (necessário na primeira execução):

```bash
# Com o servidor rodando:
curl -X POST http://localhost:4000/api/mesas/seed
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

---

## Rotas da API

### Autenticação

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/login` | Autentica com bcrypt. Busca em `funcionario` (retorna `cargo`) depois em `adm` (retorna `"admin"`). Retorna `{ email, role, label }`. |

### Funcionários

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/funcionarios` | Lista todos os funcionários |
| `POST` | `/api/funcionarios` | Cria funcionário (senha padrão `123` hasheada, cargos válidos: `garcom`, `cozinha`, `recepcao`) |
| `PUT` | `/api/funcionarios/:id` | Atualiza nome, e-mail e cargo |
| `DELETE` | `/api/funcionarios/:id` | Remove um funcionário |

### Mesas

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/mesas` | Lista todas as mesas com status |
| `POST` | `/api/mesas/seed` | Cria as 12 mesas padrão (idempotente) |
| `PUT` | `/api/mesas/:id/status` | Atualiza status (`available`, `occupied`, `unavailable`) |
| `POST` | `/api/mesas/:id/checkin` | Check-in: muda mesa para `occupied` e cria `atendimento` |
| `POST` | `/api/mesas/:id/checkout` | Check-out: fecha `atendimento` ativo, registra duração e libera mesa |
| `GET` | `/api/mesas/:id/atendimento-ativo` | Retorna o atendimento em aberto da mesa |

### Pedidos

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/mesas/:id/pedidos` | Retorna pedidos do atendimento ativo da mesa |
| `POST` | `/api/mesas/:id/pedidos` | Adiciona itens ao atendimento ativo |
| `GET` | `/api/pedidos-ativos` | Lista todos os pedidos de mesas com atendimento aberto (uso da cozinha) |

### Cardápio (Pratos)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/pratos` | Lista todos os pratos com tempo de preparo |
| `POST` | `/api/pratos` | Cria novo prato (com `tempo` opcional) |
| `PUT` | `/api/pratos/:id` | Atualiza prato (upsert no tempo de preparo) |
| `PUT` | `/api/pratos/:id/disponibilidade` | Ativa ou desativa um prato |
| `DELETE` | `/api/pratos/:id` | Remove um prato |

### Pagamento

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/api/pagamento` | Registra pagamento de um atendimento (forma, valor, data) |

### Dashboard e KPIs (admin)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/dashboard` | KPIs do dia: faturamento, clientes atendidos, ticket médio, ocupação, top pratos, atividade recente |
| `GET` | `/api/dashboard/faturamento-7dias` | Faturamento dos últimos 7 dias por dia da semana |
| `GET` | `/api/dashboard/vendas-categoria` | Vendas do dia agrupadas por categoria de prato com percentuais |

### Histórico / Audit (admin)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/audit/pedidos` | Histórico de atendimentos com pedidos, responsável e total. Aceita filtro `?de=YYYY-MM-DD&ate=YYYY-MM-DD` |
| `GET` | `/api/audit/mesas` | Histórico de check-ins e check-outs por mesa. Aceita filtro `?de=YYYY-MM-DD&ate=YYYY-MM-DD` |

### Banco público — Fila (recepção)

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/todas-filas` | Lista fila de espera com dados do cliente |
| `GET` | `/api/todas-reservas` | Lista reservas com dados do cliente |
| `POST` | `/api/chamar-fila/:id` | Muda status da fila para `"sua vez chegou"` |
| `POST` | `/api/atender-fila/:id` | Remove entrada da fila (cliente atendido) |

---

## Banco de dados

### Banco privado (`schema.prisma`)

| Modelo | Descrição |
|--------|-----------|
| `adm` | Administradores do sistema |
| `funcionario` | Funcionários com campo `cargo` (`garcom`, `cozinha`, `recepcao`), vinculados a um `adm` |
| `mesa` | Mesas do restaurante com capacidade e status (`available`, `occupied`, `unavailable`) |
| `atendimento` | Registro de check-in/check-out, número de pessoas, duração e mesa |
| `pedido` | Itens pedidos em um atendimento (prato + quantidade) |
| `prato` | Cardápio com nome, preço, custo, categoria, descrição, emoji e flag de disponibilidade |
| `tempo` | Tempo de preparo estimado por prato (relação 1-1 com `prato`) |
| `pratos_do_dia` | Pratos disponíveis em cada dia com quantidade |
| `pagamento` | Registro de pagamento (forma, valor, data) vinculado a um atendimento |

### Banco público (`schema_public.prisma`)

Acessado em modo somente leitura. Contém `Cliente`, `Fila` e `Reserva`.

### Trigger SQL

O arquivo `prisma/DBcommtxt.txt` documenta um trigger PostgreSQL que registra deleções de funcionários em uma tabela `log_funcionario`. Deve ser aplicado manualmente após as migrations.

---

## Autenticação

O login é feito via `POST /api/login` com e-mail e senha. O servidor busca primeiro em `funcionario` (retorna o `cargo` como role) e depois em `adm` (retorna `"admin"`). As senhas são comparadas com bcrypt.

O frontend salva `{ email, role, label }` no `sessionStorage` após login bem-sucedido. Todas as páginas verificam essa sessão ao carregar e redirecionam para `login.html` se ela estiver ausente ou o cargo não corresponder ao esperado.

---

## Frontend interno

Todas as páginas seguem um padrão de layout compartilhado:

- **Sidebar** recolhível com navegação por seção e logout no rodapé
- **Topbar** com identificação da página, toggle de tema e menu de perfil
- **Toast** para notificações não intrusivas

O `src/scripts/shared.js` centraliza tema, sidebar, profile dropdown, toast e guard de autenticação. Scripts específicos (`waiter.js`, `order.js`, `reception.js`) tratam a comunicação com a API de cada funcionalidade. O `src/styles/shared.css` define os tokens de design (CSS custom properties para light/dark), layout e componentes.

### Páginas e responsabilidades

| Página | Cargo | Descrição |
|--------|-------|-----------|
| `login.html` | Todos | Login com redirecionamento por cargo |
| `admin.html` | Admin | Dashboard com KPIs, gráficos, cardápio, funcionários e histórico integrado ao banco |
| `waiter.html` | Garçom | Mesas carregadas via API com check-in, check-out e navegação para pedidos |
| `order.html` | Garçom | Cardápio via API, seleção por categoria, anotações e envio de pedidos |
| `checkout.html` | Garçom | Nota fiscal com pedidos do atendimento, toggle de taxa de serviço (10%) e registro de pagamento |
| `kitchen.html` | Cozinha | Pedidos ativos via `/api/pedidos-ativos` |
| `reception.html` | Recepção | Fila e reservas do banco público via API |

---

## Tema claro / escuro

Gerenciado por `shared.js`. A preferência é salva no `localStorage` com a chave `t4u-private-theme`. O snippet anti-flash está no `<head>` de cada página.
