import PropTypes from "prop-types";
import { useState } from "react";
import { bgGradLightGrey } from "../../tools/constants";
import FocusGamer from "./FocusGamer";
import Select1Pokemon from "./Select1Pokemon";

function SelectPokémon({ allData }) {
  const [clickedPokemon, setClickedPokemon] = useState(null);

  return (
    <div className="flex flex-col justify-center">
      {clickedPokemon != null && (
        <FocusGamer allStats={allData} clickedPokemon={clickedPokemon} />
      )}
      <div
        className={`w-10/12 ${bgGradLightGrey} rounded-xl shadow-custom mx-auto`}
      >
        <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto ">
          <Select1Pokemon
            imagePokemon="src/assets/combat-selection/unknown_pokemon.png"
            namePokemon="unknown"
            width="w-5"
          />
          {allData.map((pokemon) => (
            <Select1Pokemon
              allData1Pokemon={pokemon}
              imagePokemon={pokemon.sprites.front_default}
              namePokemon={pokemon.name}
              width="w-14"
              setClickedPokemon={setClickedPokemon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SelectPokémon.propTypes = {
  allData: PropTypes.objectOf.isRequired,
};

export default SelectPokémon;
