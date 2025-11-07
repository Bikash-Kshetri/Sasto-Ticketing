/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: "#0a0a0a",
        customWhite: "#ffffff",
        customAccent: "#22c55e",
      },
      fontSize: {
        "small-size": "0.9375rem", // 15px
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};


