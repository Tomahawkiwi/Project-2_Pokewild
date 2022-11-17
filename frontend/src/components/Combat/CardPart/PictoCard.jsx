import PropTypes from "prop-types";
import React from "react";
import { attackType } from "../../../tools/constants";

function PictoCard({ attack }) {
  return (
    <div
      className={`w-20 h-28 bg rounded-lg bg-[${attackType[attack]}] flex justify-center items-center`}
    >
      <img
        className="w-14 h-fit"
        src={`src/assets/pokemon_types/${attack}.png`}
        alt={`type ${attack}`}
      />
    </div>
  );
}

PictoCard.propTypes = {
  attack: PropTypes.string.isRequired,
};

export default PictoCard;
