module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  theme: {
    extend: {},
  },
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/area-51-design-system/src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: "area51-",
};
