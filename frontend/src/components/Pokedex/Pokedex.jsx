import React from "react";
import PropTypes from "prop-types";
import setBackgroundType from "../../tools/setBackgroundType";
import setBackgroundName from "../../tools/setBackgroundName";
import setFirstLogo from "../../tools/setFirstLogo";
import setSecondLogo from "../../tools/setSecondLogo";
import setNumber from "../../tools/setNumber";
import setAvailableToFight from "../../tools/setAvailableToFight";
import { bgGradLightGrey } from "../../tools/constants";

function Pokedex({ pokemon }) {
  return (
    <div
      className={`${bgGradLightGrey} rounded-xl shadow-md w-40 h-44 mx-2 my-3 sm:mx-5 sm:my-5`}
    >
      <div className="flex justify-between">
        <div className="w-full rounded-tr-lg">
          <div className="font-Silkscreen text-sm pl-1">{pokemon.name}</div>
        </div>
        <div className={`flex rounded-tr-lg ${setBackgroundType(pokemon)}`}>
          <div className="">{setFirstLogo(pokemon)}</div>
          <div className="">{setSecondLogo(pokemon)}</div>
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
        <div className="h-5 w-5">{setAvailableToFight(pokemon)}</div>
        <div className="flex justify-end font-Rajdhani text-sm mr-2 mb-1">
          {setNumber(pokemon)}
        </div>
      </div>
    </div>
  );
}

Pokedex.propTypes = {
  pokemon: PropTypes.string.isRequired,
};

export default Pokedex;
