/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Pokedex from "./Pokedex";
import Picture from "./Picture";
import Filters from "./Filters/Filter";
import Sorting from "./Sorting/Sorting";
import { bgGradLightRed } from "../../tools/constants";

const getAllPokemonData = async () => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=151"
  );

  const result = await Promise.all(
    data.results.map(async (item) => (await axios.get(item.url)).data)
  );

  return result;
};

function PokedexList() {
  const [pokemon, setPokemon] = useState();
  const [filter, setFilter] = useState([]);
  const [sortByName, setSortByName] = useState(false);

  useEffect(() => {
    getAllPokemonData().then((res) => setPokemon(res));
  }, []);

  const handleCheckbox = (type) => {
    const index = filter.indexOf(type);

    if (index > -1) {
      setFilter((state) => state.filter((item) => item !== type));
    } else {
      setFilter((state) => [...state, type]);
    }
  };

  const handleSortingName = (e) => {
    setSortByName(e.target.checked);
  };

  const pokemonList = useCallback(
    (item) => {
      if (filter.length) {
        return (
          item.types.filter((type) => filter.includes(type.type.name)).length >
          0
        );
      }
      return () => true;
    },
    [filter]
  );

  const sortingNameHandler = (a, b) => {
    if (sortByName) {
      return a.name.localeCompare(b.name);
    }
    return -1;
  };

  if (!pokemon) return <div>Loading pokemon ...</div>;

  return (
    <div className="w-full bg-[#F0F0F0]">
      <Picture />
      <div className={`${bgGradLightRed} flex justify-between`}>
        <Filters handleCheckbox={handleCheckbox} filter={filter} />
        <Sorting
          handleSortingName={handleSortingName}
          sortByName={sortByName}
        />
      </div>
      <div>
        <div className="flex flex-row flex-wrap justify-center">
          {pokemon
            .filter(pokemonList)
            .sort(sortingNameHandler)
            .map((item) => (
              <Pokedex key={item.name} pokemon={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PokedexList;
