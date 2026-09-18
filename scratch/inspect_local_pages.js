import fs from 'fs';

const pages = [
  'wooden-cabin-bbq-pool-for6.astro',
  'couples-family-cabin-swimming-pool.astro',
  'mountain-wood-cabin-kids-playground-cyprus.astro'
];

for (const p of pages) {
  const content = fs.readFileSync(`src/pages/accommodation/${p}`, 'utf8');
  console.log(`\n================= ${p} =================`);
  const wheelWidget = content.match(/<div[^>]*class="[^"]*elementor-widget-premium-media-wheel[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g);
  if (wheelWidget) {
    console.log('Found widget, length:', wheelWidget[0].length);
    // Find all items inside it
    const items = wheelWidget[0].match(/<div[^>]*class="[^"]*premium-adv-carousel__item-outer-wrapper[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g);
    console.log('Items count:', items ? items.length : 0);
    if (items) {
      items.forEach((it, i) => {
        const rep = it.match(/elementor-repeater-item-[a-f0-9]+/);
        const img = it.match(/<img[^>]+src="([^"]+)"[^>]*>/);
        console.log(`  Item ${i}: repeater=${rep ? rep[0] : 'none'}, img=${img ? img[1] : 'none'}`);
      });
    }
  } else {
    console.log('Wheel widget NOT found via regex');
  }
}
