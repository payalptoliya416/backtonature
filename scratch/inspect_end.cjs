const fs = require('fs');

let page = fs.readFileSync('p:/Astro/new-migration/output/src/pages/glamping-resort-cyprus.astro', 'utf8');
console.log('Last 300 chars:');
console.log(JSON.stringify(page.slice(-300)));
