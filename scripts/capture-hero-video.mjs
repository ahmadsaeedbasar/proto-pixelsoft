#!/usr/bin/env node
/*
  Playwright-based capture script.
  Usage:
    1) Start dev server: `npm run dev` (localhost:5173)
    2) Run: `node scripts/capture-hero-video.mjs`
  Requires: `npm i -D playwright` and `ffmpeg` on PATH to convert to GIF.
*/
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const url = process.env.URL || 'http://localhost:5173/';
const outDir = path.resolve(process.cwd(), 'artifacts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1100, height: 720 },
    recordVideo: { dir: outDir, size: { width: 1100, height: 720 } },
  });

  const page = await context.newPage();
  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Give the hero animation time to load and autoplay
  await page.waitForTimeout(2000);

  // Optionally scroll slightly to ensure reveal triggers
  await page.evaluate(() => window.scrollTo({ top: 120, behavior: 'smooth' }));
  await page.waitForTimeout(1500);

  // Wait a little longer to capture a few cycles
  await page.waitForTimeout(3000);

  // Close context to flush video file
  await context.close();
  await browser.close();

  // Find the produced WebM file
  const files = fs.readdirSync(outDir).filter((f) => f.endsWith('.webm'));
  if (files.length === 0) {
    console.error('No video produced in', outDir);
    process.exit(1);
  }

  const webm = path.join(outDir, files[0]);
  const gif = path.join(outDir, 'hero-capture.gif');

  console.log('Captured video:', webm);
  console.log('To convert to GIF run (requires ffmpeg):');
  console.log(`ffmpeg -y -i "${webm}" -vf "fps=15,scale=880:-1:flags=lanczos" -loop 0 "${gif}"`);
  console.log('After running ffmpeg, your GIF will be at:', gif);
})();
