import fs from 'fs';

const liveHtml = fs.readFileSync('scratch/live_page.html', 'utf8');

// Find all css or link hrefs in liveHtml
const allLinks = liveHtml.match(/href="([^"]+\.css[^"]*)"/g) || [];
console.log('All CSS links in liveHtml:');
allLinks.forEach(l => console.log(l));

// Search for any style tags in liveHtml that mention 4b25ff48 or media-wheel or adv-carousel
const styles = liveHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || [];
styles.forEach((s, idx) => {
  if (s.includes('4b25ff48') || s.includes('wheel') || s.includes('media-wrap') || s.includes('item-outer-wrapper') || s.includes('carousel')) {
    console.log(`Style tag ${idx}:`, s.substring(0, 500));
  }
});
