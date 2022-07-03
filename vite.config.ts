import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [solidPlugin(), dts({ insertTypesEntry: true })],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    lib: {
      entry: "src/index.tsx",
      name: "area-51",
      formats: ["es", "umd"],
      fileName: (format) => `area-51.${format}.js`,
    },
    rollupOptions: {
      external: ["solid-js"],
      output: {
        globals: {
          "solid-js": "solid-js",
        },
      },
    },
  },
});
