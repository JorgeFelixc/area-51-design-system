import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    lib: {
      entry: "src/index.ts",
      name: "area-51",
      fileName: (format) => `area-51.${format}.tsx`,
    },
    rollupOptions: {
      external: ["solid-js"],
    },
  },
});
