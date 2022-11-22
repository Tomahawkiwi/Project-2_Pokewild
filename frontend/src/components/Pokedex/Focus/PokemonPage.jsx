import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import setNumber from "../../../tools/setNumber";
import Picture from "../Picture";
import FocusStats from "./FocusStats";
import statMax from "../../../tools/stats";
import LH from "../../../assets/img-pokedex/logo-height.png";
import LW from "../../../assets/img-pokedex/logo-weight.png";
import { bgGradLightGrey } from "../../../tools/constants";
import setFirstLogoFocus from "./setFirstLogoFocus";
import setSecondLogoFocus from "./setSecondLogoFocus";
import Pokeball from "../../../assets/navbar/poke-close-x2.png";
import setAvailableToFight from "../../../tools/setAvailableToFight";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  const getPokemonById = (pokemonid) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
      .then((res) => setPokemon(res.data));
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  if (!pokemon) return <div>Loading ...</div>;

  return (
    <div>
      <Picture />
      <div className="bg-white flex flex-col font-Silkscreen w-3/4 rounded-3xl my-10 mx-auto p-2">
        <div className="grid grid-cols-3 text-base font-Rajdhani">
          {id !== "1" ? (
            <Link
              className={`flex items-center justify-center h-1/2 ${bgGradLightGrey} border rounded-3xl`}
              to={`/pokedex/${+id - 1}`}
            >
              Previous
            </Link>
          ) : (
            <div className="invisible">Previous</div>
          )}
          <img className="mx-auto h-1/2" src={Pokeball} alt="pokeball" />
          {id !== "151" && (
            <Link
              className={`flex items-center justify-center h-1/2 ${bgGradLightGrey} border rounded-3xl`}
              to={`/pokedex/${+id + 1}`}
            >
              Next
            </Link>
          )}
        </div>
        <div className="flex justify-center ml-72 pt-3">
          <div className="w-10">
            {setAvailableToFight(pokemon) && (
              <img src="/fight_mode/picto_fight.png" alt="fightmode" />
            )}
          </div>
        </div>
        <div>
          <img
            className="h-64 lg:h-80 mx-auto"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Pokemon front"
          />
          <div className="text-xl text-center"> {pokemon.name}</div>
          <div className="text-center text-lg mr-2 mb-1">
            {setNumber(pokemon)}
          </div>
          <div className="flex flex-col items-center pt-5 mx-14 md:flex-row md:justify-center">
            <div className="relative flex text-sm items-center w-40 justify-center mb-3 md:mb-0">
              <div className="absolute left-1/2 transform -translate-x-6 bg-black w-fit h-6 pl-5 pr-3 flex justify-center items-center rounded-full text-white z-1">
                {pokemon.types["0"].type.name}
              </div>
              <div className="mr-[60px] z-0">{setFirstLogoFocus(pokemon)}</div>
            </div>
            {pokemon.types.length === 2 && (
              <div className="relative flex text-sm items-center w-40 justify-center">
                <div className="absolute left-1/2 transform -translate-x-6 bg-black w-fit h-6 pl-5 pr-3 flex justify-center items-center rounded-full text-white z-1">
                  {pokemon.types["1"].type.name}
                </div>
                <div className="mr-[60px] z-0">
                  {setSecondLogoFocus(pokemon)}
                </div>
              </div>
            )}
          </div>
          <div className="flex text-base justify-around items-center pt-8">
            <div>
              <img className="h-8" src={LH} alt="height" />
              {pokemon.height / 10} m
            </div>
            <div>
              <img className="h-8" src={LW} alt="weight" />
              {pokemon.weight / 10} kg
            </div>
          </div>
        </div>
        <div
          className={`${bgGradLightGrey} font-Rajdhani rounded-xl px-2 mt-10 w-11/12 mx-auto mb-5`}
        >
          <h1 className="flex justify-center text-xl py-2 mb-3">BASE STAT</h1>
          <div className="flex items-start justify-center mx-3 lg:mx-8">
            <FocusStats
              statValue={pokemon.stats[0].base_stat}
              typeStatMax={statMax.pv}
              textStat={statMax.namePv}
              colorBg="bg-[#D53A44]"
              clickedPokemon={pokemon}
            />
            <FocusStats
              statValue={pokemon.stats[1].base_stat}
              typeStatMax={statMax.attack}
              textStat={statMax.nameAttack}
              colorBg="bg-[#FDA728]"
              clickedPokemon={pokemon}
            />
            <FocusStats
              statValue={pokemon.stats[2].base_stat}
              typeStatMax={statMax.defense}
              textStat={statMax.nameDefense}
              colorBg="bg-[#0194EA]"
              clickedPokemon={pokemon}
            />
            <FocusStats
              statValue={pokemon.stats[3].base_stat}
              typeStatMax={statMax.attackSp}
              textStat={statMax.nameAttackSp}
              colorBg="bg-[#F5682B]"
              clickedPokemon={pokemon}
            />
            <FocusStats
              statValue={pokemon.stats[4].base_stat}
              typeStatMax={statMax.defenseSp}
              textStat={statMax.nameDefenseSp}
              colorBg="bg-[#8FB0C4]"
              clickedPokemon={pokemon}
            />
            <FocusStats
              statValue={pokemon.stats[5].base_stat}
              typeStatMax={statMax.speed}
              textStat={statMax.nameSpeed}
              colorBg="bg-[#6319AD]"
              clickedPokemon={pokemon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
