# Table-4U – PublicServer

## Descrição
Servidor público do Table-4U, responsável por servir a interface e a lógica voltadas aos clientes do restaurante. Inclui telas de cadastro, login, reserva, fila de espera, cardápio e perfil do usuário.

## Funcionalidades Principais
- **Cadastro e Login**: autenticação com hash de senha (bcrypt) e integração com backend via fetch API.
- **Reserva de Mesa**: formulário para data, horário e número de pessoas; envia requisição POST para `/reserva`.
- **Fila de Espera**: entrada na fila quando não há mesas disponíveis; interface acessível apenas após login.
- **Minhas Reservas**: listagem e cancelamento de reservas existentes (`/reservas/:email` e `DELETE /reserva/:id`).
- **Cardápio**: visualização online e download em PDF (`cardapio.pdf`).
- **Perfil do Usuário**: página de edição de dados pessoais.

## Estrutura de Diretórios (resumo)
```
PublicServer/
├── src/
│   ├── index.html           # Landing page com links para todas as funcionalidades
│   ├── pages/
│   │   ├── login.html
│   │   ├── booking.html
│   │   ├── queue.html
│   │   ├── menu.html
│   │   ├── mybookings.html
│   │   └── editprofile.html
│   ├── scripts/
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── booking.js
│   │   ├── queue.js
│   │   ├── mybookings.js
│   │   ├── profile.js
│   │   └── editprofile.js
│   └── components/
│       ├── images/
│       └── cardapio.pdf
├── database/                # Scripts SQL (manutenção)
└── docs/                    # Documentação complementar
```

## Endpoints Utilizados
Os scripts do frontend se comunicam com os seguintes endpoints do backend (definidos em `server.js`):
- `POST /register` – criar nova conta
- `POST /login` – autenticar usuário
- `POST /reserva` – criar reserva
- `GET /reservas/:email` – listar reservas do cliente
- `DELETE /reserva/:id` – cancelar reserva
- `POST /clientes` – teste de recebimento de dados

## Observações
- Todos os arquivos estáticos são servidos pelo Express a partir da pasta `PublicServer`.
- A proteção de rotas (ex.: fila de espera acessível apenas logado) é implementada no frontend, redirecionando usuários não autenticados.

## Status
Em desenvolvimento ativo. Últimos commits incluem correções no botão de check-in, resolução de conflitos de merge no logout e integração completa de login, perfil e reservas.