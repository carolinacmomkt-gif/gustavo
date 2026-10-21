# Site Gustavo Gomes · Gestor de tráfego

Vite + HTML/CSS/JS puro. Saída estática em `dist/`, pronta para Vercel ou Netlify.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
```

- Copy e regras: `CLAUDE.md`. Referências e direção de arte: `REFERENCIAS.md`.
- Provas (prints): `src/provas.js`. Para adicionar uma, coloque o recorte 3:2 em `public/img` (600 e 924 px, `.avif` e `.webp`, mais o `-full.webp` do print inteiro) e acrescente um item no array.
- Áudios dos depoimentos: `public/media`. Picos da forma de onda: `src/peaks.json` (gerados com ffmpeg).
- Tags de mídia (Meta Pixel, Google Tag, TikTok Pixel): bloco comentado no `<head>` do `index.html`. Todo link com `data-cta` dispara o evento de contato.
- `og-image.jpg`: gere de novo com `node scripts/og.mjs` (precisa do `npm run preview` rodando). Quando o domínio existir, troque `og:image` por URL absoluta.
- Screenshots de autoavaliação: `docs/screens/` (1440 e 390 px).
