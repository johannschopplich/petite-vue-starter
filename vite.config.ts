import { minifyHtml } from "vite-plugin-html";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [minifyHtml(mode === "production")],
}));
