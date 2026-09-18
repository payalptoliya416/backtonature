import fs from 'fs';

const liveCss = fs.readFileSync('scratch/live_bundle.css', 'utf8');

// Find all width rules for premium-adv-carousel__item
const rules = liveCss.match(/[^{}]*premium-adv-carousel__item[^{}]*\{[^{}]*\}/g) || [];
console.log('All carousel item rules:');
rules.forEach(r => console.log(r));
