# Guia de Configuração — Table4U

Referência para configurar o projeto corretamente após um clone ou pull. Cobre os erros mais comuns encontrados com Prisma, variáveis de ambiente e geração de clients.

Como o projeto é dividido em **PublicServer** e **PrivateServer**, a configuração deve ser feita nas duas pastas.

---

## Passo a passo rápido (novo clone)

```bash
# PublicServer
cd PublicServer
cp .env.example .env   # edite com suas credenciais
npm install            # já roda prisma generate automaticamente
npx prisma migrate deploy --config prisma.config.ts

# PrivateServer
cd ../PrivateServer
cp .env.example .env   # edite com suas credenciais
npm install            # já roda prisma generate automaticamente
npx prisma migrate deploy --config prisma.config.ts
```

Após rodar as migrations do PrivateServer pela primeira vez, popule as mesas:

```bash
# Com o servidor rodando (npm start ou npm run dev):
curl -X POST http://localhost:4000/api/mesas/seed
```

> O `postinstall` em ambos os `package.json` executa `prisma generate` automaticamente ao final do `npm install`. Não é necessário rodar manualmente na maioria dos casos.

---

## Atualizando o ambiente após um pull

Ao fazer `git pull` com mudanças no banco ou nas dependências, siga os passos abaixo conforme o que foi alterado.

### 1. Novas dependências (`package.json` foi alterado)

```bash
# Em cada servidor que teve o package.json alterado:
npm install
```

### 2. Novas migrations (arquivos em `prisma/migrations/` foram adicionados)

```bash
# PublicServer (se houver migrations novas lá):
cd PublicServer
npx prisma migrate deploy --config prisma.config.ts

# PrivateServer (se houver migrations novas lá):
cd PrivateServer
npx prisma migrate deploy --config prisma.config.ts
```

> Para saber se há migrations novas, olhe se apareceram arquivos novos em `prisma/migrations/` no diff do pull. No PrivateServer, as últimas migrations adicionaram a tabela `mesa` e os campos `categoria`, `descricao`, `emoji` e `disponivel` ao `prato`.

### 3. Schema Prisma alterado mas sem nova migration (mudança de campo opcional, etc.)

O Prisma Client precisa ser regerado para refletir o schema atual:

```bash
npm install   # o postinstall já regenera
# ou manualmente:
npm run generate
```

### 4. Senhas em texto puro no banco (migração de autenticação)

Se o banco foi populado antes da implementação do login com bcrypt, as senhas podem estar em texto puro. Rode o script de migração **uma única vez** no PrivateServer:

```bash
cd PrivateServer
npm run rehash-senhas
```

O script detecta automaticamente quais senhas já estão hasheadas (`$2b$...`) e ignora, processando apenas as que ainda estão em texto puro.

### 5. Mesas não existem no banco privado

Se o banco privado foi recriado ou é novo, as mesas precisam ser populadas:

```bash
# Com o PrivateServer rodando:
curl -X POST http://localhost:4000/api/mesas/seed
```

O endpoint é idempotente — não faz nada se as mesas já existirem.

---

## Erros comuns e soluções

### `Cannot find module 'dotenv/config'`

**Causa:** o Prisma tentou rodar antes do `dotenv` ser instalado — geralmente ao rodar `npx prisma generate` sem ter feito `npm install` antes.

**Solução:**
```bash
npm install
```

---

### `Missing required environment variable: DATABASE_URL_PUBLIC` ou `DATABASE_URL_PRIVATE`

**Causa:** o arquivo `.env` não existe na pasta do servidor. Arquivos `.env` não são versionados no repositório por segurança.

**Solução:**
```bash
cp .env.example .env
```

Abra o `.env` criado e substitua os placeholders pelas credenciais reais do banco.

> **Atenção para o PrivateServer:** o `.env` precisa conter tanto `DATABASE_URL_PRIVATE` quanto `DATABASE_URL_PUBLIC`, pois o PrivateServer acessa o banco público em modo somente leitura para consultar fila e reservas.

---

### `Cannot find module './generated/private'` (no PublicServer)

**Causa:** o Prisma Client do schema privado não foi gerado. Isso acontece quando o `prisma generate` rodou apenas para o schema público.

**Solução:** o script `generate` no `PublicServer/package.json` já gera os dois schemas. Basta garantir que o `npm install` foi executado:

```bash
cd PublicServer
npm install
```

Se preferir rodar manualmente:
```bash
npx prisma generate
npx prisma generate --schema=prisma/schema_private.prisma
```

---

### `Cannot find module './generated/public'` (no PrivateServer)

**Causa:** mesma situação anterior, mas no PrivateServer. O schema público não foi gerado.

**Solução:**
```bash
cd PrivateServer
npm install
```

Ou manualmente:
```bash
npx prisma generate
npx prisma generate --schema=prisma/schema_public.prisma
```

---

### `PrismaClientInitializationError: Query Engine not found` (erro de plataforma)

**Causa:** o Prisma Client foi gerado em uma máquina com sistema operacional diferente (ex.: gerado no Windows, rodando no Linux).

**Solução:** regenere o client na máquina atual:

```bash
npx prisma generate --config prisma.config.ts
```

---

### Migrations pendentes ao iniciar o servidor

**Causa:** o banco existe mas está desatualizado em relação ao schema atual.

**Solução:**
```bash
npx prisma migrate deploy --config prisma.config.ts
```

---

## Resumo das variáveis de ambiente

### PublicServer — `.env`

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL_PUBLIC` | URL de conexão com o banco público (clientes, fila, reservas) |
| `MODEL_API_URL` | URL da API Flask do modelo de ML (`http://localhost:5000/predict`) |

### PrivateServer — `.env`

| Variável | Descrição |
|----------|-----------|
| `DATABASE_URL_PRIVATE` | URL de conexão com o banco privado (funcionários, atendimentos, pedidos) |
| `DATABASE_URL_PUBLIC` | URL de conexão com o banco público (somente leitura — fila e reservas) |