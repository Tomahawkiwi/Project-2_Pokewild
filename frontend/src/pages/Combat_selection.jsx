import React, { useEffect, useState } from "react";
import axios from "axios";
import DialBox from "../components/Selection/DialBox";
import FocusGamer from "../components/Selection/FocusGamer";
import SelectPokémon from "../components/Selection/SelectPokémons";
import SelectArena from "../components/Selection/SelectArena";
import FocusOpponent from "../components/Selection/FocusOpponent";

function CombatSelection() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemon = async (index, controller) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`, {
        signal: controller.signal,
      })
      .then((res) => setAllData((state) => [...state, res.data]));
  };

  const getMultiPokemons = async (controller) => {
    setIsLoading(true);
    await getPokemon(3, controller);
    await getPokemon(6, controller);
    await getPokemon(9, controller);
    await getPokemon(25, controller);
    await getPokemon(130, controller);
    await getPokemon(144, controller);
    await getPokemon(145, controller);
    await getPokemon(146, controller);
    await getPokemon(149, controller);
    await getPokemon(150, controller);
    setIsLoading(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    getMultiPokemons(controller);

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading) return <div>Loading ...</div>;

  return (
    <div className="bg-customLightGrey w-full">
      <DialBox />
      {!isLoading && <FocusGamer allStats={allData} />}
      {!isLoading && <SelectPokémon allData={allData} />}
      {!isLoading && <FocusOpponent />}
      <SelectArena />
    </div>
  );
}

export default CombatSelection;
