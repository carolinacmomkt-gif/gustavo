// Screenshots de autoavaliação: node scripts/screens.mjs <url> <pasta>
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import { mkdirSync } from 'node:fs';
const [url = 'http://localhost:4173/', out = 'screens'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
for (const [name, w, h, mobile] of [['desktop', 1440, 900, false], ['mobile', 390, 844, true]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(3200);
  let i = 0, last = -1;
  while (i < 60) {
    await p.screenshot({ path: `${out}/${name}-${String(i).padStart(2, '0')}.png` });
    const y = await p.evaluate(() => window.scrollY);
    if (y === last) break;
    last = y;
    if (mobile) await p.evaluate((d) => window.scrollBy(0, d), h * 0.85);
    else for (let k = 0; k < 8; k++) { await p.mouse.wheel(0, h * 0.85 / 8); await p.waitForTimeout(40); }
    await p.waitForTimeout(1500);
    i++;
  }
  const ow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(name, 'shots', i + 1, 'overflowX', ow, 'errors', errs);
  await p.close();
}
await b.close();
