import React from "react";
import { Link } from "react-router-dom";
import PokedexDetails from "../../pages/PokedexDetails";
import { bgGradLightRed } from "../../tools/constants";
import PokedexList from "../Pokedex/PokedexList";

function HomeButtons() {
  const pokeRandom = Math.floor(Math.random() * 151);
  return (
    <div className="flex m-8 space-x-7 justify-center text-white font-Silkscreen text-sm h-auto sm:text-lg">
      <div
        className={`${bgGradLightRed} dark:bg-gradient-to-br dark:from-customDarkRed dark:to-customDarkRed-endGrad flex rounded-xl shadow-custom p-2 items-center sm:h-16`}
      >
        <Link to={`/pokedex/${pokeRandom}`} element={<PokedexDetails />}>
          <button type="button"> Get a random pokemon </button>
        </Link>
      </div>
      <div
        className={`${bgGradLightRed} dark:bg-gradient-to-br dark:from-customDarkRed dark:to-customDarkRed-endGrad flex rounded-xl shadow-custom p-2 items-center sm:h-16`}
      >
        <Link to="/pokedex" element={<PokedexList />}>
          <button type="button"> View all 151 pokemon </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeButtons;
