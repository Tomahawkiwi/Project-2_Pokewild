import axios from "axios";
import React, { useEffect, useState } from "react";

const getAllPokemonData = async () => {
  const result = await Promise.all([
    axios.get("https://pokeapi.co/api/v2/pokemon/charizard"),
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu"),
    axios.get("https://pokeapi.co/api/v2/pokemon/blastoise"),
  ]);
  return result;
};

function Flames() {
  const [pokegif, setPokegif] = useState([]);

  useEffect(() => {
    getAllPokemonData().then((res) => setPokegif(res));
  }, []);

  return (
    <div>
      <div className="flex w-full justify-around">
        {pokegif.map((item) => (
          <img
            key={item.data.id}
            className="py-5 sm: w-20 lg:w-36"
            src={
              item.data.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt="poke gif"
          />
        ))}
      </div>
      <div>
        <img
          className="w-full"
          src="/src/assets/img-home/fire.png"
          alt="background flames"
        />
      </div>
    </div>
  );
}

export default Flames;
