import PropTypes from "prop-types";
import React from "react";

function Select1Pokemon({
  allData1Pokemon,
  imagePokemon,
  namePokemon,
  width,
  setClickedPokemon,
}) {
  return (
    <button
      type="button"
      onClick={() => {
        setClickedPokemon(allData1Pokemon);
      }}
      className="flex justify-center items-center w-[60px] h-[60px] bg-customLightGrey-lighter rounded-[10px] shadow-custom hover:scale-110"
    >
      <img src={imagePokemon} alt={namePokemon} className={`${width} h-fit`} />
    </button>
  );
}

Select1Pokemon.propTypes = {
  imagePokemon: PropTypes.string.isRequired,
  namePokemon: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  setClickedPokemon: PropTypes.func.isRequired,
  allData1Pokemon: PropTypes.objectOf.isRequired,
};

export default Select1Pokemon;
// setClickedPokemon(allData1Pokemon);
