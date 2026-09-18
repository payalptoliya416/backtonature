import https from 'https';
import fs from 'fs';

https.get('https://backtonature.cy/accommodation/wooden-cabin-bbq-pool-for6/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/live_page.html', data);
    console.log('Saved live_page.html, size:', data.length);
  });
}).on('error', (err) => {
  console.error('Error fetching live page:', err);
});
