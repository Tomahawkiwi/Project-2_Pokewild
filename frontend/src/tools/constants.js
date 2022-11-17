// GENERAL

export const bgGradLightRed =
  "bg-gradient-to-br from-customLightRed to-customLightRed-endGrad";
export const bgGradDarkRed =
  "bg-gradient-to-br from-customDarkRed to-customDarkRed-endGrad";
export const bgGradLightGrey =
  "bg-gradient-to-br from-customLightGrey to-customLightGrey-endGrad";
export const bgGradVeryLightGrey =
  "bg-gradient-to-br from-customVeryLightGrey to-customVeryLightGrey-endGrad";
export const bgGradDarkGrey =
  "bg-gradient-to-br from-customDarkGrey to-customDarkGrey-endGrad";

// COMBAT SELECTION
export const choiceByDefault = {
  name: "Your choice",
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default:
              "/src/assets/combat-selection/Unknown_pokemon_big.png",
          },
        },
      },
    },
  },
  stats: [
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
  ],
};

export const opponentByDefault = {
  name: "Mystery...",
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default:
              "/src/assets/combat-selection/Unknown_pokemon_big.png",
          },
        },
      },
    },
  },
  stats: [
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
    { base_stat: 5 },
  ],
};

export const arenas = [
  {
    path: "/src/assets/combat-selection/GrassyField.webp",
    alt: "Arena of grass",
  },
  {
    path: "/src/assets/combat-selection/Watersurface.webp",
    alt: "Arena of water",
  },
  {
    path: "/src/assets/combat-selection/BurningField.webp",
    alt: "Arena of fire",
  },
  {
    path: "/src/assets/combat-selection/Cavefield.webp",
    alt: "Arena of cave",
  },
];

// COMBAT

export const attackType = {
  bug: "#91C12F",
  dark: "#5A5465",
  dragon: "#0B6DC3",
  electric: "#F4D23C",
  fairy: "#EC8FE6",
  fighting: "#CE416B",
  fire: "#FF9D55",
  flying: "#8FA9DE",
  ghost: "#5269AD",
  grass: "#63BC5A",
  ground: "#D97845",
  ice: "#73CEC0",
  normal: "#919AA2",
  poison: "#91C12F",
  psychic: "#FA7179",
  rock: "#C5B78C",
  steel: "#5A8EA2",
  water: "#5090D6",
};
