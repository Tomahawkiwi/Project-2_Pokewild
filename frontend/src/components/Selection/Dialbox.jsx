import PropTypes from "prop-types";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { bgGradLightGrey } from "../../tools/constants";

function Dialbox({
  dialbox,
  setDialbox,
  isChoiceValidated,
  setIsFightBegin,
  isFightBegin,
}) {
  const [isBiggerText, setIsBiggerText] = useState(false);

  const count = (callback) => {
    const number = ["5", "4", "3", "2", "1"];
    setIsFightBegin(true);
    setIsBiggerText(true);
    for (let i = 0; i <= 4; i += 1) {
      setTimeout(() => {
        const index = i;
        setDialbox(number[index]);
        if (i === 4) {
          setTimeout(() => {
            setIsBiggerText(false);
            callback();
          }, 1000);
        }
      }, 1000 * i);
    }
  };

  const handleBegin = () => {
    if (isChoiceValidated) {
      count(() => setDialbox("Let the fight begin !"));
    }
  };

  return (
    <div
      className={`h-32 ${bgGradLightGrey} flex justify-center items-center align-middle px-8 mb-8`}
    >
      <motion.div
        key={dialbox}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`${
          isFightBegin ? "w-11/12" : "w-9/12"
        } font-Silkscreen text-center ${isBiggerText ? "text-6xl" : "text-xl"}`}
      >
        {dialbox}
      </motion.div>
      {!isFightBegin && (
        <button
          type="button"
          onClick={() => handleBegin()}
          className={`${
            isChoiceValidated
              ? "bg-customLightRed hover:scale-110"
              : "bg-customDarkGrey-lighter cursor-no-drop "
          } text-white w-36 ml-5 p-3 h-fit rounded-2xl shadow-custom font-Silkscreen text-lg`}
        >
          FIGHT NOW
        </button>
      )}
    </div>
  );
}

Dialbox.propTypes = {
  dialbox: PropTypes.string.isRequired,
  setDialbox: PropTypes.func.isRequired,
  isChoiceValidated: PropTypes.bool.isRequired,
  setIsFightBegin: PropTypes.func.isRequired,
  isFightBegin: PropTypes.bool.isRequired,
};

export default Dialbox;
