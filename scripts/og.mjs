// Gera public/og-image.jpg a partir do hero: node scripts/og.mjs
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.emulateMedia({ reducedMotion: 'reduce' });
await p.goto('http://localhost:4173/', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: '.nav,.hero__clock,.hero__label,.cursor,.dock{display:none!important}.hero__stage{height:630px!important;min-height:0!important}.hero__title{font-size:14.2vw!important}' });
await p.waitForTimeout(800);
await p.screenshot({ path: 'public/og-image.jpg', type: 'jpeg', quality: 86, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await b.close();
