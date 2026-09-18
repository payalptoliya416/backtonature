import fs from 'fs';

const liveCss = fs.readFileSync('scratch/live_bundle.css', 'utf8');

// Search for all rules with `elementor-widget-premium-media-wheel` or `premium-adv-carousel`
const regex = /([^{}]+)\{([^{}]+)\}/g;
let match;
const found = [];
while ((match = regex.exec(liveCss)) !== null) {
  const selector = match[1].trim();
  const body = match[2].trim();
  if (selector.includes('premium-adv-carousel') || selector.includes('media-wheel')) {
    found.push({ selector, body });
  }
}

console.log('Found rules:', found.length);
found.forEach(f => {
  console.log(`${f.selector} {\n  ${f.body}\n}`);
});
