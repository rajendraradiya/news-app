import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { fileURLToPath } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
    }),
    AutoImport({
      dts: true,
      imports: ["vue"],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
