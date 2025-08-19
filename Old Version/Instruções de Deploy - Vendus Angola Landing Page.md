# Instruções de Deploy - Vendus Angola Landing Page

## Arquivos Entregues

1. **vendus-angola-landing-page.tar.gz** - Arquivo compactado com todo o projeto
2. **vendus-angola/dist/** - Pasta com os arquivos de produção prontos para deploy
3. **vendus-angola/src/** - Código fonte completo do projeto React

## Opções de Deploy

### Opção 1: Deploy dos Arquivos de Produção (Recomendado)
Os arquivos na pasta `vendus-angola/dist/` estão prontos para serem hospedados em qualquer servidor web:

- **Netlify**: Faça upload da pasta `dist` ou conecte o repositório Git
- **Vercel**: Faça upload da pasta `dist` ou conecte o repositório Git
- **GitHub Pages**: Faça upload dos arquivos da pasta `dist`
- **Servidor próprio**: Copie os arquivos da pasta `dist` para o diretório web do seu servidor

### Opção 2: Deploy com Build Automático
Se preferir usar um serviço que faça o build automaticamente:

1. Faça upload do projeto completo para um repositório Git (GitHub, GitLab, etc.)
2. Conecte o repositório ao seu serviço de hospedagem
3. Configure o comando de build: `pnpm run build`
4. Configure o diretório de output: `dist`

## Estrutura dos Arquivos de Produção

```
dist/
├── index.html              # Página principal
├── assets/
│   ├── hero-image-*.jpg     # Imagem principal do hero
│   ├── interface-image-*.webp # Imagem da interface
│   ├── pos-interface-*.png  # Imagem do POS
│   ├── index-*.css         # Estilos compilados
│   └── index-*.js          # JavaScript compilado
```

## Funcionalidades Implementadas

✅ **Design Responsivo** - Funciona em desktop, tablet e mobile
✅ **Navegação Suave** - Links de navegação para seções da página
✅ **Seção Hero** - Com call-to-action principal
✅ **Estatísticas** - Números impressionantes do Vendus
✅ **Funcionalidades** - Cards com benefícios do software
✅ **Vantagens** - Por que escolher o Vendus
✅ **Preços** - Seção adaptada para o mercado angolano
✅ **FAQ** - Perguntas frequentes
✅ **Footer** - Links e informações de contato

## Personalização

Para fazer alterações no conteúdo:

1. Edite o arquivo `src/App.jsx`
2. Para alterar estilos, edite `src/App.css`
3. Para trocar imagens, substitua os arquivos em `src/assets/`
4. Execute `pnpm run build` para gerar nova versão de produção

## Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Criar build de produção
pnpm run build

# Visualizar build de produção
pnpm run preview
```

## Suporte

A landing page está totalmente funcional e otimizada para conversões. Todos os botões "Experimente Grátis" e "Solicitar Informações" estão prontos para serem conectados ao seu sistema de vendas.

**Vendus Angola** está pronto para começar as vendas! 🚀

