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
  name: "Choice is yours",
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: "/src/assets/img-combat/Unknown_pokemon_big.png",
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
