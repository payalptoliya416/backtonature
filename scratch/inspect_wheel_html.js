import fs from 'fs';

const liveHtml = fs.readFileSync('scratch/live_page.html', 'utf8');

// Search for the section that contains the media wheel
const wheelSection = liveHtml.match(/<div class="elementor-element elementor-element-[a-f0-9]+ e-transform premium-adv-carousel__infinite premium-adv-carousel__horizontal[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g);

if (wheelSection) {
  console.log('Found wheel section count:', wheelSection.length);
  console.log(wheelSection[0].substring(0, 2000));
} else {
  console.log('Not matched by regex, searching substring:');
  const idx = liveHtml.indexOf('premium-media-wheel');
  console.log(liveHtml.substring(idx - 100, idx + 2000));
}
