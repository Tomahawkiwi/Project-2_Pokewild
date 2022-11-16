import PropTypes from "prop-types";
import { motion } from "framer-motion";
import React from "react";
import { bgGradLightGrey } from "../../tools/constants";

function Dialbox({ dialbox, setDialbox, isChoiceValidated, setFightBegin }) {
  const handleBegin = () => {
    setFightBegin(true);
    setDialbox("Let the fight begin !");
  };
  return (
    <div
      className={`h-32 ${bgGradLightGrey} flex justify-between items-center px-8 mb-8`}
    >
      <motion.div
        key={dialbox}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-9/12 font-Silkscreen text-center text-xl"
      >
        {dialbox}
      </motion.div>
      <button
        type="button"
        onClick={() => isChoiceValidated && handleBegin()}
        className={`${
          isChoiceValidated
            ? "bg-customLightRed hover:scale-110"
            : "bg-customDarkGrey-lighter cursor-no-drop "
        } text-white w-36 ml-5 p-3 h-fit rounded-2xl shadow-custom font-Silkscreen text-lg`}
      >
        FIGHT NOW
      </button>
    </div>
  );
}

Dialbox.propTypes = {
  dialbox: PropTypes.string.isRequired,
  setDialbox: PropTypes.func.isRequired,
  isChoiceValidated: PropTypes.bool.isRequired,
  setFightBegin: PropTypes.func.isRequired,
};

export default Dialbox;
