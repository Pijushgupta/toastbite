import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "Toastbite",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `toastbite.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"], // Vue is a peer dependency
      output: {
        globals: {
          exports: "named",
          vue: "Vue",
        },
      },
    },
  },
});
