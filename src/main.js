import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import peaks from './peaks.json';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const EASE = 'expo.out';

/* ─────────── smooth scroll ─────────── */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

$$('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = id === '#topo' ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    closeMenu();
    if (lenis) lenis.scrollTo(target, { duration: 1.6 });
    else window.scrollTo({ top: target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY });
  });
});

/* ─────────── navegação, menu e dock ─────────── */
const nav = $('[data-nav]');
const dock = $('.dock');
const menu = $('[data-menu]');
const menuBtn = $('[data-menu-btn]');

ScrollTrigger.create({
  start: 40,
  end: 'max',
  onToggle: (self) => nav.classList.toggle('is-solid', self.isActive),
});
ScrollTrigger.create({
  trigger: '.contato',
  start: 'top 80%',
  end: 'max',
  onToggle: (self) => dock.classList.toggle('is-hidden', self.isActive),
});

function closeMenu() {
  if (menu.hidden) return;
  menu.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = 'Menu';
  lenis?.start();
}
menuBtn.addEventListener('click', () => {
  if (!menu.hidden) return closeMenu();
  menu.hidden = false;
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.textContent = 'Fechar';
  lenis?.stop();
  if (!reduce) gsap.from($$('.menu__links a', menu), { yPercent: 40, opacity: 0, duration: 0.9, stagger: 0.06, ease: EASE });
});
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu());

/* relógio de Anápolis */
const clock = $('[data-clock]');
const tick = () => {
  clock.textContent = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }).format(new Date());
};
tick();
setInterval(tick, 20000);

/* ─────────── conversão ─────────── */
$$('[data-cta]').forEach((el) =>
  el.addEventListener('click', () => {
    const origem = el.dataset.cta;
    window.fbq?.('track', 'Contact', { content_name: origem });
    window.gtag?.('event', 'generate_lead', { method: 'whatsapp', origem });
    window.ttq?.track?.('Contact', { content_name: origem });
    (window.dataLayer = window.dataLayer || []).push({ event: 'cta_whatsapp', origem });
  }),
);

/* ─────────── split por linha ─────────── */
function splitLines(el) {
  const indent = parseFloat(getComputedStyle(el).textIndent) || 0;
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(' ');
  const lines = [];
  let top = null;
  $$('.w', el).forEach((w) => {
    if (w.offsetTop !== top) {
      lines.push([]);
      top = w.offsetTop;
    }
    lines[lines.length - 1].push(w.textContent);
  });
  el.style.textIndent = '0';
  el.innerHTML = lines
    .map((l, i) => `<span class="line"${i === 0 && indent ? ` style="padding-left:${Math.max(indent, 0)}px;margin-left:${Math.min(indent, 0)}px"` : ''}><span class="line__in">${l.join(' ')}</span></span>`)
    .join('');
  return $$('.line__in', el);
}

