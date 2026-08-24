import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://superhero76777-design.github.io",
  base: "/Interior-design-0001",
  vite: {
    plugins: [tailwindcss()],
  },
});
