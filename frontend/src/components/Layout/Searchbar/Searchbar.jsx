import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchbarSelect() {
  const [value, setValue] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemonData = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    setAllPokemons(data.results);
  };

  useEffect(() => {
    getAllPokemonData();
  }, []);

  return (
    <div className="relative  ">
      <input
        placeholder="Search a pokemon..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded-xl z-20 h-16 relative w-full text-customDarkGrey bg-white pl-10"
      />
      <div
        className={`absolute rounded-md flex flex-col overflow-y-auto max-h-[500px] top-20 bg-white text-customDarkGrey w-full ${
          value &&
          allPokemons.filter((item) => item.name.includes(value)).length !==
            0 &&
          "py-2"
        }`}
      >
        {value &&
          allPokemons
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((item) => item.name.startsWith(value))
            .map((item, index) => (
              <Link
                className="hover:bg-blue-600 w-full pl-10"
                key={item.name}
                to={`/pokedex/${index + 1}`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
      </div>
    </div>
  );
}
