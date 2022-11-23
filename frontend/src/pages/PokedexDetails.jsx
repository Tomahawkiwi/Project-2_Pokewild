import React from "react";
import PokemonPage from "../components/Pokedex/Focus/PokemonPage";
import { bgGradLightRed } from "../tools/constants";

function PokedexDetails() {
  return (
    <div
      className={`${bgGradLightRed} dark:bg-gradient-to-br dark:from-customDarkGrey dark:to-customDarkGrey-endGrad w-full h-full`}
    >
      <PokemonPage />
    </div>
  );
}

export default PokedexDetails;
