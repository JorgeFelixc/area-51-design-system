import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config";
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
