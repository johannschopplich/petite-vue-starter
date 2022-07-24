import { defineConfig } from "unocss";
import { presetTypography } from "@unocss/preset-typography";
import { presetWind } from "@unocss/preset-wind";

export default defineConfig({
  presets: [presetWind(), presetTypography()],
});
