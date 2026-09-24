import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  // Server mode: API routes run on-demand; static pages opt out with `export const prerender = true`
  output: "server",
  adapter: node({ mode: "standalone" }),
});

