import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectPokemons from "../components/Selection/SelectPokemons";
import { choiceByDefault, opponentByDefault } from "../tools/constants";
import SelectionArena from "../components/Selection/SelectionArena";
import FocusOpponent from "../components/Selection/FocusOpponent";

function CombatSelection() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedPokemon, setClickedPokemon] = useState(choiceByDefault);
  const [isChoiceValidated, setIsChoiceValidated] = useState(false);
  const [clickedOpponent, setClickedOpponent] = useState(opponentByDefault);

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
    await getPokemon(151, controller);
    setIsLoading(false);
  };

  useEffect(() => {
    const controller = new AbortController();
    getMultiPokemons(controller);

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading)
    return (
      <div className="min-h-screen flex flex-col justify-center">
        <div>Loading ...</div>
      </div>
    );

  return (
    <div className="bg-customLightGrey w-full min-h-screen">
      {!isLoading && (
        <div className="w-10/12 mx-auto">
          <SelectPokemons
            allData={allData}
            clickedPokemon={clickedPokemon}
            setClickedPokemon={setClickedPokemon}
            setIsChoiceValidated={setIsChoiceValidated}
            isChoiceValidated={isChoiceValidated}
          />
          <SelectionArena />
          <FocusOpponent
            allData={allData}
            isChoiceValidated={isChoiceValidated}
            clickedOpponent={clickedOpponent}
            setClickedOpponent={setClickedOpponent}
          />
        </div>
      )}
    </div>
  );
}

export default CombatSelection;
