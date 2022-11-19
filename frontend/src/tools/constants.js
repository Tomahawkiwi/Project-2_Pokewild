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

export const allAttacks = {
  venusaur: [
    {
      name: "take down",
      type: "normal",
      isAttackSpe: false,
      power: 90,
      accurracy: 85,
      link: "https://pokeapi.co/api/v2/move/36/",
    },
    {
      name: "solar beam",
      type: "grass",
      isAttackSpe: true,
      power: 120,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/53/",
    },
  ],

  charizard: [
    {
      name: "air slash",
      type: "flying",
      isAttackSpe: true,
      power: 75,
      accurracy: 95,
      link: "https://pokeapi.co/api/v2/move/403/",
    },
    {
      name: "flare blitz",
      type: "fire",
      isAttackSpe: true,
      power: 120,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/394/",
    },
  ],

  blastoise: [
    {
      name: "skull bash",
      type: "normal",
      isAttackSpe: false,
      power: 130,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/130/",
    },
    {
      name: "hydro pump",
      type: "water",
      isAttackSpe: true,
      power: 110,
      accurracy: 80,
      link: "https://pokeapi.co/api/v2/move/56/",
    },
  ],
  pikachu: [
    {
      name: "slam",
      type: "normal",
      isAttackSpe: false,
      power: 80,
      accurracy: 75,
      link: "https://pokeapi.co/api/v2/move/21/",
    },
    {
      name: "thunder",
      type: "electric",
      isAttackSpe: true,
      power: 110,
      accurracy: 70,
      link: "https://pokeapi.co/api/v2/move/87/",
    },
  ],
  gyarados: [
    {
      name: "hyper beam",
      type: "normal",
      isAttackSpe: false,
      power: 150,
      accurracy: 90,
      link: "https://pokeapi.co/api/v2/move/63/",
    },
    {
      name: "hurricane",
      type: "flying",
      isAttackSpe: true,
      power: 110,
      accurracy: 70,
      link: "https://pokeapi.co/api/v2/move/542/",
    },
  ],
  articuno: [
    {
      name: "giga impact",
      type: "normal",
      isAttackSpe: false,
      power: 150,
      accurracy: 90,
      link: "https://pokeapi.co/api/v2/move/416/",
    },
    {
      name: "ice beam",
      type: "ice",
      isAttackSpe: true,
      power: 90,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/58/",
    },
  ],
  zapdos: [
    {
      name: "sky attack",
      type: "flying",
      isAttackSpe: false,
      power: 140,
      accurracy: 90,
      link: "https://pokeapi.co/api/v2/move/143/",
    },
    {
      name: "zap cannon",
      type: "electric",
      isAttackSpe: true,
      power: 120,
      accurracy: 50,
      link: "https://pokeapi.co/api/v2/move/192/",
    },
  ],
  moltres: [
    {
      name: "fly",
      type: "flying",
      isAttackSpe: false,
      power: 90,
      accurracy: 95,
      link: "https://pokeapi.co/api/v2/move/19/",
    },
    {
      name: "overheat",
      type: "fire",
      isAttackSpe: true,
      power: 130,
      accurracy: 90,
      link: "https://pokeapi.co/api/v2/move/315/",
    },
  ],
  dragonite: [
    {
      name: "earthquake",
      type: "ground",
      isAttackSpe: false,
      power: 100,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/89/",
    },
    {
      name: "dragon claw",
      type: "dragon",
      isAttackSpe: false,
      power: 80,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/337/",
    },
  ],
  mewtwo: [
    {
      name: "focus blast",
      type: "normal",
      isAttackSpe: false,
      power: 120,
      accurracy: 70,
      link: "https://pokeapi.co/api/v2/move/411/",
    },
    {
      name: "dream eater",
      type: "psychic",
      isAttackSpe: true,
      power: 100,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/138/",
    },
  ],
  mew: [
    {
      name: "meteor beam",
      type: "rock",
      isAttackSpe: true,
      power: 120,
      accurracy: 90,
      link: "https://pokeapi.co/api/v2/move/800/",
    },
    {
      name: "misty-explosion",
      type: "fairy",
      isAttackSpe: true,
      power: 100,
      accurracy: 100,
      link: "https://pokeapi.co/api/v2/move/802/",
    },
  ],
};
