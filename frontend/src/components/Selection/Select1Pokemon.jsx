import PropTypes from "prop-types";
import React from "react";

function Select1Pokemon({
  allData1Pokemon,
  imagePokemon,
  namePokemon,
  setClickedPokemon,
  clickedPokemon,
  clickedOpponent,
  setIsChoiceValidated,
  setButtonReady,
}) {
  return (
    <button
      type="button"
      onClick={() => {
        setClickedPokemon(allData1Pokemon);
        setButtonReady(false);
        setIsChoiceValidated(false);
      }}
      className={`${
        allData1Pokemon.name === clickedPokemon.name &&
        allData1Pokemon.name !== clickedOpponent.name &&
        "scale-110 bg-customLightRed border-2 border-customLightGrey-lighter"
      } ${
        allData1Pokemon.name === clickedOpponent.name &&
        allData1Pokemon.name !== clickedPokemon.name &&
        "scale-110 bg-blue-500 border-2 border-customLightGrey-lighter"
      } ${
        allData1Pokemon.name === clickedPokemon.name &&
        allData1Pokemon.name === clickedOpponent.name &&
        "scale-110 bg-customLightRed border-blue-500 border-4"
      }
      ${
        allData1Pokemon.name !== clickedPokemon.name &&
        allData1Pokemon.name !== clickedOpponent.name &&
        "bg-customLightGrey-lighter"
      }
          if (allData1Pokemon.name === clickedOpponent.name) {"bg-customLightGrey-lighter"}
       flex justify-center items-center w-[60px] h-[60px] rounded-[10px] shadow-custom hover:scale-110`}
    >
      <img src={imagePokemon} alt={namePokemon} className="w-14 h-fit" />
    </button>
  );
}

Select1Pokemon.propTypes = {
  allData1Pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  imagePokemon: PropTypes.string.isRequired,
  namePokemon: PropTypes.string.isRequired,
  setClickedPokemon: PropTypes.func.isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  setIsChoiceValidated: PropTypes.func.isRequired,
  setButtonReady: PropTypes.func.isRequired,
};

export default Select1Pokemon;
