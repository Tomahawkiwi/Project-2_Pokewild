import PropTypes from "prop-types";
import React from "react";

function Stats({ statValue, colorBg, typeStatMax, textStat }) {
  const heightStatFull = 65;

  function getHeight(statFull, statChosen) {
    return (statChosen * heightStatFull) / statFull;
  }
  const heightPvChosen = getHeight(typeStatMax, statValue);

  return (
    <div className="m-[2px] flex flex-col items-center">
      <div
        style={{ height: `${heightStatFull}px` }}
        className="w-2 h-full rounded-full bg-customLightGrey-lighter relative"
      >
        <div
          style={{ height: `${heightPvChosen}px` }}
          className={`w-2 rounded-b-full rounded-t-0 ${colorBg} absolute bottom-0`}
        />
      </div>
      <p className="w-4 mt-1 text-center text-[10px] leading-3">{textStat}</p>
    </div>
  );
}

Stats.propTypes = {
  statValue: PropTypes.number.isRequired,
  colorBg: PropTypes.number.isRequired,
  typeStatMax: PropTypes.string.isRequired,
  textStat: PropTypes.string.isRequired,
};

export default Stats;
