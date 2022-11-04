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
        <div className="flex flex-row flex-wrap justify-center">
          {pokemon.map((item) => (
            <Pokedex key={item.name} name={item.name} url={item.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokedexList;
