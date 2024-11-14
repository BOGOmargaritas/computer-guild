import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx(), react()],
  output: "hybrid",
  adapter: vercel()
});