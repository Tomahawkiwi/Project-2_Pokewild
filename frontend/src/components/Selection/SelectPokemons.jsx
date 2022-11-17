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
  clickedOpponent,
  setClickedOpponent,
  clickedArena,
  setDialbox,
}) {
  const getRandomOpponent = (callback) => {
    for (let i = 0; i < 30; i += 1) {
      setTimeout(() => {
        const randomPkmn = allData[Math.floor(Math.random() * allData.length)];
        setClickedOpponent(randomPkmn);
        if (i === 29) {
          setTimeout(() => callback(randomPkmn), 500);
        }
      }, 100 * i);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <FocusGamer
        clickedPokemon={clickedPokemon}
        setIsChoiceValidated={setIsChoiceValidated}
        isChoiceValidated={isChoiceValidated}
        clickedArena={clickedArena}
        getRandomOpponent={getRandomOpponent}
        setDialbox={setDialbox}
      />
      <div
        className={`w-full ${bgGradLightGrey} rounded-xl shadow-custom mx-auto`}
      >
        <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto">
          {allData.map((pokemon) => (
            <Select1Pokemon
              key={pokemon.name}
              allData1Pokemon={pokemon}
              imagePokemon={pokemon.sprites.front_default}
              namePokemon={pokemon.name}
              setClickedPokemon={setClickedPokemon}
              clickedPokemon={clickedPokemon}
              clickedOpponent={clickedOpponent}
              setIsChoiceValidated={setIsChoiceValidated}
            />
          ))}
          <SelectRandomPokemon
            width="w-5"
            setClickedPokemon={setClickedPokemon}
            allData={allData}
            setIsChoiceValidated={setIsChoiceValidated}
          />
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
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  setClickedOpponent: PropTypes.func.isRequired,
  clickedArena: PropTypes.string.isRequired,
  setDialbox: PropTypes.func.isRequired,
};

export default SelectPokemons;
