import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  // Server mode: API routes run on-demand on Vercel serverless functions
  output: "server",
  adapter: vercel(),
});

