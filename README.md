# Nikel - App de Finanças Pessoais

O Nikel é uma aplicação web front-end desenvolvida para ajudar os usuários a organizar suas finanças de forma simples e intuitiva. Com ele, é possível controlar entradas e saídas de dinheiro, visualizar um resumo financeiro e gerenciar transações.

A aplicação utiliza o `localStorage` do navegador para persistir os dados dos usuários e suas transações, simulando um banco de dados local.

![tela principal](image.png)

## ✨ Funcionalidades

- **Autenticação de Usuário:** Crie uma conta e faça login de forma segura.
- **Sessão Persistente:** Opção de "Permanecer logado" para facilitar o acesso em futuras visitas.
- **Dashboard Financeiro:** Na página inicial, visualize o saldo total e um resumo das últimas entradas e saídas.
- **Gerenciamento de Transações:** Adicione novas transações (receitas ou despesas) através de um formulário modal.
- **Histórico de Transações:** Uma página dedicada para listar todas as transações em uma tabela, com detalhes de data, valor, tipo e descrição.
- **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela, construída com o framework Bootstrap.

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Bootstrap 5** para componentização e responsividade.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
nikel/
├── pulic/
│   ├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── index.js         # Lógica de login e criação de conta
│   │   ├── home.js          # Lógica da página inicial (dashboard)
│   │   └── transactions.js  # Lógica da página de transações
│   ├── index.html           # Página de Login/Cadastro
│   ├── home.html            # Página principal após o login
│   └── transactions.html    # Página de listagem de transações
└── README.md
```

## 🏁 Como Executar

Por ser um projeto front-end estático, não há necessidade de um servidor complexo ou processo de build. Siga os passos abaixo:

1.  **Clone o repositório** (ou baixe os arquivos do projeto).

2.  **Navegue até a pasta `pulic`**:
    ```bash
    cd nikel/pulic
    ```

3.  **Abra o arquivo `index.html`** no seu navegador de preferência (Google Chrome, Firefox, etc.).

A partir daí, você pode criar uma nova conta e começar a usar a aplicação.

---

*Projeto desenvolvido como parte do projeto **Codai**, da empresa Growdev.*