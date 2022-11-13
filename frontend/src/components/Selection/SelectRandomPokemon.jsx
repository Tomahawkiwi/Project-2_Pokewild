import PropTypes from "prop-types";
import React from "react";

function SelectRandomPokemon({ width, setClickedPokemon, allData }) {
  const getRandomFighter = () => {
    for (let i = 0; i < 18; i += 1) {
      setTimeout(() => {
        setClickedPokemon(allData[Math.floor(Math.random() * allData.length)]);
      }, 100 * i);
    }
  };

  return (
    <button
      type="button"
      onClick={() => getRandomFighter()}
      className="flex justify-center items-center w-[60px] h-[60px] bg-customLightGrey-lighter rounded-[10px] shadow-custom hover:scale-110"
    >
      <img
        src="src/assets/combat-selection/unknown_pokemon.png"
        alt="Random pokemon"
        className={`${width} h-fit`}
      />
    </button>
  );
}

SelectRandomPokemon.propTypes = {
  width: PropTypes.string.isRequired,
  setClickedPokemon: PropTypes.func.isRequired,
  allData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectRandomPokemon;
