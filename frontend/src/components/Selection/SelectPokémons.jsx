import PropTypes from "prop-types";
import { bgGradLightGrey } from "../../tools/constants";
import Select1Pokemon from "./Select1Pokemon";

function SelectPokémon({ allData }) {
  return (
    <div className="flex justify-center">
      <div className={`w-10/12 ${bgGradLightGrey} rounded-xl shadow-custom`}>
        <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto ">
          <Select1Pokemon
            imagePokemon="src/assets/combat-selection/unknown_pokemon.png"
            namePokemon="unknown"
            width="w-5"
          />
          {allData.map((pokemon) => (
            <Select1Pokemon
              key={pokemon.name}
              imagePokemon={pokemon.sprites.front_default}
              namePokemon={pokemon.name}
              width="w-14"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SelectPokémon.propTypes = {
  allData: PropTypes.arrayOf.isRequired,
};

export default SelectPokémon;
