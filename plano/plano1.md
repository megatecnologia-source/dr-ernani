# 🏥 Plano de Preparação — Site Dr. Ernani Castro

> **Projeto:** Landing page profissional para Dr. Ernani Castro — Cirurgião Plástico no Maranhão  
> **Domínio de produção:** `https://dr-ernani.bydomarketing.com.br`  
> **Repositório GitHub:** `https://github.com/megatecnologia-source/dr-ernani.git`  
> **Stack:** React 19 + Vite 6 + TailwindCSS 4 + Motion (Framer Motion)  
> **Hospedagem:** Hostinger (deploy via webhook a partir da branch `production`)  
> **Caminho na Hostinger:** `public_html/clientes/dr-ernani/public`

---

## 📋 Índice

1. [Fase 1 — Limpeza do Projeto (Remover resíduos do template)](#fase-1--limpeza-do-projeto)
2. [Fase 2 — Correções de Código](#fase-2--correções-de-código)
3. [Fase 3 — SEO e Meta Tags](#fase-3--seo-e-meta-tags)
4. [Fase 4 — Segurança (Hardening)](#fase-4--segurança-hardening)
5. [Fase 5 — Configuração do Vite para Produção](#fase-5--configuração-do-vite-para-produção)
6. [Fase 6 — Arquivos de Produção (Hostinger)](#fase-6--arquivos-de-produção-hostinger)
7. [Fase 7 — README Profissional](#fase-7--readme-profissional)
8. [Fase 8 — Git e GitHub](#fase-8--git-e-github)
9. [Fase 9 — Configuração do Webhook na Hostinger](#fase-9--configuração-do-webhook-na-hostinger)
10. [Fase 10 — Verificação Final](#fase-10--verificação-final)

---

## Fase 1 — Limpeza do Projeto

**Objetivo:** Remover todas as dependências, arquivos e referências oriundas do template Google AI Studio que não são necessárias para o projeto.

### 1.1 — Deletar arquivo `metadata.json`

Deletar o arquivo `/metadata.json` da raiz do projeto. Ele é exclusivo do Google AI Studio e não é usado pelo Vite nem pela aplicação.

```bash
rm metadata.json
```

### 1.2 — Limpar `package.json`

Abrir o arquivo `package.json` e fazer as seguintes alterações:

**Alterar o campo `name`:**
```diff
- "name": "react-example",
+ "name": "dr-ernani-castro",
```

**Remover as dependências que NÃO são utilizadas:**

De `dependencies`, remover:
```diff
- "@google/genai": "^1.29.0",
- "express": "^4.21.2",
- "dotenv": "^17.2.3",
```

De `devDependencies`, remover:
```diff
- "@types/express": "^4.17.21",
```

**Resultado final do `package.json`:**
```json
{
  "name": "dr-ernani-castro",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.14",
    "@vitejs/plugin-react": "^5.0.4",
    "lucide-react": "^0.546.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "vite": "^6.2.0",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "autoprefixer": "^10.4.21",
    "tailwindcss": "^4.1.14",
    "tsx": "^4.21.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

### 1.3 — Limpar `vite.config.ts`

Abrir o arquivo `vite.config.ts` e:

1. Remover a importação/uso de `loadEnv`
2. Remover o bloco `define` que injeta `GEMINI_API_KEY`
3. Remover os comentários sobre AI Studio / HMR
4. Remover a lógica condicional `DISABLE_HMR`

**Resultado final do `vite.config.ts`:**
```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
```

### 1.4 — Deletar ou reescrever `.env.example`

O conteúdo atual faz referência a `GEMINI_API_KEY` e `AI Studio`. Como o projeto **não usa variáveis de ambiente**, o arquivo pode ser **deletado**:

```bash
rm .env.example
```

> **Nota:** Se no futuro o projeto precisar de variáveis de ambiente (ex: API de formulário de contato), recrie o `.env.example` apenas com as variáveis necessárias.

### 1.5 — Reinstalar dependências (limpar node_modules)

Após as alterações no `package.json`, deletar o `node_modules` e o `package-lock.json` e reinstalar:

```bash
rm -rf node_modules package-lock.json
npm install
```

> Isso garante que os pacotes removidos (`@google/genai`, `express`, `dotenv`) não fiquem residuais.

---

## Fase 2 — Correções de Código

**Objetivo:** Corrigir problemas de código identificados nos componentes.

### 2.1 — Corrigir import fora de lugar em `Results.tsx`

No arquivo `src/components/Results.tsx`, o import do `ArrowRight` está na **linha 84** (final do arquivo), após o componente. Isso é um erro e pode causar problemas.

**Mover o import para o topo do arquivo:**

```diff
  import { motion } from "motion/react";
- import { Star, Quote } from "lucide-react";
+ import { Star, Quote, ArrowRight } from "lucide-react";
```

**E remover as linhas 84-85 do final do arquivo:**
```diff
- import { ArrowRight } from "lucide-react";
```

### 2.2 — Verificação de imports não utilizados

Revisar todos os componentes e garantir que não há imports não utilizados. Rodar o lint:

```bash
npm run lint
```

Corrigir qualquer erro reportado pelo TypeScript.

---

## Fase 3 — SEO e Meta Tags

**Objetivo:** Otimizar o `index.html` para SEO, acessibilidade e compartilhamento em redes sociais.

### 3.1 — Atualizar `index.html`

Substituir o conteúdo atual do `index.html` pelo seguinte:

```html
<!doctype html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO Básico -->
  <title>Dr. Ernani Castro | Cirurgião Plástico no Maranhão — Flancoplastia, Mamoplastia Short Scar e Contorno Corporal</title>
  <meta name="description" content="Dr. Ernani Castro — Cirurgião Plástico no Maranhão. Especialista em Flancoplastia, Mamoplastia Short Scar, Argoplasma e Contorno Corporal de Alta Definição. Atendimento em São Luís, Bacabal, Santa Inês, Pedreiras e Lago da Pedra." />
  <meta name="author" content="Dr. Ernani Sousa Castro" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://dr-ernani.bydomarketing.com.br/" />

  <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:url" content="https://dr-ernani.bydomarketing.com.br/" />
  <meta property="og:title" content="Dr. Ernani Castro | Cirurgião Plástico no Maranhão" />
  <meta property="og:description" content="Pioneirismo e Precisão em Cirurgia Plástica no Maranhão. Especialista em Flancoplastia, Mamoplastia Short Scar e Contorno Corporal de Alta Definição." />
  <meta property="og:image" content="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/LOGO-ERNANI-CASTRO-300x84_mzunbm.png" />
  <meta property="og:site_name" content="Dr. Ernani Castro" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dr. Ernani Castro | Cirurgião Plástico no Maranhão" />
  <meta name="twitter:description" content="Pioneirismo e Precisão em Cirurgia Plástica no Maranhão. Especialista em Flancoplastia, Mamoplastia Short Scar e Contorno Corporal." />
  <meta name="twitter:image" content="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/LOGO-ERNANI-CASTRO-300x84_mzunbm.png" />

  <!-- Favicon (usar logo do Cloudinary ou gerar um .ico próprio) -->
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/LOGO-ERNANI-CASTRO-300x84_mzunbm.png" />

  <!-- Preconnect para performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preconnect" href="https://res.cloudinary.com" />

  <!-- Tema de cor para navegadores mobile -->
  <meta name="theme-color" content="#0A1A2F" />
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

**Principais mudanças:**
- `lang="en"` → `lang="pt-BR"`
- Meta description completa e otimizada
- Open Graph tags para compartilhamento no WhatsApp/Facebook
- Twitter Card
- Canonical URL apontando para o domínio de produção
- Preconnect para fontes e Cloudinary (melhora performance)
- `theme-color` para navegadores mobile

### 3.2 — (Opcional) Gerar Favicon Dedicado

Se o Dr. Ernani tiver um ícone/logo quadrado, gerar um `favicon.ico` e colocar na pasta `public/`:

```
/public/favicon.ico
/public/favicon-32x32.png
/public/favicon-16x16.png
/public/apple-touch-icon.png
```

E atualizar os links no `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

---

## Fase 4 — Segurança (Hardening)

**Objetivo:** Aplicar boas práticas de segurança para proteger o site em produção.

### 4.1 — Criar `.htaccess` na pasta `public/`

Criar o arquivo `public/.htaccess` que será copiado para a pasta de build do Vite e servirá como configuração do Apache na Hostinger.

```apache
# ============================================
# .htaccess — Dr. Ernani Castro
# Segurança e configuração para SPA React
# ============================================

# ------------------------------------------
# 1. FORÇAR HTTPS
# ------------------------------------------
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ------------------------------------------
# 2. ROTEAMENTO SPA (React Router / History API)
# Redireciona todas as rotas para index.html
# ------------------------------------------
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]

# ------------------------------------------
# 3. HEADERS DE SEGURANÇA
# ------------------------------------------

# Prevenir Clickjacking
Header always set X-Frame-Options "SAMEORIGIN"

# Prevenir MIME Type Sniffing
Header always set X-Content-Type-Options "nosniff"

# Ativar proteção XSS no navegador
Header always set X-XSS-Protection "1; mode=block"

# Política de Referrer
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Política de Permissões (bloquear acesso a câmera, microfone, geolocation, etc.)
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"

# Content Security Policy (CSP)
# Permite: fontes do Google, imagens do Cloudinary e Unsplash, scripts inline do Vite
Header always set Content-Security-Policy "\
  default-src 'self'; \
  script-src 'self' 'unsafe-inline'; \
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; \
  font-src 'self' https://fonts.gstatic.com; \
  img-src 'self' data: https://res.cloudinary.com https://images.unsplash.com; \
  connect-src 'self'; \
  frame-ancestors 'self'; \
  base-uri 'self'; \
  form-action 'self'; \
"

# Strict Transport Security (HSTS) — Forçar HTTPS por 1 ano
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

# ------------------------------------------
# 4. BLOQUEAR ACESSO A ARQUIVOS SENSÍVEIS
# ------------------------------------------

# Bloquear arquivos ocultos (ex: .env, .git, .htaccess)
<FilesMatch "^\.">
  <IfModule mod_authz_core.c>
    Require all denied
  </IfModule>
  <IfModule !mod_authz_core.c>
    Order allow,deny
    Deny from all
  </IfModule>
</FilesMatch>

# Bloquear acesso a arquivos de configuração
<FilesMatch "\.(json|lock|md|yml|yaml|toml|ts|tsx|log|sql|bak|config)$">
  <IfModule mod_authz_core.c>
    Require all denied
  </IfModule>
  <IfModule !mod_authz_core.c>
    Order allow,deny
    Deny from all
  </IfModule>
</FilesMatch>

# ------------------------------------------
# 5. DESABILITAR LISTAGEM DE DIRETÓRIOS
# ------------------------------------------
Options -Indexes

# ------------------------------------------
# 6. CACHE DE ASSETS ESTÁTICOS
# ------------------------------------------
<IfModule mod_expires.c>
  ExpiresActive On

  # Imagens — Cache de 1 ano (Vite adiciona hash no nome)
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"

  # CSS e JS — Cache de 1 ano (Vite adiciona hash no nome)
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"

  # Fontes — Cache de 1 ano
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"

  # HTML — Sem cache longo (sempre buscar a versão mais recente)
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# ------------------------------------------
# 7. COMPRESSÃO GZIP
# ------------------------------------------
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
  AddOutputFilterByType DEFLATE font/woff
  AddOutputFilterByType DEFLATE font/woff2
</IfModule>
```

### 4.2 — Criar `robots.txt` na pasta `public/`

Criar o arquivo `public/robots.txt`:

```
# robots.txt — Dr. Ernani Castro
User-agent: *
Allow: /

Sitemap: https://dr-ernani.bydomarketing.com.br/sitemap.xml
```

> **Nota:** O `sitemap.xml` pode ser criado futuramente. Como é uma landing page de página única, ele é opcional no momento, mas a referência no robots.txt já fica preparada.

### 4.3 — Revisar links externos

Verificar que **todos** os links externos nos componentes possuem:
- `target="_blank"` ✅ (já tem)
- `rel="noopener noreferrer"` ✅ (já tem)

Isso já está correto em todos os componentes do projeto.

---

## Fase 5 — Configuração do Vite para Produção

**Objetivo:** Garantir que o build de produção esteja otimizado para a Hostinger.

### 5.1 — Atualizar `vite.config.ts` com configurações de build

Atualizar o `vite.config.ts` para incluir configurações de build otimizadas:

```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['motion'],
        },
      },
    },
  },
});
```

**O que isso faz:**
- `sourcemap: false` — Não gera sourcemaps em produção (segurança: impede de ver o código fonte original)
- `minify: 'terser'` — Minificação mais agressiva que o padrão (esbuild)
- `drop_console` / `drop_debugger` — Remove todos os `console.log` e `debugger` do código de produção
- `manualChunks` — Separa o código do React e Motion em chunks separados para melhor cache no navegador

### 5.2 — Testar o build localmente

```bash
npm run build
npm run preview
```

Verificar que:
- O site carrega corretamente em `http://localhost:4173`
- Não há erros no console do navegador
- Todas as imagens (Cloudinary) carregam
- A pasta `dist/` foi gerada com os arquivos esperados

---

## Fase 6 — Arquivos de Produção (Hostinger)

**Objetivo:** Preparar os arquivos que serão enviados para a Hostinger.

### 6.1 — Verificar a estrutura da pasta `dist/`

Após o build, a pasta `dist/` deve ter esta estrutura:

```
dist/
├── .htaccess          ← Copiado do public/
├── robots.txt         ← Copiado do public/
├── index.html         ← HTML processado pelo Vite
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── vendor-[hash].js
│   └── motion-[hash].js
└── (favicon se adicionado)
```

> **Importante:** O Vite automaticamente copia tudo que está na pasta `public/` para a raiz do `dist/`. Por isso o `.htaccess` e `robots.txt` devem ficar em `public/`.

---

## Fase 7 — README Profissional

**Objetivo:** Criar um README.md profissional em pt-BR para o repositório GitHub.

### 7.1 — Substituir o conteúdo do `README.md`

Substituir **todo** o conteúdo do `README.md` pelo conteúdo abaixo:

```markdown
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
```

---

## Fase 8 — Git e GitHub

**Objetivo:** Inicializar o repositório Git, configurar as branches e conectar ao GitHub.

### 8.1 — Atualizar `.gitignore`

Substituir o conteúdo do `.gitignore` pelo seguinte (mais completo):

```gitignore
# Dependências
node_modules/

# Build
dist/
build/

# Ambientes e segredos
.env
.env.local
.env.production
.env.*.local

# Manter o .env.example se existir
!.env.example

# Sistema
.DS_Store
Thumbs.db
*.log
*.swp
*.swo
*~

# IDE
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Coverage e testes
coverage/

# Cache
.cache/
.parcel-cache/
```

### 8.2 — Inicializar Git e conectar ao GitHub

```bash
# Inicializar o repositório Git
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "feat: versão inicial do site Dr. Ernani Castro

- Landing page React + Vite + TailwindCSS 4
- Componentes: Hero, Navbar, Specialties, ForWhom, About, Results, ResultsGallery, Locations, FAQ, Footer, FloatingActions
- SEO otimizado com meta tags, Open Graph e Twitter Card
- Segurança: .htaccess com headers de proteção, HTTPS, HSTS, CSP
- Build otimizado para produção (sourcemaps desabilitados, console.log removido)
- Configurado para deploy na Hostinger via webhook"

# Adicionar o remote do GitHub
git remote add origin https://github.com/megatecnologia-source/dr-ernani.git

# Renomear branch padrão para main (caso necessário)
git branch -M main

# Push da branch main
git push -u origin main
```

### 8.3 — Criar branch `production` e fazer push

```bash
# Criar a branch production a partir da main
git checkout -b production

# Push da branch production
git push -u origin production

# Voltar para a main
git checkout main
```

### 8.4 — Fluxo de trabalho definido

A partir daqui, o fluxo de trabalho será:

1. **Desenvolver** — Sempre na branch `main`
2. **Testar** — Localmente com `npm run dev`
3. **Build** — Testar o build com `npm run build && npm run preview`
4. **Merge** — Quando estiver pronto, fazer merge da `main` para `production`
5. **Deploy** — O push na `production` dispara o webhook da Hostinger

**Para fazer o merge da main para production:**
```bash
# Estando na main, com tudo commitado:
git checkout production
git merge main
git push origin production
git checkout main
```

---

## Fase 9 — Configuração do Webhook na Hostinger

**Objetivo:** Configurar o deploy automático na Hostinger quando houver push na branch `production`.

### 9.1 — Acessar o painel da Hostinger

1. Fazer login no painel da Hostinger (hpanel.hostinger.com)
2. Ir em **Sites** → Selecionar o domínio `bydomarketing.com.br`
3. Ir em **Avançado** → **Git**

### 9.2 — Configurar o repositório Git

1. Colar a URL do repositório: `https://github.com/megatecnologia-source/dr-ernani.git`
2. Selecionar a branch: `production`
3. Definir o diretório de deploy: `public_html/clientes/dr-ernani/public`
4. Clicar em **Criar**

### 9.3 — Copiar o Webhook URL

Após configurar, a Hostinger gerará uma **URL de webhook**. Copiar essa URL.

### 9.4 — Configurar o Webhook no GitHub

1. Ir no repositório GitHub: `https://github.com/megatecnologia-source/dr-ernani/settings/hooks`
2. Clicar em **Add webhook**
3. Configurar:
   - **Payload URL:** Colar a URL do webhook da Hostinger
   - **Content type:** `application/json`
   - **Secret:** (deixar vazio, a menos que a Hostinger peça)
   - **Events:** Selecionar "Just the push event"
   - **Active:** Marcar como ativo
4. Clicar em **Add webhook**

### 9.5 — Configurar o subdomínio

1. No painel da Hostinger → **Domínios** → **Subdomínios**
2. Criar o subdomínio `dr-ernani.bydomarketing.com.br`
3. Apontar para o diretório: `public_html/clientes/dr-ernani/public`
4. Aguardar propagação DNS (pode levar até 24h, geralmente minutos)

### 9.6 — Habilitar SSL (HTTPS)

1. No painel da Hostinger → **Segurança** → **SSL**
2. Instalar/ativar o certificado SSL para `dr-ernani.bydomarketing.com.br`
3. Ativar **Forçar HTTPS**

> **IMPORTANTE:** Na Hostinger com webhook, o deploy envia os **arquivos fonte** do repositório, NÃO o build. Isso significa que você precisa verificar se a Hostinger está configurada para rodar o build automaticamente. Caso contrário, será necessário:
>
> **Opção A (Recomendada):** Incluir a pasta `dist/` na branch `production` (remover `dist/` do `.gitignore` apenas na branch production)
>
> **Opção B:** Configurar um script de build na Hostinger (se suportado no seu plano)
>
> Veja a seção 9.7 para a Opção A.

### 9.7 — Incluir a pasta `dist/` na branch production

Como a Hostinger recebe os arquivos do repositório (e não roda `npm run build`), é necessário incluir o build na branch `production`.

**Fluxo ajustado para deploy:**

```bash
# 1. Na branch main, garantir que tudo está commitado
git checkout main
# ... fazer suas alterações e commits ...

# 2. Gerar o build
npm run build

# 3. Mudar para a branch production
git checkout production

# 4. Fazer merge da main
git merge main

# 5. Forçar inclusão da pasta dist/
# Adicionar um .gitignore modificado na production que NÃO ignora dist/
# OU remover dist/ do .gitignore temporariamente:
git add dist/ -f

# 6. Commit do build
git commit -m "build: atualizar build de produção"

# 7. Push — dispara o webhook
git push origin production

# 8. Voltar para a main
git checkout main
```

**Alternativa mais limpa:** Criar um script `deploy.sh` na raiz do projeto:

```bash
#!/bin/bash
# deploy.sh — Script de deploy para Hostinger
# Uso: bash deploy.sh "mensagem do commit"

set -e

MSG=${1:-"build: atualizar build de produção"}

echo "🔨 Gerando build de produção..."
npm run build

echo "📦 Preparando branch production..."
git checkout production
git merge main --no-edit

echo "📁 Adicionando pasta dist/..."
git add dist/ -f
git commit -m "$MSG" --allow-empty

echo "🚀 Enviando para GitHub (webhook da Hostinger)..."
git push origin production

echo "🔙 Voltando para main..."
git checkout main

echo "✅ Deploy concluído! O webhook da Hostinger será acionado."
```

Dar permissão de execução:
```bash
chmod +x deploy.sh
```

**Uso:**
```bash
bash deploy.sh "build: nova versão com correções"
```

### 9.8 — Ajustar diretório na Hostinger

Se a Hostinger receber todo o repositório no diretório configurado, o subdomínio deve apontar para a **subpasta `dist`** dentro do diretório configurado.

Ou seja, o caminho real dos arquivos na Hostinger será:
```
public_html/clientes/dr-ernani/public/dist/
```

Nesse caso, ajustar o subdomínio para apontar para:
```
public_html/clientes/dr-ernani/public/dist
```

**OU** configurar o diretório de deploy na Hostinger para receber apenas o conteúdo da pasta `dist/` diretamente.

> **Dica:** teste fazendo o primeiro deploy e verificando onde os arquivos foram parados na Hostinger usando o Gerenciador de Arquivos do painel.

---

## Fase 10 — Verificação Final

**Objetivo:** Confirmar que tudo está funcionando corretamente.

### 10.1 — Checklist de Verificação Local

- [ ] `npm run dev` funciona sem erros
- [ ] `npm run lint` não retorna erros
- [ ] `npm run build` gera a pasta `dist/` com sucesso
- [ ] `npm run preview` abre o site corretamente
- [ ] Todos os componentes renderizam corretamente
- [ ] Todas as imagens do Cloudinary carregam
- [ ] Links de WhatsApp abrem corretamente
- [ ] Link do Instagram no componente Results funciona
- [ ] Animações (Motion) funcionam suavemente
- [ ] Menu mobile abre/fecha corretamente
- [ ] Scroll suave funciona nos links da navbar
- [ ] Botão flutuante do WhatsApp aparece
- [ ] Botão "Voltar ao Topo" aparece ao rolar a página

### 10.2 — Checklist de Segurança (Após deploy)

- [ ] Site carrega em `https://dr-ernani.bydomarketing.com.br`
- [ ] Redirecionamento HTTP → HTTPS funciona
- [ ] Headers de segurança estão presentes (verificar com [SecurityHeaders.com](https://securityheaders.com))
- [ ] Arquivos sensíveis não são acessíveis (testar: `https://dr-ernani.bydomarketing.com.br/.env` deve retornar 403)
- [ ] `robots.txt` é acessível: `https://dr-ernani.bydomarketing.com.br/robots.txt`
- [ ] Listagem de diretórios está desabilitada (testar: `https://dr-ernani.bydomarketing.com.br/assets/` deve retornar 403)

### 10.3 — Checklist de SEO (Após deploy)

- [ ] Título da página aparece corretamente na aba do navegador
- [ ] Ao compartilhar o link no WhatsApp, o preview (OG tags) aparece corretamente
- [ ] `<html lang="pt-BR">` está presente no código-fonte
- [ ] Meta description está presente
- [ ] Canonical URL aponta para `https://dr-ernani.bydomarketing.com.br/`

### 10.4 — Checklist de Performance (Após deploy)

- [ ] Google Lighthouse: pontuação acima de 90 em Performance
- [ ] Google Lighthouse: pontuação acima de 90 em SEO
- [ ] Google Lighthouse: pontuação acima de 90 em Acessibilidade
- [ ] Google Lighthouse: pontuação acima de 90 em Boas Práticas
- [ ] Imagens carregam rapidamente (verificar se preconnect ao Cloudinary é efetivo)

---

## 📝 Resumo das Alterações por Arquivo

| Arquivo | Ação | Descrição |
|---|---|---|
| `metadata.json` | **DELETAR** | Arquivo do Google AI Studio, não é necessário |
| `.env.example` | **DELETAR** | Referência a Gemini/AI Studio, projeto não usa .env |
| `package.json` | **MODIFICAR** | Renomear, remover dependências não usadas, atualizar versão |
| `vite.config.ts` | **MODIFICAR** | Remover referências AI Studio, adicionar config de build |
| `index.html` | **MODIFICAR** | Adicionar SEO, OG tags, lang pt-BR, preconnect |
| `README.md` | **SUBSTITUIR** | README profissional em pt-BR |
| `.gitignore` | **MODIFICAR** | Versão mais completa |
| `src/components/Results.tsx` | **MODIFICAR** | Mover import para o topo |
| `public/.htaccess` | **CRIAR** | Segurança + SPA routing + cache + compressão |
| `public/robots.txt` | **CRIAR** | Diretivas para crawlers |
| `deploy.sh` | **CRIAR** | Script automatizado de deploy |

---

## ⚠️ Observações Importantes

1. **As imagens estão no Cloudinary** — O site depende de imagens hospedadas no Cloudinary. Certifique-se de que a conta Cloudinary está ativa e as imagens estão acessíveis.

2. **Galeria de Resultados usa Unsplash** — O componente `ResultsGallery.tsx` usa imagens placeholder do Unsplash (não são resultados reais). Em produção, essas imagens devem ser substituídas por fotos reais de antes/depois do Dr. Ernani (hospedadas no Cloudinary).

3. **WhatsApp** — O número configurado em todos os CTAs é `559883444737`. Confirme que esse número está correto e ativo no WhatsApp Business.

4. **Instagram** — O link do Instagram no componente `Results.tsx` aponta para `https://www.instagram.com/drernanicastro/`. Confirme que o perfil está correto.

5. **SSL** — É fundamental habilitar o SSL na Hostinger ANTES do primeiro deploy, para que o `.htaccess` não cause loops de redirecionamento.
