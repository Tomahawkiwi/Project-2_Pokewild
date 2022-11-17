import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import PvBar from "./PvBar";

function LiveScreen({ clickedPokemon, clickedOpponent, clickedArena }) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={clickedArena.path}
        alt={clickedArena.alt}
        className="object-cover w-full z-2"
      />
      <div className="h-0">
        <motion.img
          key={clickedPokemon.name}
          initial={{ opacity: 1, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
          src={
            clickedPokemon.sprites.versions["generation-v"]["black-white"]
              .animated.back_default
          }
          alt={clickedPokemon.name}
          className={`absolute ${
            clickedPokemon.name === "moltres" && "scale-125"
          } ${
            clickedPokemon.name === "pikachu" ||
            clickedPokemon.name === "mew" ||
            clickedPokemon.name === "articuno"
              ? "w-[33%]"
              : "w-3/6"
          } z-3 bottom-[-10%] right-[55%]`}
        />
        <motion.img
          key={clickedOpponent.name}
          initial={{ opacity: 1, x: +250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 3.5, ease: [0, 0.71, 0.2, 1.01] }}
          src={
            clickedOpponent.sprites.versions["generation-v"]["black-white"]
              .animated.front_default
          }
          alt={clickedOpponent.name}
          className={`absolute ${
            clickedOpponent.name === "moltres" && "scale-125"
          } ${
            clickedOpponent.name === "pikachu" ||
            clickedOpponent.name === "mew" ||
            clickedOpponent.name === "articuno"
              ? "w-[23%]"
              : "w-2/6"
          } z-3 bottom-[40%] left-[60%]`}
        />
      </div>
      <div className="absolute top-[5%] left-[5%] z-4">
        <PvBar pokemon={clickedPokemon} directionFromPV="left" />
      </div>
    </div>
  );
}

LiveScreen.propTypes = {
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LiveScreen;
