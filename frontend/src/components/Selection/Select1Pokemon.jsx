import React from "react";

function Select1Pokemon({ imagePokemon, namePokemon, width }) {
  return (
    <div className="flex justify-center items-center w-[60px] h-[60px] bg-customLightGrey-lighter rounded-[10px] shadow-custom">
      <img
        src={imagePokemon}
        alt={`Picture of ${namePokemon}`}
        className={`${width} h-fit`}
      />
    </div>
  );
}

export default Select1Pokemon;
