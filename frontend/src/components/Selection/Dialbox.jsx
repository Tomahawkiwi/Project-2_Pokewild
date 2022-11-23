import PropTypes, { object, string } from "prop-types";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { bgGradLightGrey } from "../../tools/constants";
import AttackCard from "../Combat/AttackButtons/CardPart/AttackCard";

function Dialbox({
  dialbox,
  setDialbox,
  isChoiceValidated,
  setIsFightBegin,
  isFightBegin,
  isCardPokemon,
  isCardOpponent,
  cardType,
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
      count(() => {
        setDialbox("Let the fight begin !");
      });
    }
  };

  return (
    <div
      className={`h-36 ${bgGradLightGrey} dark:bg-[#AFAFAF] dark:text-black flex justify-center items-center align-middle
      border-b-[3px] border-customDarkGrey ${isFightBegin ? "mb-0" : "mb-6"} ${
        isCardOpponent || isCardPokemon ? "px-[3.5%]" : "px-[10%]"
      } sm:h-48`}
    >
      <motion.div
        key={dialbox}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-9/12 font-Silkscreen text-center ${
          isBiggerText ? "text-6xl" : "text-lg sm:text-2xl"
        } p-[3%] max-w-[420px]`}
      >
        <div>{dialbox}</div>
      </motion.div>
      {isFightBegin && (
        <div className="w-[70px] sm:w-[100px] h-[100px] sm:h-[135px] border-[0.5px] border-customDarkGrey rounded-2xl ml-4">
          {isCardPokemon && (
            <AttackCard
              typeAttack={cardType.type.name}
              isCard={isCardPokemon}
              initialX={-300}
              initialY={300}
            />
          )}
          {isCardOpponent && (
            <AttackCard
              typeAttack={cardType.type.name}
              isCard={isCardOpponent}
              initialX={-20}
              initialY={300}
            />
          )}
        </div>
      )}

      {!isFightBegin && (
        <button
          type="button"
          onClick={() => handleBegin()}
          className={`${
            isChoiceValidated
              ? "bg-customLightRed dark:bg-gradient-to-br dark:from-customDarkRed dark:to-customDarkRed-endGrad hover:scale-110 transition-colors duration-300 ease-in-out"
              : "bg-customDarkGrey-lighter cursor-not-allowed"
          } text-white w-36 ml-5 p-3 h-fit rounded-2xl shadow-custom font-Silkscreen text-lg sm:py-2`}
        >
          FIGHT NOW
        </button>
      )}
    </div>
  );
}

Dialbox.propTypes = {
  dialbox: PropTypes.oneOfType([string, object]).isRequired,
  setDialbox: PropTypes.func.isRequired,
  isChoiceValidated: PropTypes.bool.isRequired,
  setIsFightBegin: PropTypes.func.isRequired,
  isFightBegin: PropTypes.bool.isRequired,
  isCardPokemon: PropTypes.bool.isRequired,
  isCardOpponent: PropTypes.bool.isRequired,
  cardType: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dialbox;
