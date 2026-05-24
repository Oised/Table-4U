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

## Configuração inicial (novo clone)

> Siga os passos abaixo para qualquer membro que acabou de clonar o repositório. Em caso de erros durante a configuração, consulte o [`config.md`](./config.md) na raiz.

### 1. PublicServer

```bash
cd PublicServer
```

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Edite o `.env` e preencha as variáveis com as credenciais do banco:

```env
DATABASE_URL_PUBLIC="postgresql://usuario:senha@host:5432/nomedobanco?sslmode=require"
MODEL_API_URL="http://localhost:5000/predict"
```

Instale as dependências (o `postinstall` já roda o `prisma generate` automaticamente):

```bash
npm install
```

Rode as migrations:

```bash
npx prisma migrate deploy --config prisma.config.ts
```

Inicie o servidor:

```bash
npm start
# http://localhost:3000
```

---

### 2. PrivateServer

```bash
cd PrivateServer
```

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

Edite o `.env`:

```env
DATABASE_URL_PRIVATE="postgresql://usuario:senha@host:5432/nomedobanco?sslmode=require"
DATABASE_URL_PUBLIC="postgresql://usuario:senha@host:5432/nomedobanco?sslmode=require"
```

> `DATABASE_URL_PUBLIC` é necessário porque o PrivateServer também acessa o banco público (somente leitura) para consultar fila e reservas.

Instale as dependências:

```bash
npm install
```

Rode as migrations:

```bash
npx prisma migrate deploy --config prisma.config.ts
```

Inicie o servidor:

```bash
npm start
# http://localhost:4000
```

Para desenvolvimento (mata automaticamente o processo anterior na porta 4000):

```bash
npm run dev
```

Após rodar as migrations no banco privado pela primeira vez, popule as mesas padrão:

```bash
curl -X POST http://localhost:4000/api/mesas/seed
```

Isso cria as 12 mesas do restaurante. O endpoint é idempotente — não faz nada se as mesas já existirem.

---

## Banco de dados recomendado

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