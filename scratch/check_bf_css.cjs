const fs = require('fs');

const page = fs.readFileSync('p:/Astro/new-migration/output/src/pages/glamping-resort-cyprus.astro', 'utf8');
const bundle = fs.readFileSync('p:/Astro/new-migration/output/public/css/bundle.css', 'utf8');

function findOccurrences(content, name, term) {
    let idx = 0;
    while ((idx = content.indexOf(term, idx)) !== -1) {
        console.log(`\n--- Match in ${name} at index ${idx} ---`);
        console.log(content.substring(Math.max(0, idx - 100), Math.min(content.length, idx + 200)));
        idx += term.length;
    }
}

findOccurrences(page, 'glamping-resort-cyprus.astro', '#bookingForm');
findOccurrences(bundle, 'bundle.css', '#bookingForm');
