#!/bin/bash
# ============================================
# deploy.sh — Deploy para Hostinger via GitHub
# 
# Uso: bash deploy.sh "mensagem do commit"
#
# Este script:
# 1. Gera o build de produção (npm run build)
# 2. Cria um commit temporário APENAS com o conteúdo de dist/
# 3. Faz push forçado na branch 'production' do GitHub
# 4. O webhook da Hostinger detecta o push e atualiza o servidor
# ============================================

set -e

# Mensagem do commit (opcional)
MSG=${1:-"build: deploy de produção — $(date +'%Y-%m-%d %H:%M')"}

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # Sem cor

echo -e "${BLUE}🔨 [1/5] Limpando builds anteriores...${NC}"
npm run clean

echo -e "${BLUE}🔨 [2/5] Gerando build de produção...${NC}"
npm run build

echo -e "${BLUE}📦 [3/5] Preparando branch production...${NC}"
cd dist
git init
git add -A
git commit -m "$MSG"

echo -e "${BLUE}🚀 [4/5] Enviando para GitHub...${NC}"
git remote add origin https://github.com/megatecnologia-source/dr-ernani.git
git fetch origin production 2>/dev/null || true
git checkout -B production
git push -f origin production

echo -e "${BLUE}🧹 [5/5] Limpando arquivos temporários...${NC}"
cd ..
rm -rf dist/.git

echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}   O webhook da Hostinger será acionado automaticamente.${NC}"
echo -e "${GREEN}   Verifique: https://dr-ernani.bydomarketing.com.br${NC}"
