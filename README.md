<div align="center">
  <img
    src="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/LOGO-ERNANI-CASTRO-300x84_mzunbm.png"
    alt="Dr. Ernani Castro - Logo"
    width="300"
  />

  <h1>Dr. Ernani Castro — Cirurgião Plástico</h1>

  <p>
    <strong>Landing page profissional</strong> para o Dr. Ernani Sousa Castro,
    cirurgião plástico no Maranhão.
    <br />Especialista em Flancoplastia, Mamoplastia Short Scar, Argoplasma
    e Contorno Corporal de Alta Definição.
  </p>

  <p>
    <a href="https://dr-ernani.bydomarketing.com.br" target="_blank">
      <img src="https://img.shields.io/badge/Produção-dr--ernani.bydomarketing.com.br-0A1A2F?style=for-the-badge&logo=googlechrome&logoColor=00E5FF" alt="Site em Produção" />
    </a>
  </p>
</div>

---

## 📋 Sobre o Projeto

Landing page institucional e de alta conversão para o consultório do Dr. Ernani Castro, médico cirurgião plástico com atuação em São Luís e interior do Maranhão.

### Funcionalidades

- 🏠 **Hero** — Apresentação principal com CTA direto para WhatsApp
- 🔬 **Especialidades** — Flancoplastia, Argoplasma, Mamoplastia Short Scar, Lipo HD
- 👤 **Sobre o Doutor** — Formação (USP/UFPI) e credenciais (CRM/RQE)
- ✅ **Para Quem É** — Público-alvo com pontos de identificação
- ⭐ **Depoimentos** — Testemunhos de pacientes
- 🖼️ **Galeria de Resultados** — Slider interativo antes/depois
- 📍 **Locais de Atendimento** — São Luís, Bacabal, Santa Inês, Pedreiras, Lago da Pedra
- ❓ **FAQ** — Perguntas frequentes com accordion animado
- 💬 **WhatsApp Flutuante** — Botão de contato sempre visível

## 🛠️ Tecnologias

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [Vite](https://vite.dev/) | 6 | Build tool e dev server |
| [TailwindCSS](https://tailwindcss.com/) | 4 | Framework de estilos |
| [Motion](https://motion.dev/) | 12 | Animações e transições |
| [Lucide React](https://lucide.dev/) | — | Biblioteca de ícones |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Tipagem estática |

## 🚀 Executar Localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Clonar o repositório
git clone https://github.com/megatecnologia-source/dr-ernani.git

# 2. Entrar na pasta
cd dr-ernani

# 3. Instalar dependências
npm install

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

## 📦 Build de Produção

```bash
# Gerar build otimizado
npm run build

# Pré-visualizar o build
npm run preview
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 🌐 Deploy

O deploy é feito automaticamente na **Hostinger** via webhook do GitHub.

| Branch | Função |
|---|---|
| `main` | Desenvolvimento e código-fonte |
| `production` | Branch de produção — deploy automático na Hostinger |

### Fluxo de Deploy

1. Desenvolva na branch `main`
2. Quando pronto, faça merge para `production`
3. Faça `git push origin production`
4. A Hostinger detecta o push via webhook e atualiza o site automaticamente

## 📁 Estrutura do Projeto

```
dr-ernani/
├── public/
│   ├── .htaccess           # Configuração Apache (segurança + SPA)
│   └── robots.txt          # Diretivas para crawlers
├── src/
│   ├── components/
│   │   ├── About.tsx       # Seção "Sobre o Doutor"
│   │   ├── FAQ.tsx         # Perguntas Frequentes
│   │   ├── FloatingActions.tsx  # WhatsApp flutuante + Voltar ao topo
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── ForWhom.tsx     # Seção "Para Quem É"
│   │   ├── Hero.tsx        # Seção principal (Hero)
│   │   ├── Locations.tsx   # Locais de atendimento
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   ├── Results.tsx     # Depoimentos de pacientes
│   │   ├── ResultsGallery.tsx  # Galeria antes/depois
│   │   ├── Specialties.tsx # Especialidades médicas
│   │   └── Ticker.tsx      # Faixa animada de destaques
│   ├── App.tsx             # Componente principal
│   ├── index.css           # Estilos globais + tema Tailwind
│   └── main.tsx            # Ponto de entrada React
├── index.html              # HTML principal (SEO + OG tags)
├── vite.config.ts          # Configuração do Vite
├── tsconfig.json           # Configuração do TypeScript
├── package.json            # Dependências e scripts
└── .gitignore              # Arquivos ignorados pelo Git
```

## 🔒 Segurança

O projeto implementa as seguintes medidas de segurança:

- **HTTPS forçado** via .htaccess
- **Headers de segurança**: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`, `HSTS`
- **Bloqueio de arquivos sensíveis** (`.env`, `.git`, configurações)
- **Listagem de diretórios desabilitada**
- **Sourcemaps desabilitados** em produção
- **Console.log removidos** do build de produção
- **Links externos** com `rel="noopener noreferrer"`
- **Compressão GZIP** habilitada
- **Cache otimizado** para assets estáticos

## 👨‍⚕️ Créditos

- **Paciente:** Dr. Ernani Sousa Castro — CRM-MA 5546 | RQE 2481
- **Desenvolvimento:** [Mega Tecnologia](https://megatecnologias.com) & [Bydo Marketing](https://bydomarketing.com.br)

---

<div align="center">
  <sub>Desenvolvido com ❤️ por <strong>Bydo Marketing</strong> e <strong>Mega Tecnologia</strong></sub>
</div>
