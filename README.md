# Table4U

Sistema completo para gestão de restaurantes, dividido em duas aplicações independentes que rodam em paralelo:

- **PublicServer** — interface para os **clientes** do restaurante: cadastro, login, fila de espera, reservas e cardápio.
- **PrivateServer** — interface para a **equipe interna**: administradores, garçons, cozinha e recepção.

As duas aplicações têm bancos de dados separados e se comunicam de forma limitada e somente leitura (o Private lê fila e reservas do banco público; o Public lê atendimentos do banco privado).

---

## Tecnologias

- **Frontend** — HTML5, CSS3, JavaScript (vanilla)
- **Backend** — Node.js, Express
- **Banco de dados** — PostgreSQL, Prisma ORM
- **Autenticação** — bcrypt (hash de senhas)
- **Previsão de tempo de fila** — Python, Flask, XGBoost
- **Outras** — dotenv, cors

---

## Estrutura do repositório

```
Table-4U/
├── PublicServer/       # Aplicação voltada para clientes (porta 3000)
├── PrivateServer/      # Aplicação voltada para a equipe (porta 4000)
├── config.md           # Guia de solução de erros comuns de configuração
└── README.md
```

Cada servidor é independente e tem seu próprio `package.json`, `.env`, banco de dados e Prisma Client. Não há dependências cruzadas em tempo de execução — a comunicação entre bancos é feita por cada servidor acessar o schema do outro em modo somente leitura.

Para detalhes de cada servidor, consulte os READMEs internos:

- [`PublicServer/README.md`](./PublicServer/README.md)
- [`PrivateServer/README.md`](./PrivateServer/README.md)

---

## 📋 Pré-requisitos

Para rodar este projeto em sua máquina, você precisará ter instalados:

