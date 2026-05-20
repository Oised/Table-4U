# Guia de Configuração — Table4U

Referência para configurar o projeto corretamente após um clone ou pull. Cobre os erros mais comuns encontrados com Prisma, variáveis de ambiente e geração de clients.

Como o projeto é dividido em **PublicServer** e **PrivateServer**, a configuração deve ser feita nas duas pastas.

---

## Passo a passo rápido

```bash
# PublicServer
cd PublicServer
cp .env.example .env   # edite com suas credenciais
npm install            # já roda prisma generate automaticamente

# PrivateServer
cd ../PrivateServer
cp .env.example .env   # edite com suas credenciais
npm install            # já roda prisma generate automaticamente
```

> O `postinstall` em ambos os `package.json` executa `prisma generate` automaticamente ao final do `npm install`. Não é necessário rodar manualmente na maioria dos casos.

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