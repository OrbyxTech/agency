/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,ks,jsx}"],
  theme: {},
  plugins: [import("@tailwindcss/typography")],
};
