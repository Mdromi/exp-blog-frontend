/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "corporate",
      "retro",
      "cyberpunk",
      "valentine",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "cmyk",
      "autumn",
      "acid",
      "lemonade",
      "coffee",
      "winter",
    ],
  },
};
