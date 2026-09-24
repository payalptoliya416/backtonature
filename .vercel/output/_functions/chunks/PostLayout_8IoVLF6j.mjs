import { c as createComponent } from './astro-component_CQzo86FK.mjs';
import 'piccolore';
import { a as addAttribute, r as renderTemplate, d as renderHead, e as renderSlot } from './entrypoint_C17WtrUW.mjs';
import 'clsx';

const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostLayout;
  const { title, date, description, heroImage, heroImageAlt, categories, tags } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}<title>${title}</title>${renderHead()}</head> <body> <header> <nav> <a href="/">Home</a> <a href="/blog">Blog</a> </nav> </header> <main> <article> <h1>${title}</h1> <time${addAttribute(date, "datetime")}>${new Date(date).toLocaleDateString()}</time> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(heroImageAlt ?? "", "alt")}>`} ${categories && categories.length > 0 && renderTemplate`<div class="categories"> ${categories.map((cat) => renderTemplate`<span>${cat}</span>`)} </div>`} ${renderSlot($$result, $$slots["default"])} ${tags && tags.length > 0 && renderTemplate`<div class="tags"> ${tags.map((tag) => renderTemplate`<span>#${tag}</span>`)} </div>`} </article> </main> </body></html>`;
}, "P:/Astro/new-migration/output/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
