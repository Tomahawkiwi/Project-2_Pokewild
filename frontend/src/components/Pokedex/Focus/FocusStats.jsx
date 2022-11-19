import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";

function FocusStats({
  statValue,
  colorBg,
  typeStatMax,
  textStat,
  clickedPokemon,
}) {
  const heightStatFull = 200;

  const getHeight = (statFull, statChosen) =>
    (statChosen * heightStatFull) / statFull;

  const heightPvChosen = getHeight(typeStatMax, statValue);

  return (
    <div className="flex flex-col items-center py-2 mx-2 sm:mx-4 md:mx-[3%]">
      <div
        style={{ height: `${heightStatFull}px` }}
        className="w-6 rounded-full bg-customLightGrey-lighter relative z-0 overflow-hidden"
      >
        <motion.div
          key={clickedPokemon.name}
          initial={{ opacity: 1, y: +65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
          style={{ height: `${heightPvChosen}px` }}
          className={`w-6 rounded-b-full rounded-t-0 ${colorBg} absolute bottom-0`}
        >
          <div className="text-center text-white">{statValue}</div>
        </motion.div>
      </div>
      <p className="w-4 mt-5 text-center text-[12px] leading-3 sm:w-10">
        {textStat}
      </p>
    </div>
  );
}

FocusStats.propTypes = {
  statValue: PropTypes.number.isRequired,
  colorBg: PropTypes.string.isRequired,
  typeStatMax: PropTypes.number.isRequired,
  textStat: PropTypes.string.isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FocusStats;
