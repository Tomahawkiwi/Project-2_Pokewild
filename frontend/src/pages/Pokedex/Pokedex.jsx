import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import setBackgroundType from "../../tools/setBackgroundType";
import setFirstLogo from "../../tools/setFirstLogo";
import setSecondLogo from "../../tools/setSecondLogo";
import setNumber from "../../tools/setNumber";
import { bgGradLightGrey } from "../../tools/constants";

function Pokedex({ url }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  if (!pokemon) return <div className="hidden">Loading ...</div>;

  return (
    <div
      className={`${bgGradLightGrey} rounded-xl shadow-md w-40 h-44 md:w-full lg:w-4/5`}
    >
      <div className="flex justify-between">
        <div className="font-Silkscreen text-sm">{pokemon.name}</div>
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
      <div className="flex justify-end font-Rajdhani text-sm mr-2 mb-1">
        {setNumber(pokemon)}
      </div>
    </div>
  );
}

Pokedex.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Pokedex;
