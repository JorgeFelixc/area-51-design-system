/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config";
 */
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");
const tailwindConfig = require("./tailwind.config");

//  export default {
//  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//  plugins: [tailwind(tailwindConfig)],
//};
 
//eslint-disable-next-line no-undef
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
