import PropTypes from "prop-types";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PvBar from "./PvBar";
import ArrowUnderPv from "./ArrowUnderPv";

function LiveScreen({
  clickedPokemon,
  lifePokemon,
  setLifePokemon,
  clickedOpponent,
  lifeOpponent,
  setLifeOpponent,
  clickedArena,
}) {
  return (
    <div className="relative overflow-hidden z-1 mt-44">
      <img
        src={clickedArena.path}
        alt={clickedArena.alt}
        className="object-cover w-full z-2"
      />
      <div className="h-0 w-full">
        <AnimatePresence>
          {lifePokemon !== 0 && (
            <motion.div
              key={clickedPokemon.name}
              initial={{ opacity: 1, x: -250, y: 0 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 2,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                },
              }}
              exit={{
                opacity: 0,
                y: +100,
                transition: {
                  duration: 1,
                  delay: 3.5,
                  ease: "linear",
                },
              }}
              className={`absolute ${
                clickedPokemon.name === "moltres" && "scale-125"
              } ${
                clickedPokemon.name === "pikachu" ||
                clickedPokemon.name === "mew" ||
                clickedPokemon.name === "articuno"
                  ? "w-[33%]"
                  : "w-3/6"
              } z-3 bottom-[-10%] right-[55%]`}
            >
              <motion.img
                key={lifePokemon}
                animate={{
                  opacity: [
                    1, 0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1,
                    0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1,
                  ],
                  duration: 2,
                }}
                src={
                  clickedPokemon.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                }
                alt={clickedPokemon.name}
                className="w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {lifeOpponent !== 0 && (
            <motion.div
              key={clickedOpponent.name}
              initial={{ opacity: 1, x: +250 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                },
              }}
              exit={{
                opacity: 0,
                y: +100,
                transition: {
                  duration: 1,
                  delay: 3.5,
                  ease: "linear",
                },
              }}
              className={`absolute ${
                clickedOpponent.name === "moltres" && "scale-125"
              } ${
                clickedOpponent.name === "pikachu" ||
                clickedOpponent.name === "mew" ||
                clickedOpponent.name === "articuno"
                  ? "w-[23%]"
                  : "w-2/6"
              } z-3 bottom-[40%] left-[60%]`}
            >
              <motion.img
                key={lifeOpponent}
                animate={{
                  opacity: [
                    1, 0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1,
                    0.25, 1, 0.25, 1, 0.25, 1, 0.25, 1,
                  ],
                  duration: 2,
                }}
                src={
                  clickedOpponent.sprites.versions["generation-v"][
                    "black-white"
                  ].animated.front_default
                }
                alt={clickedOpponent.name}
                className="w-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-[13%] right-[11%] z-3 scale-x-[-1.1] scale-y-[1.1]">
        <ArrowUnderPv />
      </div>
      <div className="absolute bottom-[8%] right-[5%] z-4">
        <PvBar
          pokemon={clickedPokemon}
          life={lifePokemon}
          setLife={setLifePokemon}
        />
      </div>
      <div className="absolute top-[22%] left-[11%] z-3 scale-110">
        <ArrowUnderPv />
      </div>
      <div className="absolute top-[8%] left-[5%] z-4">
        <PvBar
          pokemon={clickedOpponent}
          life={lifeOpponent}
          setLife={setLifeOpponent}
        />
      </div>
    </div>
  );
}

LiveScreen.propTypes = {
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  lifePokemon: PropTypes.number.isRequired,
  setLifePokemon: PropTypes.func.isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  lifeOpponent: PropTypes.number.isRequired,
  setLifeOpponent: PropTypes.func.isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LiveScreen;
