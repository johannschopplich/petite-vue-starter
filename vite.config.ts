import { ConfigEnv, UserConfigExport } from "vite";
import { minifyHtml } from "vite-plugin-html";

export default ({ command }: ConfigEnv): UserConfigExport => ({
  plugins: [minifyHtml(command === "build")],
});
