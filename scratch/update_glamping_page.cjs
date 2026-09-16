const fs = require('fs');

let page = fs.readFileSync('p:/Astro/new-migration/output/src/pages/glamping-resort-cyprus.astro', 'utf8');

const lastBlockIndex = page.lastIndexOf('<BaseLayout');
if (lastBlockIndex !== -1) {
    const newEnd = `<BaseLayout
  title="Glamping Resort Cyprus | Back to Nature"
>
  <link rel="stylesheet" href="/css/Calender.css" />
  <div class="entry-content" set:html={rawContent} />

  <script is:inline src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script is:inline src="/js/Calender.js"></script>
</BaseLayout>
`;
    page = page.substring(0, lastBlockIndex) + newEnd;
    fs.writeFileSync('p:/Astro/new-migration/output/src/pages/glamping-resort-cyprus.astro', page, 'utf8');
    console.log('Successfully updated glamping-resort-cyprus.astro!');
} else {
    console.log('Could not find <BaseLayout');
}
