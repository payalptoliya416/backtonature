import fs from 'fs';

const liveHtml = fs.readFileSync('scratch/live_page.html', 'utf8');

// Find all CSS rules related to premium-adv-carousel or media-wheel or elementor-element-4b25ff48 or similar
const cssMatches = liveHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
console.log('Total inline style tags:', cssMatches.length);

cssMatches.forEach((styleTag, i) => {
  if (styleTag.includes('premium-adv-carousel') || styleTag.includes('media-wheel') || styleTag.includes('4b25ff48') || styleTag.includes('item-outer-wrapper')) {
    console.log(`\n--- Style Tag ${i} Match ---`);
    console.log(styleTag);
  }
});

// Also check all linked stylesheets in liveHtml
const linkMatches = liveHtml.match(/<link[^>]+rel=["']stylesheet["'][^>]+>/gi) || [];
console.log('\nLinked stylesheets:');
linkMatches.forEach(link => {
  if (link.includes('premium') || link.includes('elementor') || link.includes('post-') || link.includes('custom')) {
    console.log(link);
  }
});