/* ─────────── animações ─────────── */
function intro() {
  const photo = $('[data-hero-photo]');
  const tl = gsap.timeline({ defaults: { ease: EASE } });
  tl.fromTo(photo, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6 }, 0)
    .fromTo($('img', photo), { scale: 1.25 }, { scale: 1, duration: 2.2 }, 0)
    .fromTo('.ln__in', { yPercent: 108, y: 0 }, { yPercent: 0, y: 0, duration: 1.4, stagger: 0.09 }, 0.35)
    .fromTo(['.hero__label', '.hero__clock', '.nav'], { opacity: 0 }, { opacity: 1, duration: 1.2 }, 0.9);

  gsap.to($('img', photo), {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero__title', {
    yPercent: -14,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
}

function reveals() {
  $$('[data-split]').forEach((el) => {
    const lines = splitLines(el);
    gsap.fromTo(lines, { yPercent: 108 }, {
      yPercent: 0, duration: 1.3, stagger: 0.08, ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 86%' },
    });
  });

  $$('[data-split-lines]').forEach((el) => {
    const lines = $$('.vl', el).map((vl) => {
      vl.innerHTML = `<span class="line__in">${vl.innerHTML}</span>`;
      vl.classList.add('line');
      return vl.firstChild;
    });
    gsap.fromTo(lines, { yPercent: 108 }, {
      yPercent: 0, duration: 1.4, stagger: 0.12, ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 82%' },
    });
  });

  $$('[data-fade]').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 28 }, {
      opacity: 1, y: 0, duration: 1.2, ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  $$('[data-reveal-img]').forEach((fig) => {
    const img = $('img', fig);
    gsap.fromTo(fig, { clipPath: 'inset(100% 0% 0% 0%)' }, {
      clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut',
      scrollTrigger: { trigger: fig, start: 'top 85%' },
    });
    gsap.fromTo(img, { scale: 1.12, yPercent: -3 }, {
      scale: 1.04, yPercent: 3, ease: 'none',
      scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // contador
  $$('[data-count]').forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    const fmt = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const obj = { v: 0 };
    el.textContent = fmt(0);
    gsap.to(obj, {
      v: end, duration: 2.2, ease: 'power3.out',
      onUpdate: () => (el.textContent = fmt(obj.v)),
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  gsap.fromTo('.ledger__num', { xPercent: -4 }, {
    xPercent: 2, ease: 'none',
    scrollTrigger: { trigger: '.ledger', start: 'top bottom', end: 'bottom top', scrub: true },
  });
}

function trilho() {
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px)', () => {
    const wrap = $('[data-provas]');
    const track = $('[data-track]');
    const items = $$('[data-prova]', track);
    const hudN = $('[data-hud-n]');
    const hudBar = $('[data-hud-bar]');
    wrap.classList.add('is-pinned');
    const dist = () => track.scrollWidth - window.innerWidth;

    const move = gsap.to(track, {
      x: () => -dist(),
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        pin: true,
        start: 'top top',
        end: () => `+=${dist()}`,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const i = Math.min(items.length - 1, Math.round(self.progress * (items.length - 1)));
          hudN.textContent = String(i + 1).padStart(2, '0');
          hudBar.style.transform = `scaleX(${self.progress})`;
        },
      },
    });

    items.forEach((item) => {
      gsap.fromTo($('.prova__num', item), { xPercent: 4 }, {
        xPercent: -3, ease: 'none',
        scrollTrigger: { trigger: item, containerAnimation: move, start: 'left right', end: 'right left', scrub: true },
      });
      gsap.fromTo($('.prova__open', item), { clipPath: 'inset(0% 0% 100% 0%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
        scrollTrigger: { trigger: item, containerAnimation: move, start: 'left 85%', end: 'left 25%', scrub: true },
      });
    });

    return () => wrap.classList.remove('is-pinned');
  });
}

/* ─────────── players de áudio ─────────── */
const players = [];
function fmtTime(s) {
  s = Math.max(0, Math.round(s));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}
function setupPlayer(root) {
  const data = peaks[root.dataset.player];
  const canvas = $('[data-wave]', root);
  const btn = $('[data-play]', root);
  const cur = $('[data-cur]', root);
  const ctx = canvas.getContext('2d');
  const css = getComputedStyle(document.documentElement);
  const cOn = css.getPropertyValue('--ferrugem').trim();
  const cOff = css.getPropertyValue('--papel-2').trim();
  const cRest = css.getPropertyValue('--filete').trim();
  let audio = null;
  let progress = 0;
  let raf = 0;

  // suaviza os picos e garante altura mínima para a forma ler como áudio
  const bars = data.peaks.map((p, i, a) => {
    const avg = ((a[i - 1] ?? p) + p * 2 + (a[i + 1] ?? p)) / 4;
    return Math.max(0.06, Math.pow(avg, 0.8));
  });

  function draw() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const n = bars.length;
    const step = w / n;
    const bw = Math.max(1, step * 0.42);
    bars.forEach((b, i) => {
      const x = i * step;
      const bh = Math.max(2, b * h);
      const played = (i + 0.5) / n <= progress;
      ctx.fillStyle = played ? cOn : (audio ? cOff : cOff);
      ctx.globalAlpha = played || !audio ? 1 : 0.55;
      ctx.fillRect(x, (h - bh) / 2, bw, bh);
    });
    ctx.globalAlpha = 1;
    ctx.fillStyle = cRest;
    ctx.fillRect(0, h / 2 - 0.5, w, 1);
    ctx.globalAlpha = 1;
    if (progress > 0) { ctx.fillStyle = cOn; ctx.fillRect(progress * w - 0.5, 0, 1, h); }
  }

  function ensure() {
    if (audio) return audio;
    audio = new Audio(root.dataset.src);
    audio.preload = 'auto';
    audio.addEventListener('ended', () => { stop(); progress = 0; draw(); cur.textContent = '0:00'; });
    return audio;
  }
  function loop() {
    progress = audio.duration ? audio.currentTime / audio.duration : 0;
    cur.textContent = fmtTime(audio.currentTime);
    draw();
    raf = requestAnimationFrame(loop);
  }
  function play() {
    players.forEach((p) => p !== api && p.stop());
    ensure().play();
    root.classList.add('is-playing');
    btn.textContent = 'Pausar';
    raf = requestAnimationFrame(loop);
  }
  function stop() {
    audio?.pause();
    root.classList.remove('is-playing');
    btn.textContent = 'Ouvir';
    cancelAnimationFrame(raf);
  }
  btn.addEventListener('click', () => (root.classList.contains('is-playing') ? stop() : play()));
  canvas.addEventListener('pointerdown', (e) => {
    const r = canvas.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const a = ensure();
    const seek = () => { a.currentTime = p * a.duration; progress = p; cur.textContent = fmtTime(a.currentTime); draw(); };
    if (a.readyState >= 1) seek(); else a.addEventListener('loadedmetadata', seek, { once: true });
    if (!root.classList.contains('is-playing')) play();
  });
  new ResizeObserver(draw).observe(canvas);
  draw();
  const api = { stop };
  players.push(api);
}
$$('[data-player]').forEach(setupPlayer);

/* ─────────── lightbox ─────────── */
const lb = $('[data-lightbox]');
const lbImg = $('[data-lightbox-img]');
$$('.prova__open').forEach((b) =>
  b.addEventListener('click', () => {
    lbImg.src = b.dataset.full;
    lbImg.alt = $('img', b).alt;
    lb.showModal();
    lenis?.stop();
  }),
);
lb.addEventListener('close', () => lenis?.start());
lb.addEventListener('click', () => lb.close());

/* ─────────── cursor ─────────── */
if (fine && !reduce) {
  const c = $('[data-cursor-el]');
  const label = $('[data-cursor-label]');
  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const xTo = gsap.quickTo(c, 'x', { duration: 0.45, ease: 'power3' });
  const yTo = gsap.quickTo(c, 'y', { duration: 0.45, ease: 'power3' });
  window.addEventListener('pointermove', (e) => {
    pos.x = e.clientX; pos.y = e.clientY;
    xTo(pos.x); yTo(pos.y);
  });
  $$('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => {
      const t = el.dataset.cursor;
      c.classList.add('is-on', t ? 'is-label' : 'is-link');
      label.textContent = t;
    });
    el.addEventListener('pointerleave', () => c.classList.remove('is-on', 'is-label', 'is-link'));
  });
}

/* ─────────── início ─────────── */
// o hero anima já; o resto é montado em blocos ociosos para não travar a thread principal
const idle = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 600 }) : setTimeout(fn, 60));
function start() {
  if (reduce) return;
  intro();
  idle(() => {
    reveals();
    idle(() => {
      trilho();
      ScrollTrigger.refresh();
    });
  });
}
if (document.fonts?.ready) document.fonts.ready.then(start);
else window.addEventListener('load', start);
