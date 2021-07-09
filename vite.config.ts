import { ConfigEnv, UserConfigExport } from "vite";
import { minifyHtml } from "vite-plugin-html";

export default ({ mode }: ConfigEnv): UserConfigExport => ({
  plugins: [minifyHtml(mode === "production")],
});
