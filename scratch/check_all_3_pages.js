import https from 'https';
import fs from 'fs';

const pages = [
  'wooden-cabin-bbq-pool-for6',
  'couples-family-cabin-swimming-pool',
  'mountain-wood-cabin-kids-playground-cyprus'
];

async function fetchPage(slug) {
  return new Promise((resolve, reject) => {
    https.get(`https://backtonature.cy/accommodation/${slug}/`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  for (const p of pages) {
    const html = await fetchPage(p);
    console.log(`\n=== Page: ${p} ===`);
    
    // Check widget classes and elementor IDs
    const wheelMatch = html.match(/elementor-widget-premium-media-wheel[^\"]*/g);
    console.log('Wheel widget matches:', wheelMatch);

    // Check width styles in the html or style tags
    const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
    styleMatches.forEach(s => {
      if (s.includes('premium-adv-carousel') || s.includes('premium-media-wheel') || s.includes('item-outer-wrapper')) {
        console.log('Style match:', s.substring(0, 400));
      }
    });

    // Check image dimensions in the media wheel
    const idx = html.indexOf('premium-adv-carousel');
    if (idx !== -1) {
      console.log('Snippet:', html.substring(idx - 100, idx + 800));
    }
  }
}

run();
