import { resolve } from "node:path";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import transformerDirective from "@unocss/transformer-directives";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },

  plugins: [
    // https://github.com/unocss/unocss
    UnoCSS({
      transformers: [transformerDirective()],
    }),
  ],
});
