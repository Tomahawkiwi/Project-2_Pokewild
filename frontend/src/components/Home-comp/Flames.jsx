import axios from "axios";
import React, { useEffect, useState } from "react";

const getAllPokemonData = async () => {
  const result = await Promise.all([
    axios.get("https://pokeapi.co/api/v2/pokemon/blastoise"),
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu"),
    axios.get("https://pokeapi.co/api/v2/pokemon/charizard"),
  ]);
  return result;
};

function Flames() {
  const [pokegif, setPokegif] = useState([]);

  useEffect(() => {
    getAllPokemonData().then((res) => setPokegif(res));
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img
        className="w-full absolute object-cover "
        src="src/assets/img-home/flames-bg.png"
        alt="flames"
      />

      <div className="flex w-full justify-around">
        {pokegif.map((item) => (
          <img
            className="sm: w-20 lg:w-28"
            src={
              item.data.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt="poke gif"
          />
        ))}
      </div>
    </div>
  );
}

export default Flames;
