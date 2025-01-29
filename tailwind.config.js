/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5F7D6B",
        second: "#F3EADB",
        third: "#27170C",
        four:"#E5DD91"

      },
    },
  },
  plugins: [],
};
