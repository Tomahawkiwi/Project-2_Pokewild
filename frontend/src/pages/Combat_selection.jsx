import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectPokemons from "../components/Selection/SelectPokemons";
import { choiceByDefault, opponentByDefault } from "../tools/constants";
import HeaderDial from "../components/Selection/HeaderDial";
import Combat from "../components/Combat/Combat";

function CombatSelection() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clickedPokemon, setClickedPokemon] = useState(choiceByDefault);
  const [isChoiceValidated, setIsChoiceValidated] = useState(false);
  const [clickedOpponent, setClickedOpponent] = useState(opponentByDefault);
  const [clickedArena, setClickedArena] = useState({});
  const [dialbox, setDialbox] = useState("CHOOSE YOUR POKEMON");
  const [isFightBegin, setIsFightBegin] = useState(false);
  const [isMyTurn, setIsMyTurn] = useState(false);
  const [isCardPokemon, setIsCardPokemon] = useState(false);
  const [isCardOpponent, setIsCardOpponent] = useState(false);
  const [cardType, setCardType] = useState({});

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
    <div className="bg-customLightGrey dark:text-white dark:bg-gradient-to-br dark:from-customDarkGrey dark:to-customDarkGrey-endGrad w-full min-h-screen pb-10">
      <HeaderDial
        dialbox={dialbox}
        setDialbox={setDialbox}
        isChoiceValidated={isChoiceValidated}
        setIsFightBegin={setIsFightBegin}
        isFightBegin={isFightBegin}
        isCardPokemon={isCardPokemon}
        isCardOpponent={isCardOpponent}
        cardType={cardType}
      />
      {!isLoading &&
        (!isFightBegin ? (
          <div className="w-10/12 mx-auto md:flex">
            <SelectPokemons
              allData={allData}
              clickedPokemon={clickedPokemon}
              setClickedPokemon={setClickedPokemon}
              setIsChoiceValidated={setIsChoiceValidated}
              isChoiceValidated={isChoiceValidated}
              clickedOpponent={clickedOpponent}
              setClickedOpponent={setClickedOpponent}
              clickedArena={clickedArena}
              setClickedArena={setClickedArena}
              setDialbox={setDialbox}
            />
          </div>
        ) : (
          <Combat
            clickedPokemon={clickedPokemon}
            clickedOpponent={clickedOpponent}
            clickedArena={clickedArena}
            isMyTurn={isMyTurn}
            setIsMyTurn={setIsMyTurn}
            setDialbox={setDialbox}
            isCardPokemon={isCardPokemon}
            setIsCardPokemon={setIsCardPokemon}
            isCardOpponent={isCardOpponent}
            setIsCardOpponent={setIsCardOpponent}
            setCardType={setCardType}
          />
        ))}
    </div>
  );
}

export default CombatSelection;
