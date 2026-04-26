# Table-4U – PrivateServer

## Descrição
Servidor privado do Table-4U, destinado exclusivamente aos funcionários do restaurante. Fornece interfaces para recepcionistas e garçons gerenciarem a fila de espera e acompanharem o fluxo de clientes.

## Funcionalidades Principais
- **Login de Funcionário**: autenticação restrita (página `login.html`).
- **Recepção**: tela de check-in de clientes que chegam ao restaurante (`reception.html`).
- **Garçom**: interface para visualizar e gerenciar pedidos/status das mesas (`waiter.html`).
- **Modelo de Predição**: módulo `ModelPredic` (em desenvolvimento) que analisará dados de fluxo para otimização.

## Estrutura de Diretórios (resumo)
```
PrivateServer/
├── src/
│   ├── pages/
│   │   ├── login.html
│   │   ├── reception.html
│   │   └── waiter.html
│   ├── scripts/
│   │   ├── (scripts de check-in, waiter, etc.)
│   └── components/          # Componentes reutilizáveis (ex.: botões, cards)
├── generated/               # Código gerado automaticamente pelo Prisma
├── prisma-private/          # Schemas ou migrations específicos (se aplicável)
├── prisma-public/           # Schemas ou migrations específicos (se aplicável)
└── test.js                  # Scripts de teste
```

## Integração com o Backend
O PrivateServer utiliza o mesmo servidor Express (`server.js`) e se comunica com os mesmos endpoints definidos no backend principal. A separação em pastas distintas (`PrivateServer` e `PublicServer`) visa isolar as lógicas de interface e privilégios de acesso.

## Observações
- A subpasta `prisma-private` e `prisma-public` sugerem que podem existir configurações de banco de dados específicas para cada ambiente, embora atualmente ambas apontem para o mesmo schema.
- O arquivo `test.js` contém testes manuais ou automatizados para validação do fluxo de check-in.
- O módulo `ModelPredic` (mencionado em commits recentes) indica que um modelo preditivo está sendo implementado para auxiliar na gestão de mesas.

## Status
Em desenvolvimento. As telas de recepção e garçom estão sendo ajustadas (commits de 21 e 22 de abril de 2026). A integração com o modelo preditivo está em fase inicial.