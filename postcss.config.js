/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

/* Changed to require import, dont support the import mordern */
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const tailwindConfig = require("./tailwind.config");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
