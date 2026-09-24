import { c as createComponent } from './astro-component_CQzo86FK.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate } from './entrypoint_C17WtrUW.mjs';
import { $ as $$PostLayout } from './PostLayout_8IoVLF6j.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Bqy0siQ9.mjs';

async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "title": post.data.title, "date": post.data.date, "description": post.data.description, "heroImage": post.data.heroImage, "heroImageAlt": post.data.heroImageAlt, "categories": post.data.categories, "tags": post.data.tags }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "P:/Astro/new-migration/output/src/pages/blog/[...slug].astro", void 0);

const $$file = "P:/Astro/new-migration/output/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
