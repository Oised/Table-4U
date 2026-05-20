# Guia de Configuração - Table-4U

Este guia ajudará você e a equipe a configurar o projeto corretamente após fazer o pull/clone, resolvendo os erros comuns com o Prisma (`Cannot find module 'dotenv/config'` e `Missing required environment variable`).

Como o projeto é dividido em **PublicServer** e **PrivateServer**, você deve realizar as configurações em **ambas** as pastas.

---

## 1. Configurar o PublicServer

Abra o seu terminal na raiz do projeto e navegue até a pasta do servidor público:

```bash
cd \Table-4U\PublicServer
```

### A. Criar o arquivo de variáveis de ambiente (`.env`)
O banco de dados precisa da URL de conexão. Arquivos `.env` não vão para o GitHub por segurança, então você precisa criar o seu:
1. Copie o arquivo `.env.example` que está na pasta `PublicServer`.
2. Renomeie a cópia para `.env`.
3. (Opcional) Edite o `.env` caso precise mudar o usuário/senha do banco local.

### B. Instalar dependências e gerar o Prisma
Agora basta rodar a instalação do Node. Nós temos um script (`postinstall`) que já fará o `prisma generate` automaticamente assim que o `npm install` terminar.

```bash
npm install
```
*(Isso vai instalar o `dotenv` que faltava e rodar o prisma generate usando o seu novo arquivo `.env`)*

---

## 2. Configurar o PrivateServer

Agora volte para a raiz e vá para o servidor privado:

```bash
cd ..\PrivateServer
# ou a partir da raiz: cd \Table-4U\PrivateServer
```

### A. Criar o arquivo de variáveis de ambiente (`.env`)
Assim como no passo anterior, faça a cópia:
1. Copie o arquivo `.env.example` na pasta `PrivateServer`.
2. Renomeie a cópia para `.env`.

### B. Instalar dependências e gerar o Prisma

```bash
npm install
```

---

## Resumo Técnico dos Erros que Estávamos Tendo:

1. **Erro `Cannot find module 'dotenv/config'`**: O projeto estava tentando rodar o `npx prisma generate` antes de baixar a biblioteca `dotenv`. O comando `npm install` baixa essa biblioteca.
2. **Erro `Missing required environment variable: DATABASE_URL_PUBLIC / PRIVATE`**: O Prisma precisava saber a URL do banco (lida no arquivo `.env`), mas ele não existia no PC depois do *clone*. Copiando de `.env.example` para `.env`, o Prisma encontra a URL e consegue gerar o *client* com sucesso.
3. **Erro `MODULE_NOT_FOUND: Cannot find module './generated/private'` (no PublicServer)**: Ocorria porque o script de `generate` no `PublicServer/package.json` gerava apenas o schema público. Adicionei o comando para gerar o schema privado também, e o erro foi resolvido. Ao rodar o `npm install` agora, os dois serão gerados automaticamente.
