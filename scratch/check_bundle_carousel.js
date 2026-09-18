import fs from 'fs';

const bundleCss = fs.readFileSync('public/css/bundle.css', 'utf8');

const regex = /([^{}]+)\{([^{}]+)\}/g;
let match;
const found = [];
while ((match = regex.exec(bundleCss)) !== null) {
  const selector = match[1].trim();
  const body = match[2].trim();
  if (selector.includes('premium-adv-carousel') || selector.includes('media-wheel') || selector.includes('4b25ff48')) {
    found.push({ selector, body });
  }
}

console.log('Found rules in public/css/bundle.css:', found.length);
found.slice(0, 30).forEach(f => {
  console.log(`${f.selector} {\n  ${f.body}\n}`);
});
