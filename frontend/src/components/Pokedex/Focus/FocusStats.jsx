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
    <div className="flex flex-col items-center">
      <div
        style={{ height: `${heightStatFull}px` }}
        className="w-10 rounded-full bg-customLightGrey-lighter relative z-0 overflow-hidden"
      >
        <motion.div
          key={clickedPokemon.name}
          initial={{ opacity: 1, y: +65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
          style={{ height: `${heightPvChosen}px` }}
          className={`w-10 rounded-b-full rounded-t-0 ${colorBg} absolute bottom-0`}
        >
          <div className="text-center">{statValue}</div>
        </motion.div>
      </div>
      <p className="w-4 mt-8 text-center text-[14px] leading-3">{textStat}</p>
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
