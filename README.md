# Ana Sarah — Portfólio de Design

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![Angular](https://img.shields.io/badge/Angular-21.2-DD0031.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg)
![Docker](https://img.shields.io/badge/Docker-Nginx-2496ED.svg)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Projetos no Portfólio](#projetos-no-portfólio)
- [Testes](#testes)
- [Deploy](#deploy)
- [Contato](#contato)

## 🎯 Sobre o Projeto

Portfólio pessoal da designer **Ana Sarah Pontes**, com foco em identidade visual, direção de arte e produto digital (UX/UI). O site apresenta a trajetória profissional, projetos desenvolvidos e um canal de contato, com visual minimalista em tons rosé e marrom.

## 🌟 Características

### Páginas

| Rota | Conteúdo |
|------|----------|
| `/` | **Sobre** — apresentação, foto em estilo polaroid, experiência e formação |
| `/portfolio` | **Portfólio** — lista expansível de projetos com galeria de imagens |
| `/contato` | **Contato** — informações, LinkedIn e formulário de mensagem |

### Portfólio interativo

- Accordion por projeto (título, categorias e ano)
- Galeria de imagens ao expandir
- Ícones das ferramentas utilizadas (Illustrator, Photoshop, Figma, Canva, Lightroom)
- Indicação de projetos fictícios (UI)

### Design e UX

- Paleta: rosa `#DCC2C4` e marrom `#332202`
- Tipografia **Lato** (Google Fonts)
- Elementos decorativos florais (`flor1.png`, `flor2.png`)
- Layout responsivo com breakpoints para tablet e mobile
- Botão flutuante de e-mail em todas as páginas

### Contato

- Formulário com validação no front-end
- Feedback visual de envio bem-sucedido
- E-mail e LinkedIn clicáveis

> **Nota:** o formulário registra os dados no console do navegador. Não há integração com backend ou serviço de e-mail no momento.

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Angular 21** — framework SPA com componentes standalone
- **TypeScript 5.9** — tipagem estática
- **RxJS** — reatividade (dependência do Angular)
- **CSS** — estilos por componente (sem framework CSS externo)

### Ferramentas de desenvolvimento

- **Angular CLI 21** — build, serve e geração de código
- **Vitest** — testes unitários via `ng test`
- **Prettier** — formatação de código

### Produção

- **Docker** — imagem multi-stage (Node + Nginx)
- **Nginx** — servidor estático com fallback para SPA (`try_files`)

## 📦 Instalação

### Pré-requisitos

- Node.js 20+
- npm 11+

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/MoisesE2/portifolio-ana-sarah.git
cd portifolio-ana-sarah
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm start
```

4. **Acesse no navegador**

```
http://localhost:4200
```

## 🧪 Scripts Disponíveis

```bash
npm start          # Servidor de desenvolvimento (ng serve)
npm run build      # Build de produção (saída em dist/portifolio/browser)
npm run watch      # Build em modo desenvolvimento com watch
npm test           # Testes unitários (Vitest)
```

## 📁 Estrutura do Projeto

```
portifolio-ana-sarah/
├── public/                    # Assets estáticos (copiados no build)
│   ├── flor1.png              # Flor decorativa (página Sobre)
│   ├── flor2.png              # Flor decorativa (página Portfólio)
│   ├── imagem centro.png      # Foto polaroid (página Sobre)
│   ├── favicon.ico            # Favicon
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── icones/                # Ícones das ferramentas
│   └── portifolio/            # Imagens dos projetos
│       ├── villaigara/
│       ├── secomp/
│       ├── anapaula/
│       ├── arca/
│       └── isla/
├── src/
│   ├── index.html             # HTML base e meta SEO
│   ├── styles.css             # Variáveis CSS globais
│   ├── main.ts                # Bootstrap da aplicação
│   └── app/
│       ├── app.ts             # Componente raiz
│       ├── app.routes.ts      # Definição de rotas
│       ├── app.html           # Header + outlet + botão de e-mail
│       ├── pages/
│       │   ├── sobre/         # Página inicial
│       │   ├── portfolio/     # Lista de projetos
│       │   └── contato/       # Formulário e redes
│       └── shared/
│           └── header/        # Navegação principal
├── angular.json
├── Dockerfile                 # Build Docker + Nginx
├── nginx.conf                 # Configuração Nginx para SPA
└── package.json
```

## 🗺️ Rotas

| Caminho | Componente | Observação |
|---------|------------|------------|
| `/` | `Sobre` | Página inicial |
| `/sobre` | — | Redireciona para `/` |
| `/portfolio` | `Portfolio` | Projetos |
| `/contato` | `Contato` | Formulário |

## 🎨 Projetos no Portfólio

Ordem de exibição na página:

1. **Villa Igará** — identidade visual, direção de arte, branding, social media
2. **SECOMP 2025** — direção de arte, branding, social media, merch
3. **Ana Paula Pereira** — identidade visual, branding
4. **Arca Construções** — UI (projeto fictício)
5. **Isla E-commerce** — UI (projeto fictício)

Os dados dos projetos estão em `src/app/pages/portfolio/portfolio.ts`.

## 🧪 Testes

Testes unitários básicos com Vitest para os componentes principais:

```bash
npm test
```

Arquivos de teste: `*.spec.ts` em `src/app/`.

## 🚀 Deploy

### Build local

```bash
npm run build
```

Artefatos gerados em `dist/portifolio/browser/`.

### Docker (recomendado)

```bash
# Build da imagem
docker build -t portifolio-ana-sarah .

# Executar container
docker run -p 8080:80 portifolio-ana-sarah
```

Acesse `http://localhost:8080`.

A imagem usa **Nginx** para servir os arquivos estáticos e redirecionar rotas do Angular para `index.html`. Assets estáticos (`.css`, `.js`, `.png`, etc.) recebem cache de 1 ano — ao atualizar imagens ou favicon, use versionamento na URL (ex.: `?v=2`) ou limpe o cache da hospedagem após o deploy.

### Hospedagem estática

Também é possível publicar o conteúdo de `dist/portifolio/browser/` em qualquer host de arquivos estáticos (Netlify, Vercel, GitHub Pages, etc.), configurando fallback para `index.html` nas rotas da SPA.

## 📞 Contato

**Ana Sarah Pontes**

- 📧 E-mail: [anasarahpontesc@gmail.com](mailto:anasarahpontesc@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ana-sarah-pontes](https://www.linkedin.com/in/ana-sarah-pontes/)
- 📍 Maceió, AL — Brasil

---

<p align="center">
  Desenvolvido por <a href="https://github.com/MoisesE2">Moisés Eduardo</a> · Portfólio de Ana Sarah
</p>

<p align="center">
  <a href="#ana-sarah--portfólio-de-design">Voltar ao topo</a>
</p>
