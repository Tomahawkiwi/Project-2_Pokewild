import PropTypes from "prop-types";
import bgGradLightGrey from "../../tools/constants";
import FocusGamer from "./FocusGamer";
import Select1Pokemon from "./Select1Pokemon";
import SelectRandomPokemon from "./SelectRandomPokemon";

function SelectPokémon({ allData, clickedPokemon, setClickedPokemon }) {
  return (
    <div className="flex flex-col justify-center">
      {clickedPokemon != null && (
        <FocusGamer allStats={allData} clickedPokemon={clickedPokemon} />
      )}
      <div
        className={`w-10/12 ${bgGradLightGrey} rounded-xl shadow-custom mx-auto`}
      >
        <div className="w-fit grid gap-3 grid-cols-4 px-4 py-4 mx-auto ">
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
              width="w-14"
              setClickedPokemon={setClickedPokemon}
              clickedPokemon={clickedPokemon}
              allPokemons={allData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SelectPokémon.propTypes = {
  allData: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  setClickedPokemon: PropTypes.func.isRequired,
};

export default SelectPokémon;
