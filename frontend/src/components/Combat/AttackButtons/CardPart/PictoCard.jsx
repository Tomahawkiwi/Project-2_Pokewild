import PropTypes from "prop-types";
import React from "react";
import { attackType } from "../../../../tools/constants";

function PictoCard({ attackChosen }) {
  const { type } = attackChosen;

  return (
    <div
      className={`w-20 h-28 bg rounded-lg bg-[${attackType[type]}] flex justify-center items-center`}
    >
      <img
        className="w-14 h-fit"
        src={`src/assets/pokemon_types/${type}.png`}
        alt={`type ${type}`}
      />
    </div>
  );
}

PictoCard.propTypes = {
  attackChosen: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PictoCard;
