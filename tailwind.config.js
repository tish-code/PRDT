/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: { big: 600 },
      colors: { primary: { 100: "#2c55d4", 200: "#e9e9e9f5" } },
    },
  },
  plugins: [],
};
