import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "../../hooks/useWindowSize";

function Stats({ statValue, colorBg, typeStatMax, textStat, clickedPokemon }) {
  const screenWidth = useWindowSize().width;
  const getHeightResponsive = (screen) => {
    if (screenWidth < screen) {
      return 65;
    }
    return 100;
  };

  const heightStatFull = getHeightResponsive(768);

  const getHeight = (statFull, statChosen) =>
    (statChosen * heightStatFull) / statFull;

  const heightPvChosen = getHeight(typeStatMax, statValue);

  return (
    <div className="m-[2px] flex flex-col items-center xs:mx-[6px]">
      <div
        style={{ height: `${heightStatFull}px` }}
        className="w-2 md:w-3 h-full rounded-full bg-customLightGrey-lighter relative z-0 overflow-hidden"
      >
        <motion.div
          key={clickedPokemon.name}
          initial={{ opacity: 1, y: +65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0, ease: [0, 0.71, 0.2, 1.01] }}
          style={{ height: `${heightPvChosen}px` }}
          className={`w-2 md:w-3 rounded-b-full rounded-t-0 ${colorBg} absolute bottom-0`}
        />
      </div>
      <p className="w-4 mt-1 text-center text-[10px] leading-3">{textStat}</p>
    </div>
  );
}

Stats.propTypes = {
  statValue: PropTypes.number.isRequired,
  colorBg: PropTypes.string.isRequired,
  typeStatMax: PropTypes.number.isRequired,
  textStat: PropTypes.string.isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Stats;
