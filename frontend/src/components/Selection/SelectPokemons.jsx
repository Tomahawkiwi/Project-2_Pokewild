import PropTypes from "prop-types";
import { bgGradLightGrey } from "../../tools/constants";
import FocusGamer from "./FocusGamer";
import Select1Pokemon from "./Select1Pokemon";
import SelectRandomPokemon from "./SelectRandomPokemon";

function SelectPokemons({
  allData,
  clickedPokemon,
  setClickedPokemon,
  setIsChoiceValidated,
  isChoiceValidated,
}) {
  return (
    <div className="flex flex-col justify-center">
      <FocusGamer
        clickedPokemon={clickedPokemon}
        setIsChoiceValidated={setIsChoiceValidated}
        isChoiceValidated={isChoiceValidated}
      />
      <div
        className={`w-full ${bgGradLightGrey} rounded-xl shadow-custom mx-auto`}
      >
        <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto">
          <SelectRandomPokemon
            width="w-5"
            setClickedPokemon={setClickedPokemon}
            allData={allData}
          />
          {allData.map((pokemon) => (
            <Select1Pokemon
              key={pokemon.name}
              allData1Pokemon={pokemon}
              imagePokemon={pokemon.sprites.front_default}
              namePokemon={pokemon.name}
              setClickedPokemon={setClickedPokemon}
              clickedPokemon={clickedPokemon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SelectPokemons.propTypes = {
  allData: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  setClickedPokemon: PropTypes.func.isRequired,
  isChoiceValidated: PropTypes.bool.isRequired,
  setIsChoiceValidated: PropTypes.func.isRequired,
};

export default SelectPokemons;

// {clickedPokemon != null && (
//   <FocusGamer allStats={allData} clickedPokemon={clickedPokemon} />
// )}
