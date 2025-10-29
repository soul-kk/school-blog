/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d8fcd5",
        secondary: "#fdd3af",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
