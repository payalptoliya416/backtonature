import fs from 'fs';

const pages = [
  'wooden-cabin-bbq-pool-for6.astro',
  'couples-family-cabin-swimming-pool.astro',
  'mountain-wood-cabin-kids-playground-cyprus.astro'
];

for (const p of pages) {
  const content = fs.readFileSync(`src/pages/accommodation/${p}`, 'utf8');
  console.log(`\n================= ${p} =================`);
  const idx = content.indexOf('premium-adv-carousel__items');
  if (idx !== -1) {
    console.log('Found carousel at index', idx);
    const slice = content.substring(idx, idx + 2000);
    const items = slice.match(/elementor-repeater-item-[a-f0-9]+/g) || [];
    console.log('Repeater items found:', items);
    const imgs = slice.match(/src=\\?"([^"\\]+)\\?"/g) || [];
    console.log('Images:', imgs);
  }
}
