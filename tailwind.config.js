/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBrown: "#A24D2B",
        brandLightBrown: "#fef4f2",
        brandWhite: "#ffff",
        brandBlack: "#000",
      },
      fontFamily: {
        filmNoirItalic: ["Film-Noir-Adventure-Italic", "sans-serif"],
        filmNoirRegular: ["Film-Noir-Adventure-Regular", "serif"],
        playFairBlack: ["Play-Fair-Display-Black", "sans-serif"],
        playFairRegular: ["Play-Fair-Display-Regular", "serif"],
      },
      fontSize: {
        xxs: ["10px", "14px"],
      },
    },
  },
  plugins: [],
};
