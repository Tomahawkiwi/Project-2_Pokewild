import PropTypes from "prop-types";
import { useState } from "react";
import { bgGradLightGrey } from "../../tools/constants";
import FocusGamer from "./FocusGamer";
import Select1Pokemon from "./Select1Pokemon";
import SelectRandomPokemon from "./SelectRandomPokemon";
import SelectionArena from "./SelectionArena";
import FocusOpponent from "./FocusOpponent";

function SelectPokemons({
  allData,
  clickedPokemon,
  setClickedPokemon,
  setIsChoiceValidated,
  isChoiceValidated,
  clickedOpponent,
  setClickedOpponent,
  clickedArena,
  setClickedArena,
  setDialbox,
}) {
  const [buttonReady, setButtonReady] = useState(false);

  const getRandomOpponent = (callback) => {
    for (let i = 0; i < 30; i += 1) {
      setTimeout(() => {
        const randomPkmn = allData[Math.floor(Math.random() * allData.length)];
        setClickedOpponent(randomPkmn);
        if (i === 29) {
          setTimeout(() => callback(randomPkmn), 1000);
        }
      }, 100 * i);
    }
  };

  return (
    <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between">
      <FocusGamer
        clickedPokemon={clickedPokemon}
        setIsChoiceValidated={setIsChoiceValidated}
        isChoiceValidated={isChoiceValidated}
        clickedArena={clickedArena}
        getRandomOpponent={getRandomOpponent}
        setDialbox={setDialbox}
        buttonReady={buttonReady}
        setButtonReady={setButtonReady}
      />
      <div className="md:w-fit">
        <div
          className={`w-full ${bgGradLightGrey} rounded-xl shadow-custom mx-auto lg:px-10`}
        >
          <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto xs:grid-cols-6 md:flex md:flex-wrap md:justify-center">
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
                setButtonReady={setButtonReady}
              />
            ))}
            <SelectRandomPokemon
              width="w-5"
              setClickedPokemon={setClickedPokemon}
              allData={allData}
              setIsChoiceValidated={setIsChoiceValidated}
              setButtonReady={setButtonReady}
            />
          </div>
        </div>
        <SelectionArena
          clickedArena={clickedArena}
          setClickedArena={setClickedArena}
        />
      </div>
      <FocusOpponent clickedOpponent={clickedOpponent} />
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
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
  setClickedArena: PropTypes.func.isRequired,
  setDialbox: PropTypes.func.isRequired,
};

export default SelectPokemons;
