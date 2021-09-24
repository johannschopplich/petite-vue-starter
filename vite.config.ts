import { minifyHtml } from "vite-plugin-html";
import type { ConfigEnv, UserConfigExport } from "vite";

export default ({ mode }: ConfigEnv): UserConfigExport => ({
  plugins: [minifyHtml(mode === "production")],
});
