/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import setBackgroundType from "../../tools/setBackgroundType";
import setFirstLogo from "../../tools/setFirstLogo";
import setSecondLogo from "../../tools/setSecondLogo";
import setNumber from "../../tools/setNumber";
import setAvailableToFight from "../../tools/setAvailableToFight";
import { bgGradLightGrey } from "../../tools/constants";

function Pokedex({ pokemon }) {
  const isAvailableToFight = setAvailableToFight(pokemon);

  return (
    <div
      className={`${bgGradLightGrey} rounded-xl shadow-md w-40 h-44 mx-2 my-3 sm:mx-5 sm:my-5`}
    >
      <div className="flex justify-between">
        <div className="w-full rounded-tr-lg">
          <div className="font-Silkscreen text-sm pl-1">{pokemon.name}</div>
        </div>
        <div className={`flex rounded-tr-lg ${setBackgroundType(pokemon)}`}>
          <div>{setFirstLogo(pokemon)}</div>
          <div>{setSecondLogo(pokemon)}</div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="h-32"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="Pokemon"
        />
      </div>
      <div className="flex justify-between pl-2">
        <div className="h-5 w-5">
          {isAvailableToFight && (
            <img
              className=""
              src="src/assets/fight_mode/picto_fight.png"
              alt="available to fight"
            />
          )}
        </div>
        <div className="flex justify-end font-Rajdhani text-sm mr-2 mb-1">
          {setNumber(pokemon)}
        </div>
      </div>
    </div>
  );
}

Pokedex.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pokedex;
