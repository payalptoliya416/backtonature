const fs = require('fs');

// Read Calender.css and Calender.js
const cssContent = fs.readFileSync('p:/Astro/new-migration/output/src/hospitable_calendar-main/Calender.css', 'utf8');
let jsContent = fs.readFileSync('p:/Astro/new-migration/output/src/hospitable_calendar-main/Calender.js', 'utf8');

// Ensure functions are also exposed globally on window for inline onclick handlers
const globalExports = `
// Expose popup helper functions to window for onclick handlers
window.toggleGuestPopup = toggleGuestPopup;
window.closeGuestPopup = closeGuestPopup;
window.updateGuestSummary = updateGuestSummary;
window.updateCount = updateCount;
`;

// Also wrap the bottom submitButton listener so it safely checks if element exists
jsContent = jsContent.replace(
    'document.getElementById("submitButton").addEventListener("click", function (event) {',
    'document.addEventListener("DOMContentLoaded", function() {\n  const submitBtn = document.getElementById("submitButton");\n  if (submitBtn) submitBtn.addEventListener("click", function (event) {'
);
if (jsContent.includes('if (submitBtn) submitBtn.addEventListener')) {
    jsContent += '\n  });\n';
}

// Write to public/css/Calender.css and public/js/Calender.js & public/js/booking-widget.js
fs.writeFileSync('p:/Astro/new-migration/output/public/css/Calender.css', cssContent);
fs.writeFileSync('p:/Astro/new-migration/output/public/js/Calender.js', globalExports + '\n' + jsContent);
fs.writeFileSync('p:/Astro/new-migration/output/public/js/booking-widget.js', globalExports + '\n' + jsContent);

console.log('Successfully copied and configured Calender.css and Calender.js into public/!');
