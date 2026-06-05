# PublicServer — Table4U

Servidor da aplicação pública do Table4U, voltada para os **clientes do restaurante**. Permite que clientes façam login, entrem na fila de espera, realizem e gerenciem reservas, consultem o cardápio e editem seu perfil.

Roda em paralelo e de forma isolada do [PrivateServer](../PrivateServer/README.md), com banco de dados próprio.

---

## Estrutura de diretórios

```
PublicServer/
├── server.js               # Entrada do servidor Express (porta 3000)
├── prisma.config.ts        # Configuração do Prisma (aponta para DATABASE_URL_PUBLIC)
├── prisma/
│   ├── schema.prisma       # Schema do banco público (Cliente, Fila, Reserva)
│   ├── schema_private.prisma # Schema do banco privado (somente leitura pelo Public)
│   └── migrations/         # Histórico de migrations do banco público
├── src/
│   ├── index.html          # Página inicial (home pública)
│   ├── pages/              # Páginas HTML da aplicação
│   │   ├── login.html
│   │   ├── booking.html
│   │   ├── mybookings.html
│   │   ├── queue.html
│   │   ├── menu.html
│   │   ├── editprofile.html
│   │   └── dashboard.html
│   ├── scripts/            # JavaScript de cada página
│   │   ├── theme.js        # Toggle de tema claro/escuro (compartilhado)
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── booking.js
│   │   ├── mybookings.js
│   │   ├── queue.js
│   │   ├── profile.js
│   │   └── editprofile.js
│   ├── styles/             # CSS de cada página
│   │   ├── global.css      # Tokens de design e componentes compartilhados
│   │   ├── index.css
│   │   ├── login.css
│   │   ├── booking.css
│   │   ├── mybookings.css
│   │   ├── queue.css
│   │   └── menu.css / editprofile.css
│   ├── components/         # Assets estáticos (imagens, PDF do cardápio)
│   ├── api/
│   │   └── model/          # Modelo de ML para previsão de tempo de espera
│   │       ├── model.py            # API Flask que serve o modelo XGBoost
│   │       ├── modelo_xgboost.pkl  # Modelo treinado
│   │       └── colunas.pkl         # Colunas esperadas pelo modelo
│   ├── services/           # (reservado para futuras integrações)
│   ├── config/             # (reservado para configurações futuras)
│   └── utils/              # (reservado para utilitários futuros)
├── database/               # (reservado para scripts de banco)
├── docs/                   # (reservado para documentação adicional)
├── .env.example            # Variáveis de ambiente necessárias
├── .gitignore
└── package.json
```

---

## Pré-requisitos

- Node.js 18+
- PostgreSQL (local ou em nuvem — recomendamos [Neon](https://neon.tech))
- Python 3.9+ com `flask`, `joblib`, `pandas` e `xgboost` (para o modelo de ML)

---

## Configuração

1. Crie um arquivo `.env` na raiz de `PublicServer/` com base no `.env.example`:

```env
DATABASE_URL="postgresql://usuario:senha@host:5432/nomedobanco"
DATABASE_URL_PUBLIC="postgresql://usuario:senha@host:5432/nomedobanco"
MODEL_API_URL="http://localhost:5000/predict"
```

> **Atenção:** o `.env.example` atual contém credenciais locais de desenvolvimento — substitua todos os valores pelas suas próprias credenciais.
> `DATABASE_URL` e `DATABASE_URL_PUBLIC` devem apontar para o mesmo banco público.
> `MODEL_API_URL` aponta para a API Flask do modelo de ML que calcula o tempo de espera.

2. Instale as dependências:

```bash
npm install
```

O `postinstall` executa `prisma generate` automaticamente, gerando dois Prisma Clients: um para o banco público (`schema.prisma`) e um para o banco privado (`schema_private.prisma`, somente leitura).

3. Rode as migrations no banco:

```bash
npx prisma migrate deploy --config prisma.config.ts
```

---

## Rodando

**Servidor Node (Express):**
```bash
npm start
# Disponível em http://localhost:3000
```

**API do modelo de ML (opcional, necessário para previsão de tempo de fila):**
```bash
cd src/api/model
python model.py
# Disponível em http://localhost:5000
```

---

## Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/register` | Cadastra novo cliente (senha hasheada com bcrypt) |
| `POST` | `/login` | Autentica cliente com bcrypt |
| `POST` | `/fila` | Insere cliente na fila de espera |
| `DELETE` | `/fila/:email` | Remove cliente da fila |
| `GET` | `/tempo-espera` | Retorna tamanho da fila e tempo estimado via modelo de ML |
| `POST` | `/reserva` | Cria uma reserva |
| `GET` | `/reservas/:email` | Lista reservas do cliente |
| `DELETE` | `/reserva/:id` | Cancela uma reserva |
| `GET` | `/api/todas-filas` | Lista toda a fila com dados do cliente (uso interno / recepção) |
| `GET` | `/api/todas-reservas` | Lista todas as reservas com dados do cliente (uso interno / recepção) |
| `GET` | `/api/atendimentos-privados` | Lê os 20 atendimentos mais recentes do banco privado (somente leitura) |

---

## Banco de dados

O banco público possui três modelos:

- **Cliente** — dados de cadastro (nome, email, senha com hash bcrypt)
- **Fila** — entradas na fila de espera, com número de pessoas e status (`esperando`)
- **Reserva** — reservas com data/hora, número de pessoas e status (`pendente`)

O schema privado (`schema_private.prisma`) é acessado em modo somente leitura pelo endpoint `/api/atendimentos-privados`, que expõe atendimentos do banco interno para o dashboard público. O schema espelha os modelos do PrivateServer — incluindo o campo `cargo` no modelo `funcionario`.

---

## Modelo de ML

O módulo `src/api/model/` contém uma API Flask que serve um modelo **XGBoost** treinado para estimar o tempo de espera na fila. A rota `/tempo-espera` do servidor principal consulta essa API para cada entrada na fila, passando o número de pessoas e o horário de entrada. Se a API estiver indisponível, o servidor aplica um fallback simples (`número de pessoas × 5 minutos`).

**Entradas esperadas pelo modelo:**
```json
{
  "Num_Pessoas": 3,
  "Check_in": "2026-05-20 19:30:00"
}
```

**Resposta:**
```json
{ "tempo_espera_min": 22.5 }
```

---

## Tema claro / escuro

Todas as páginas carregam `scripts/theme.js`, que gerencia o toggle de tema. A preferência é salva no `localStorage` com a chave `table4u-theme` e persiste entre sessões.
