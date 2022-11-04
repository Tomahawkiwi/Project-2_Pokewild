//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customLightRed: {
          DEFAULT: "#E70100",
          endGrad: "#FE0000",
        },
        customLightGrey: {
          DEFAULT: "#F0F0F0",
          endGrad: "#D9D9D9",
          lighter: "#F8F8F8",
        },
        customDarkRed: {
          DEFAULT: "#900000",
          endGrad: "#AB0202",
        },
        customDarkGrey: {
          DEFAULT: "#333333",
          endGrad: "#444444",
          lighter: "#666666",
        },
      },
      backgroundImage: {
        dark: "url('src/assets/navbar/logoDarkMode.png')",
        fantominus: "url('src/assets/navbar/phantominus.png')",
      },

      fontFamily: {
        Rajdhani: ["Rajdhani", "sans-serif"],
        Silkscreen: ["Silkscreen", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};