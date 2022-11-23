import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import { bgGradLightRed } from "../../../tools/constants";

function EndScreen({ lifeOpponent, lifePokemon }) {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: "-50%", y: "-50%" }}
      animate={{
        opacity: 1,
        x: "-50%",
        y: "-50%",
        transition: {
          duration: 0.75,
          delay: 2,
        },
      }}
      className={`h-2/3 w-screen z-50 flex justify-between items-center ${bgGradLightRed} absolute top-1/2 left-1/2`}
    >
      <img
        className="w-1/5 h-fit max-w-[160px]"
        src="/src/assets/combat-selection/trees.png"
        alt="trees 1"
      />
      <motion.img
        initial={{ opacity: 1, scale: 0.2 }}
        animate={{
          opacity: 0.2,
          scale: 1,
          transition: {
            duration: 0.75,
            delay: 1,
          },
        }}
        className="w-1/3 h-fit z-10 max-w-[195px]"
        src="/src/assets/combat-selection/Pokeball-open.png"
        alt="Pokeball opened"
      />
      <div className="absolute w-full h-full flex items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0,
            },
          }}
          className="z-20 w-full"
        >
          {lifeOpponent === 0 && (
            <div className="flex flex-col justify-center">
              <p className="text-xl text-center font-Silkscreen text-white md:text-4xl">
                Congratulations,
                <br />
                you win !
              </p>
              <button
                type="button"
                onClick={refreshPage}
                className="w-32 h-10 bg-customLightGrey text-lg rounded-xl mt-5 mx-auto"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
          {lifePokemon === 0 && (
            <div className="flex flex-col justify-center">
              <p className=" text-xl text-center font-Silkscreen text-white md:text-4xl">
                You lose...
                <br />
                Try again !
              </p>
              <button
                type="button"
                onClick={refreshPage}
                className="w-32 h-10 bg-customLightGrey text-lg rounded-xl mt-5 mx-auto"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </motion.div>
      </div>
      <img
        className="w-1/5 h-fit max-w-[160px]"
        src="/src/assets/combat-selection/trees.png"
        alt="trees 2"
      />
    </motion.div>
  );
}

EndScreen.propTypes = {
  lifePokemon: PropTypes.number.isRequired,
  lifeOpponent: PropTypes.number.isRequired,
};

export default EndScreen;
