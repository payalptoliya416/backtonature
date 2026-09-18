import fs from 'fs';

const content = fs.readFileSync('src/pages/accommodation/wooden-cabin-bbq-pool-for6.astro', 'utf8');

const idx = content.indexOf('elementor-widget-premium-media-wheel');
if (idx !== -1) {
  console.log(content.substring(idx, idx + 4000));
}
