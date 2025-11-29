const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  const logs = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
    if (msg.type() === 'warning') logs.push('WARN: ' + msg.text());
    if (msg.text().includes('SpriteText') || msg.text().includes('graph') || msg.text().includes('3d')) {
      logs.push(msg.type() + ': ' + msg.text());
    }
  });

  await page.setViewportSize({ width: 1200, height: 900 });
  await page.goto('https://placement.quest/private-equity-placement-agents-list/selinus-capital', { waitUntil: 'networkidle' });

  await page.waitForTimeout(5000);

  // Check if libraries are loaded
  const libStatus = await page.evaluate(() => {
    return {
      ForceGraph3D: typeof ForceGraph3D,
      SpriteText: typeof SpriteText,
      THREE: typeof THREE
    };
  });

  console.log('Library status:', libStatus);
  console.log('Errors:', errors);
  console.log('Logs:', logs.slice(0, 10));

  await browser.close();
})();
