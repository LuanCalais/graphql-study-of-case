# 📚 GraphQL Books — Estudo Fullstack com GraphQL, Node.js, React, Vite, Apollo, MUI e Tailwind

Este é um **mini projeto de estudo** que demonstra como construir uma aplicação **Fullstack** usando **GraphQL no backend** com Node.js + Express + Prisma + SQLite e **React** no frontend com Vite, Apollo Client, MUI e TailwindCSS.

O objetivo é fixar na prática:
- Como estruturar um backend GraphQL limpo com Prisma ORM
- Como conectar o frontend React usando Apollo Client
- Como compor interfaces modernas usando **MUI** + **Tailwind** juntos

---

## 🗂️ Estrutura do projeto

```plaintext
graphql-books-study-case/
├── backend/         # API GraphQL com Node.js, Express, Apollo Server, Prisma
│   ├── prisma/      # Definição do schema Prisma + migrações
│   ├── src/
│   │   ├── resolvers/   # Resolvers separados (Books, Authors)
│   │   ├── schema/      # Schemas GraphQL (Books, Authors)
│   │   └── server.js    # Entry point do servidor
│   ├── .env             # Configuração do banco SQLite
│   └── package.json
│
├── frontend/       # App React com Vite, Apollo Client, MUI e TailwindCSS
│   ├── src/
│   │   ├── components/  # Authors, Books, CreateBook
│   │   ├── apolloClient.js  # Config Apollo Client
│   │   ├── App.jsx      # Com navegação e layout
│   │   ├── index.css    # Tailwind CSS base
│   │   └── main.jsx     # Entry point React
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── package.json
│
└── README.md
