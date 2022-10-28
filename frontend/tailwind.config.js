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
      fontFamily: {
        Rajdhani: ["Rajdhani", "sans-serif"],
        Silkscreen: ["Silkscreen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
