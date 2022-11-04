import PropTypes from "prop-types";
import React from "react";

function Select1Pokemon({ imagePokemon, namePokemon, width }) {
  return (
    <div className="flex justify-center items-center w-[60px] h-[60px] bg-customLightGrey-lighter rounded-[10px] shadow-custom">
      <img src={imagePokemon} alt={namePokemon} className={`${width} h-fit`} />
    </div>
  );
}

Select1Pokemon.propTypes = {
  imagePokemon: PropTypes.string.isRequired,
  namePokemon: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Select1Pokemon;
