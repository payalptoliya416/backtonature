const fs = require('fs');

const pageContent = fs.readFileSync('p:/Astro/new-migration/output/src/pages/glamping-resort-cyprus.astro', 'utf8');
const phpContent = fs.readFileSync('p:/Astro/new-migration/output/src/hospitable_calendar-main/calender.php', 'utf8');

const bfIndex = pageContent.indexOf('bookingForm');
console.log('bookingForm index in page:', bfIndex);
if (bfIndex !== -1) {
    console.log('Snippet in page:');
    console.log(pageContent.substring(bfIndex - 50, bfIndex + 400));
}

const phpBfIndex = phpContent.indexOf('bookingForm');
console.log('\nSnippet in PHP:');
console.log(phpContent.substring(phpBfIndex - 20, phpBfIndex + 400));
