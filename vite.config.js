import { defineConfig } from 'vite';
import { provas } from './src/provas.js';

const pad = (n) => String(n).padStart(2, '0');

function renderProvas() {
  const total = pad(provas.length);
  return provas
    .map((p, i) => {
      const n = pad(i + 1);
      const v = ['a', 'b', 'c'][i % 3];
      const src = (ext) => `img/${p.img}-600.${ext} 600w, img/${p.img}-924.${ext} 924w`;
      return `
      <article class="prova prova--${v}" data-prova>
        <p class="prova__num" aria-hidden="true">${p.numero.replace('R$ ', 'R$\u00a0').split(' ').map((w) => `<span>${w}</span>`).join(' ')}</p>
        <figure class="prova__doc">
          <button class="prova__open" type="button" data-cursor="Ampliar" data-full="img/${p.img}-full.webp" aria-label="Ampliar print: ${p.rotulo}">
            <picture>
              <source type="image/avif" srcset="${src('avif')}" sizes="(min-width: 900px) 48vw, 100vw">
              <img src="img/${p.img}-924.webp" srcset="${src('webp')}" sizes="(min-width: 900px) 48vw, 100vw" width="924" height="616" loading="lazy" decoding="async" alt="${p.alt}">
            </picture>
          </button>
          <figcaption class="mono">Doc. ${n} / ${total} · print de WhatsApp</figcaption>
        </figure>
        <div class="prova__meta">
          <p class="mono prova__rotulo">${p.rotulo}</p>
          <h3 class="prova__numero-sr">${p.numero}</h3>
          <p class="prova__legenda">${p.legenda}</p>
        </div>
      </article>`;
    })
    .join('\n');
}

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  plugins: [
    {
      name: 'provas',
      transformIndexHtml: (html) =>
        html.replace('<!--PROVAS-->', renderProvas()).replace('<!--PROVAS_TOTAL-->', pad(provas.length)),
    },
  ],
});
