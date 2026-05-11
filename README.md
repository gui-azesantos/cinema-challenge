# Cinema Challenge

App em Next.js para organizar movimentos, diretores e filmes essenciais do cinema em uma agenda visual.

## Sobre

Este projeto é uma vitrine de estudo que apresenta:

- movimentos históricos do cinema
- diretores centrais de cada fase
- filmes recomendados por mês
- referências com links para Wikipedia e vídeos explicativos

## Como rodar

```bash
npm install
npm run dev
```

Em seguida, abra `http://localhost:3000` no navegador.

## Estrutura do projeto

- `app/page.tsx` — página principal e alternância entre ano 1 e ano 2
- `components/CinemaViewer.tsx` — componente que exibe os movimentos, diretores e filmes
- `data/ano1.ts` e `data/ano2.ts` — dados de movimentos, diretores, filmes e referencias
- `app/globals.css` — estilos globais do site

## Limpeza pública

Removido o Tailwind CSS e a configuração de PostCSS não utilizada, já que o projeto usa estilos inline e CSS global simples.

## Observações

O projeto é pensado como uma demonstração de conteúdo cinematográfico e navegação, não como uma aplicação complexa de produção.
