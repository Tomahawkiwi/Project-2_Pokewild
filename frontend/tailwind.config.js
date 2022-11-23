//  @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    cursor: {
      default: "url(/Cursors/pokemon-cursor.png), default",
      pointer: "url(/Cursors/pokemon-pointer.png), pointer",
      "not-allowed": "url(/Cursors/pokemon-not-allowed.png), not-allowed",
    },
    extend: {
      screens: {
        "3xs": "420px",
        "2xs": "470px",
        xs: "520px",
      },
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
        solaroc: "url('/navbar/solaroc.png')",
        fantominus: "url('/navbar/fantominus.png')",
        home: "url('/img-home/bg-img-home.jpg')",
        darkhome: "url('/img-home/bg-img-home-dark.jpg')",
        pokedexheader: "url('/pokedex/pokedex-header.png')",
        darkpokedexheader: "url('/pokedex/pokedex-header-dark.png')",
        pokedexheaderlg: "url('/pokedex/pokedex-header-desktop.png')",
        darkpokedexheaderlg: "url('/pokedex/pokedex-header-desktop-dark.png')",
        deskflames: "url('/img-home/flames-bg.png')",
      },

      fontFamily: {
        Rajdhani: ["Rajdhani", "sans-serif"],
        Silkscreen: ["Silkscreen", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
        bolder: "1px 5px 5px 1px rgba(0, 0, 0, 0.25)",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
