import PropTypes from "prop-types";
import React from "react";
import { attackType } from "../../../../tools/constants";

function PictoCard({ typeAttack }) {
  return (
    <div
      className={`w-20 h-28 bg rounded-lg bg-[${attackType[typeAttack]}] flex justify-center items-center`}
    >
      <img
        className="w-14 h-fit"
        src={`src/assets/pokemon_types/${typeAttack}.png`}
        alt={`type ${typeAttack}`}
      />
    </div>
  );
}

PictoCard.propTypes = {
  typeAttack: PropTypes.string.isRequired,
};

export default PictoCard;
