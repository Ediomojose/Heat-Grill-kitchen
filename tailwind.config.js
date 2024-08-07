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
        ThunderBlack: ["ThunderBlack", "sans-serif"],
        ThunderMedium: ["ThunderMedium", "serif"],
        ClabBold: ["ClabBold", "serif"],
        CirkaBold: ["CirkaBold", "serif"],
        InterRegular: ["InterRegular", "serif"],
      },
      fontSize: {
        xxs: ["10px", "14px"],
      },
      backgroundImage: {
        "breakfast-img":
          "url('./src/assets/media/images/menu-images/pexels-geraldjakeabangan.jpg')",
        "brunch-img":
          "url('./src/assets/media/images/menu-images/pexels-kyleroxas.jpg')",
        "launch-img":
          "url('./src/assets/media/images/menu-images/pexels-pixabay.jpg')",
        "dinner-img":
          "url('./src/assets/media/images/menu-images/pexels-tonyleong.jpg')",
        "foodtable-img":
          "url('./src/assets/media/images/hero-images/food.jpg')",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marqueeSec: "marqueeSec 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeSec: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
