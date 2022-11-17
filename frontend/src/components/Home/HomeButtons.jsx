import React from "react";
import { Link } from "react-router-dom";
import PokedexDetails from "../../pages/PokedexDetails";
import { bgGradLightRed } from "../../tools/constants";
import PokedexList from "../Pokedex/PokedexList";

function HomeButtons() {
  const pokeRandom = Math.floor(Math.random() * 151);
  return (
    <div className="flex m-8 space-x-7 justify-center text-white font-Silkscreen text-xl">
      <div
        className={`${bgGradLightRed} flex h-24 rounded-xl shadow-custom md:h-16`}
      >
        <Link to={`/pokedex/${pokeRandom}`} element={<PokedexDetails />}>
          <button type="button"> Get a random pokemon </button>
        </Link>
      </div>
      <div
        className={`${bgGradLightRed} flex h-24 rounded-xl shadow-custom md:h-16`}
      >
        <Link to="/pokedex" element={<PokedexList />}>
          <button type="button"> View all 151 pokemon </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeButtons;