- **Node.js** (v18 ou superior) — [Download](https://nodejs.org)
- **PostgreSQL** (v13 ou superior) — [Download](https://www.postgresql.org/download) OU use um serviço cloud como [Neon](https://neon.tech)
- **npm** (vem com Node.js) ou **yarn**
- **Git** — [Download](https://git-scm.com)

### Verificar instalação

```bash
node --version    # Deve ser v18+
npm --version     # Deve ser v8+
psql --version    # PostgreSQL deve estar instalado
git --version
```

---

## 🗄️ Configuração do Banco de Dados

### Opção 1: PostgreSQL Local

Se você já tem PostgreSQL instalado, crie dois bancos de dados (um para cada aplicação):

```bash
# Abra o prompt do PostgreSQL
psql -U postgres

# Crie o banco público
CREATE DATABASE "DB_Part1_2" OWNER postgres;

# Crie o banco privado
CREATE DATABASE "DB_Part2_2" OWNER postgres;

# Saia do psql
\q
```

### Opção 2: PostgreSQL Online (Recomendado)

Use o **[Neon](https://neon.tech)** para ter PostgreSQL serverless sem configuração local:

1. Acesse [neon.tech](https://neon.tech) e crie uma conta
2. Crie dois projetos:
   - Um para `DB_Part1_2` (banco público)
   - Um para `DB_Part2_2` (banco privado)
3. Em cada projeto, copie a **connection string**. Ela terá este formato:

```
postgresql://user:password@endpoint.neon.tech:5432/database_name?sslmode=require
```

---

## 🚀 Guia Completo de Setup

### 1. Clone o repositório

```bash
git clone https://github.com/Oised/Table-4U.git
cd Table-4U
```

### 2. PublicServer (Cliente)

Acesse a pasta do servidor público:

```bash
cd PublicServer
```

**Instale as dependências:**

```bash
npm install
```

**Configure o arquivo `.env`:**

Crie um arquivo `.env` na raiz de `PublicServer`:

```env
# Banco de dados público (clientes, reservas, filas)
DATABASE_URL="postgresql://postgres:123@localhost:5432/DB_Part1_2"
DATABASE_URL_PUBLIC="postgresql://postgres:123@localhost:5432/DB_Part1_2"

# API do modelo de previsão (opcional)
MODEL_API_URL="http://localhost:5000/predict"
```

Se estiver usando Neon, substitua pela connection string fornecida pelo Neon:

```env
DATABASE_URL="postgresql://user:password@endpoint.neon.tech:5432/DB_Part1_2?sslmode=require"
DATABASE_URL_PUBLIC="postgresql://user:password@endpoint.neon.tech:5432/DB_Part1_2?sslmode=require"
MODEL_API_URL="http://localhost:5000/predict"
```

**Configure o Prisma:**

```bash
npx prisma generate
npx prisma migrate deploy --config prisma.config.ts
```

**Inicie o servidor:**

```bash
npm start
```

O servidor estará rodando em **http://localhost:3000**

---

### 3. PrivateServer (Equipe Interna)

Abra um novo terminal e acesse:

```bash
cd PrivateServer
```

**Instale as dependências:**

```bash
npm install
```

**Configure o arquivo `.env`:**

Crie um arquivo `.env` na raiz de `PrivateServer`:

```env
# Banco de dados privado (funcionários, pedidos, atendimentos)
DATABASE_URL="postgresql://postgres:123@localhost:5432/DB_Part2_2"
DATABASE_URL_PRIVATE="postgresql://postgres:123@localhost:5432/DB_Part2_2"

# Banco público (PrivateServer precisa ler fila e reservas)
DATABASE_URL_PUBLIC="postgresql://postgres:123@localhost:5432/DB_Part1_2"
```

Se estiver usando Neon:

```env
DATABASE_URL="postgresql://user:password@endpoint.neon.tech:5432/DB_Part2_2?sslmode=require"
DATABASE_URL_PRIVATE="postgresql://user:password@endpoint.neon.tech:5432/DB_Part2_2?sslmode=require"
DATABASE_URL_PUBLIC="postgresql://user:password@endpoint.neon.tech:5432/DB_Part1_2?sslmode=require"
```

**Configure o Prisma:**

```bash
npx prisma generate
npx prisma migrate deploy --config prisma.config.ts
```

**Inicie o servidor:**

```bash
npm start
```

O servidor estará rodando em **http://localhost:4000**

---

## 📁 Estrutura de Dados

### Banco Público (`DB_Part1_2`)

Tabelas de cliente-facing:
- `cliente` — Cadastro de clientes
- `fila` — Fila de espera
- `reserva` — Reservas de mesas
- `cardapio` — Menu do restaurante

**Schema Prisma:** `PublicServer/prisma/schema.prisma`

### Banco Privado (`DB_Part2_2`)

Tabelas de equipe:
- `mesa` — Informações das mesas
- `prato` — Pratos/itens do cardápio
- `funcionario` — Funcionários do restaurante
- `atendimento` — Registro de atendimentos
- `pedido` — Pedidos das mesas

**Schema Prisma:** `PrivateServer/prisma/schema.prisma`

---

## 🧪 Testes de Conectividade

### Verificar se PublicServer está funcionando

```bash
curl http://localhost:3000
# Ou abra o navegador em http://localhost:3000
```

### Verificar se PrivateServer está funcionando

```bash
curl http://localhost:4000
# Ou abra o navegador em http://localhost:4000
```

### Testar API de fila (PublicServer)

```bash
curl http://localhost:3000/tempo-espera
# Retorna: {"fila_tamanho": 0, "pessoas_na_fila": 0, "tempo_estimado_minutos": 0}
```

### Testar dashboard (PrivateServer)

```bash
curl http://localhost:4000/api/dashboard
# Retorna dados do dashboard da equipe
```

---

## 🔄 Rodando os Dois Servidores em Paralelo

Se você quer rodar ambos os servidores simultaneamente:

**Terminal 1 — PublicServer:**

```bash
cd PublicServer && npm start
```

**Terminal 2 — PrivateServer:**

```bash
cd PrivateServer && npm start
```

Agora ambos estarão rodando:
- PublicServer: http://localhost:3000 (clientes)
- PrivateServer: http://localhost:4000 (equipe)

---

## 🔧 Troubleshooting

### Erro: "Cannot find module 'prisma'"

```bash
npm install -g prisma
# Ou
npm install
```

### Erro: "Connection refused" no banco de dados

Verifique:
- PostgreSQL está rodando: `psql -U postgres`
- Os dados no `.env` estão corretos
- Os bancos foram criados: `psql -U postgres -l`

### Erro: "Already have the seed"

```bash
npx prisma migrate reset --config prisma.config.ts
```

### Porta 3000 ou 4000 já em uso

Mude a porta no arquivo `server.js`:

```javascript
app.listen(3001, () => {  // Mudar de 3000 para 3001
  console.log("Servidor rodando em http://localhost:3001");
});
```

---

## 📊 Variáveis de Ambiente Referência

### PublicServer/.env

```env
# Banco público (obrigatório)
DATABASE_URL=postgresql://user:pass@host:5432/DB_Part1_2
DATABASE_URL_PUBLIC=postgresql://user:pass@host:5432/DB_Part1_2

# API de previsão (opcional, pode deixar em branco)
MODEL_API_URL=http://localhost:5000/predict
```

### PrivateServer/.env

```env
# Banco privado (obrigatório)
DATABASE_URL=postgresql://user:pass@host:5432/DB_Part2_2
DATABASE_URL_PRIVATE=postgresql://user:pass@host:5432/DB_Part2_2

# Banco público em modo leitura (obrigatório)
DATABASE_URL_PUBLIC=postgresql://user:pass@host:5432/DB_Part1_2
```

---

## 📚 Documentação Adicional

- **Erros comuns:** [`config.md`](./config.md)
- **PublicServer detalhes:** [`PublicServer/README.md`](./PublicServer/README.md)
- **PrivateServer detalhes:** [`PrivateServer/README.md`](./PrivateServer/README.md)

---

## 🌐 Banco de dados recomendado

Para um banco online sem precisar rodar PostgreSQL localmente, recomendamos o **[Neon](https://neon.tech)** — PostgreSQL serverless com plano gratuito e região em São Paulo disponível. Basta criar dois projetos (um para o banco público, outro para o privado) e colar as connection strings nos respectivos `.env`.

---

## Integrantes

| Nome | Área |
|------|------|
| Arthur Vasconcellos França | Back-end |
| João Guadagnucci Rozestraten | Banco de dados |
| Pedro Desio Mendes Davoli | Banco de dados |
| Ricardo Augusto Azambuja | Back-end |
| Sophia Helena Amaral Leite | Front-end |
| Vinícius Batista Moraes | Front-end |

---

## Status

Em desenvolvimento.