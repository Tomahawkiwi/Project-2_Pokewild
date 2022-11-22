import PropTypes from "prop-types";
import React from "react";
import { bgGradLightGrey } from "../../../tools/constants";

function PvBar({ pokemon, life }) {
  const { name, stats } = pokemon;

  const widthStatFull = 130;

  const getWidth = (pvFull, pvState) => (pvState * widthStatFull) / pvFull;

  const widthPvLeft = getWidth(stats[0].base_stat, life);

  const getBgLife = () => {
    if (widthPvLeft >= widthStatFull / 2) {
      return "bg-[#18D84D]";
    }
    if (widthPvLeft >= widthStatFull / 5) {
      return "bg-orange-400";
    }
    return "bg-customLightRed-endGrad";
  };

  return (
    <div
      className={`h-fit w-fit ${bgGradLightGrey} dark:bg-gradient-to-br dark:from-customDarkGrey dark:to-customDarkGrey-endGrad rounded-lg px-3 py-1 flex flex-col justify-center`}
    >
      <p className="w-full text-center">{name}</p>
      <div
        style={{ width: `${widthStatFull}px` }}
        className="h-2 rounded-full bg-customLightGrey-lighter border-[1px] border-white relative dark:bg-gradient-to-br dark:from-customDarkGrey dark:to-customDarkGrey-endGrad z-5 overflow-hidden"
      >
        <div
          style={{
            width: `${widthPvLeft}px`,
            transition: "all 1s 1.5s ease-in-out",
          }}
          className={`h-2 ${getBgLife()} absolute z-6 left-0`}
        />
      </div>
    </div>
  );
}

PvBar.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  life: PropTypes.number.isRequired,
};

export default PvBar;
