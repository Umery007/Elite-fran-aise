# 🇫🇷 L'Élite Française

Site institucional de um restaurante francês em Paris, desenvolvido em **React** com **Vite**. O projeto apresenta o restaurante, o chef Maya Massafera, a galeria de pratos, o cardápio e um formulário de reservas — tudo em uma experiência visual elegante, com fundos em imagem, animações e layout responsivo.

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Rotas](#-rotas)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Componentes](#-componentes)
- [Funcionalidades](#-funcionalidades)
- [Observações](#-observações)

---

## 🎯 Sobre o projeto

O **L'Élite Française** é um site para um restaurante localizado no pé da Torre Eiffel (Paris 16º). A aplicação é composta por páginas que contam a história do restaurante, destacam a chef, exibem uma galeria de fotos e o cardápio, além de permitir o contato e a reserva de mesas.

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19.2.5 | Biblioteca de interfaces |
| [Vite](https://vite.dev/) | ^8.0.10 | Bundler e servidor de desenvolvimento (HMR) |
| [React Router](https://reactrouter.com/) | ^7.14.2 | Roteamento entre páginas |
| [styled-components](https://styled-components.com/) | ^6.4.1 | Estilização CSS-in-JS |
| [@fontsource/im-fell-french-canon-sc](https://fontsource.org/) | ^5.2.7 | Fonte decorativa do título |
| [@fontsource/roboto-slab](https://fontsource.org/) | ^5.2.8 | Fonte de texto |
| [ESLint](https://eslint.org/) | ^10.2.1 | Lint e padrões de código |

## ✅ Pré-requisitos

- **Node.js** 20.19+ ou 22.12+ (recomendado: LTS atual)
- **npm** (ou yarn/pnpm, a preferência)

## ▶️ Como rodar o projeto

```bash
# 1. Entre na pasta do projeto
cd Elite-fran-aise-main

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```



### Build para produção

```bash
npm run build      # gera o bundle em ./dist
npm run preview    # serve o build de produção localmente
```

## 📜 Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Sobe o servidor de desenvolvimento com HMR |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Executa o ESLint em todo o projeto |

## 🗺 Rotas

Definidas em [`src/Router.jsx`](src/Router.jsx):

| Rota | Página | Descrição |
|---|---|---|
| `/` | `Home` | Página inicial com história do restaurante, chef e localização |
| `/Galeria` | `Galeria` | Galeria de fotos dos pratos e cardápio completo |
| `/Contato` | `Contato` | Formulário de cadastro/contato e dados de contato |
| `/Reserva` | `Reserva` | Formulário de reserva de mesa |

> A navegação interna do cabeçalho também usa **âncoras com scroll suave** para as seções `#the-restaurant`, `#chef-restaurant` e `#news` da Home.

## 📁 Estrutura do projeto

```
Elite-fran-aise-main/
├── index.html                # HTML raiz (fontes externas, título, favicon)
├── package.json
├── vite.config.js            # Configuração do Vite + plugin React
├── eslint.config.js          # Regras de lint
└── src/
    ├── main.jsx              # Ponto de entrada (React.StrictMode)
    ├── App.jsx               # GlobalStyles + Router + fontes
    ├── Router.jsx            # Definição das rotas
    ├── styles/
    │   └── GlobalStyles.jsx  # Estilos globais (reset, scroll suave)
    ├── Pages/
    │   ├── Home/             # index.jsx + styles.jsx
    │   ├── Contato/          # index.jsx + styles.jsx
    │   └── Reserva/          # index.jsx + styles.jsx
    ├── components/
    │   ├── Header/           # Menu fixo com efeito de scroll e menu mobile
    │   ├── Fundo/            # Banner/hero com imagem de fundo
    │   ├── Subheader/        # Faixa de texto animada (marquee)
    │   ├── Section1/         # Seção reutilizável título + texto + imagem
    │   ├── Galeria/          # Página da galeria (rota /Galeria)
    │   ├── Subgaleria/       # Subtítulo da galeria
    │   ├── Pratos/           # Cardápio completo (entradas, principais, queijos, sobremesas)
    │   ├── Carrosel/         # Carrossel de imagens
    │   └── bla las/          # Componente vazio (em branco)
    └── assets/               # Imagens organizadas por seção
        ├── fundo/  fundo2/  section-img/
        ├── galeria/  galeria1/  subgaleria/
        └── contatoimg/
```

## 🧩 Componentes

- **Header** — Cabeçalho fixo que muda de estilo ao rolar a página (`scrolled`), com links de âncora, links de rota, botão *"Book now"* e menu hambúrguer para mobile.
- **Fundo** — Banner principal da Home com imagem de fundo animada.
- **Subheader** — Faixa de texto em movimento (marquee) com frases sobre a cozinha francesa.
- **Section1** — Bloco reutilizável de conteúdo (título, parágrafos e imagem), com opção `reverse` para alternar o lado da imagem.
- **Galeria** — Galeria horizontal de pratos (com repetição para efeito infinito).
- **Pratos** — Cartão de cardápio com 4 seções: *Starters*, *Main Dishes*, *Cheeses* e *Desserts*.
- **Carrosel** — Carrossel de imagens.

## ✨ Funcionalidades

- 🎠 Roteamento com React Router (Home, Galeria, Contato e Reserva)
- 🎨 Estilização com styled-components e estilos globais
- 📜 Scroll suave nas âncoras da página inicial
- 📱 Menu responsivo com hambúrguer para dispositivos móveis
- 🖼️ Galeria de imagens e cardápio completo
- 📝 Formulários de reserva e contato
- 🔤 Tipografia customizada (IM Fell French Canon SC + Roboto Slab)

## ⚠️ Observações

- Os formulários de **Reserva** e **Contato** ainda são apenas visuais — não há backend conectado (`action`/API não configurados).
- O link **"The menu"** do cabeçalho aponta para um documento externo no Google Drive.
- O cardápio usa imagens externas do **Unsplash**; é necessário conexão com a internet para exibi-las.
- Pasta `src/components/bla las/` contém um componente vazio e pode ser removida.
