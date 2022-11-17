import PropTypes from "prop-types";
import React, { useState } from "react";
import { bgGradLightGrey } from "../../tools/constants";

function PvBar({ pokemon, directionFromPV }) {
  const { name, stats } = pokemon;
  const [life, setLife] = useState(stats[0].base_stat);

  const widthStatFull = 130;

  const getWidth = (pvFull, pvState) => (pvState * widthStatFull) / pvFull;

  const widthPvState = getWidth(stats[0].base_stat, life);

  return (
    <div
      className={`h-fit w-fit ${bgGradLightGrey} rounded-lg px-3 py-1 flex flex-col justify-center`}
    >
      <p className="w-full text-center">{name}</p>
      <div
        style={{ width: `${widthStatFull}px` }}
        className="h-3 rounded-full bg-customLightGrey-lighter border-[1px] border-white relative z-5 overflow-hidden"
      >
        <div
          style={{ width: `${widthPvState}px` }}
          className={`h-3 bg-[#18D84D] absolute z-6 ${directionFromPV}-0`}
        />
      </div>
      <button
        type="button"
        onClick={() => (life - 15 > 0 ? setLife(life - 15) : setLife(0))}
        className="mx-auto mt-2 w-16 bg-customLightRed text-white"
      >
        Hit test
      </button>
    </div>
  );
}

PvBar.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  directionFromPV: PropTypes.string.isRequired,
};

export default PvBar;
