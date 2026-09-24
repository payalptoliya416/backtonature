import { c as createComponent } from './astro-component_CQzo86FK.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate } from './entrypoint_C17WtrUW.mjs';
import { $ as $$PostLayout } from './PostLayout_8IoVLF6j.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Bqy0siQ9.mjs';

async function getStaticPaths() {
  const items = await getCollection("rm_content_editor");
  return items.map((item) => ({
    params: { slug: item.data.slug },
    props: { item }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { item } = Astro2.props;
  const { Content } = await renderEntry(item);
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "title": item.data.title, "date": item.data.date, "description": item.data.description, "heroImage": item.data.heroImage, "heroImageAlt": item.data.heroImageAlt, "categories": item.data.categories, "tags": item.data.tags }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "P:/Astro/new-migration/output/src/pages/rm_content_editor/[...slug].astro", void 0);

const $$file = "P:/Astro/new-migration/output/src/pages/rm_content_editor/[...slug].astro";
const $$url = "/rm_content_editor/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
