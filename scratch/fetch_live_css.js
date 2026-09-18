import https from 'https';
import fs from 'fs';

const url = 'https://backtonature.cy/wp-content/litespeed/css/40bf26577fd95135c4ccd71c8be75310.css?ver=cde87';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/live_bundle.css', data);
    console.log('Saved live_bundle.css, size:', data.length);
    
    // Search for media-wheel and adv-carousel rules
    const rules = data.split('}');
    const matches = rules.filter(r => 
      r.includes('premium-adv-carousel') || 
      r.includes('media-wheel') || 
      r.includes('premium-hover-effects') ||
      r.includes('repeater-item-30ea195') ||
      r.includes('4b25ff48')
    );
    console.log('Matching rules count:', matches.length);
    matches.forEach(m => console.log('\nRule:', m + '}'));
  });
}).on('error', err => console.error(err));
