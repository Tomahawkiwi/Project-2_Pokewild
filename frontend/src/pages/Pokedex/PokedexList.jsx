import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokedex from "./Pokedex";
import Picture from "./Picture";

function PokedexList() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.data)
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  if (!pokemon) return <div>Loading pokemon ...</div>;

  return (
    <div className="w-full bg-[#F0F0F0]">
      <Picture />
      <div>
        <div className="grid grid-cols-2 gap-5 justify-items-center mx-3 my-5 md:grid-cols-4 md:gap-6 lg:w-3/4 lg:gap-y-10">
          {pokemon.map((item) => (
            <Pokedex key={item.name} name={item.name} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokedexList;
