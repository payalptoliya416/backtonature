import { c as createComponent } from './astro-component_CQzo86FK.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C17WtrUW.mjs';
import { $ as $$BaseLayout } from './BaseLayout_Q43LJaHH.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Bqy0siQ9.mjs';

async function getStaticPaths() {
  const pages = await getCollection("pages");
  return pages.map((page) => ({
    params: { slug: page.data.slug },
    props: { page }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const { Content } = await renderEntry(page);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": page.data.title, "description": page.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${page.data.title}</h1> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "P:/Astro/new-migration/output/src/pages/[...slug].astro", void 0);

const $$file = "P:/Astro/new-migration/output/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
