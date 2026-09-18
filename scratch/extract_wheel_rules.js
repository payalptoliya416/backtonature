import fs from 'fs';

const liveCss = fs.readFileSync('scratch/live_bundle.css', 'utf8');

const rules = liveCss.split('}');
const relevant = rules.filter(r => 
  r.includes('.premium-adv-carousel') || 
  r.includes('.premium-media-wheel') ||
  r.includes('media-wheel')
);

console.log('=== All Relevant CSS Rules ===');
relevant.forEach(r => console.log(r.trim() + '}'));
