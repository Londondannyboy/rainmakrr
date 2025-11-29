const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.setViewportSize({ width: 1200, height: 900 });
  await page.goto('https://placement.quest/private-equity-placement-agents-list/selinus-capital', { waitUntil: 'networkidle' });

  // Wait for page load
  await page.waitForTimeout(3000);

  // Scroll to Knowledge Graph section
  await page.evaluate(() => {
    const graph3d = document.querySelector('[id^="graph3d-"]');
    if (graph3d) graph3d.scrollIntoView({ block: 'start' });
  });

  // Wait for 3D graph to initialize
  await page.waitForTimeout(6000);

  // Take screenshot of 3D graph area
  await page.screenshot({
    path: '/tmp/viz_3d.png',
    fullPage: false
  });

  // Scroll down to timeline
  await page.evaluate(() => {
    const timeline = document.querySelector('[id^="timeline-"]');
    if (timeline) timeline.scrollIntoView({ block: 'center' });
  });

  await page.waitForTimeout(2000);
  await page.screenshot({
    path: '/tmp/viz_timeline.png',
    fullPage: false
  });

  // Scroll to 2D graph
  await page.evaluate(() => {
    // Find the 2D network section
    const sections = document.querySelectorAll('.zep-graph-container');
    if (sections.length > 0) {
      sections[sections.length - 1].scrollIntoView({ block: 'center' });
    }
  });

  await page.waitForTimeout(3000);
  await page.screenshot({
    path: '/tmp/viz_2d.png',
    fullPage: false
  });

  console.log('Console errors:', errors.length ? errors : 'None');
  console.log('Screenshots saved to /tmp/viz_*.png');

  await browser.close();
})();
