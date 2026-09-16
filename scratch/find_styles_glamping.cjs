const fs = require('fs');

const page = fs.readFileSync('p:/Astro/new-migration/output/src/pages/glamping-resort-cyprus.astro', 'utf8');

const regex = /<style[\s\S]*?<\/style>/gi;
let match;
while ((match = regex.exec(page)) !== null) {
    console.log('\n--- Found style tag: ---');
    console.log(match[0]);
}
