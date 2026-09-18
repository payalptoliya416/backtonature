import fs from 'fs';

const liveCss = fs.readFileSync('scratch/live_bundle.css', 'utf8');

const regex = /[^{}]*d977bf9[^{}]*\{[^{}]*\}/g;
let match;
while ((match = regex.exec(liveCss)) !== null) {
  console.log(match[0]);
}
