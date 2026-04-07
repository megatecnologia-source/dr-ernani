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
