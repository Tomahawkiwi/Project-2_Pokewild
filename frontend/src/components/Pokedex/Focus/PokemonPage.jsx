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
      <div className="bg-white flex flex-col items center font-Silkscreen w-3/4 rounded-3xl my-10 mx-auto">
        <div className="grid grid-cols-3 text-xl font-Rajdhani">
          {id !== "1" && (
            <Link
              className="flex items-center bg-white border border-customLightRed rounded-3xl"
              to={`/pokedex/${+id - 1}`}
            >
              Previous
            </Link>
          )}
          <img className="mx-auto" src={Pokeball} alt="pokeball" />
          {id !== "151" && (
            <Link
              className="flex items-center bg-white border border-customLightRed rounded-3xl"
              to={`/pokedex/${+id + 1}`}
            >
              Next
            </Link>
          )}
        </div>
        <div>
          <img
            className="h-64 my-10 mx-auto lg:h-80"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Pokemon front"
          />
          <div className="text-2xl text-center"> {pokemon.name}</div>
          <div className="text-center text-xl mr-2 mb-1">
            {setNumber(pokemon)}
          </div>
          <div className="flex flex-col items-center justify-center py-4 lg:flex-row">
            <div className="flex text-lg items-center py-2 lg:mx-auto">
              {setFirstLogoFocus(pokemon)}
              <div className="bg-black w-24 h-8 text-center rounded-3xl text-white">
                {pokemon.types["0"].type.name}
              </div>
            </div>
            {pokemon.types.length === 2 && (
              <div className="flex text-lg items-center py-2 lg:mx-auto">
                {setSecondLogoFocus(pokemon)}
                <div className="bg-black w-24 h-8 text-center rounded-3xl text-white">
                  {pokemon.types["1"].type.name}
                </div>
              </div>
            )}
          </div>
          <div
            className={`${bgGradLightGrey} font-Rajdhani rounded-xl mx-3 lg:mx-40`}
          >
            <div className="flex items-center justify-between my-20 mx-1 lg:mx-8">
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
          <div className="flex text-xl justify-around items-center my-20">
            <div>
              <img src={LH} alt="height" />
              {pokemon.height / 10} m
            </div>
            <div>
              <img src={LW} alt="weight" />
              {pokemon.weight / 10} kg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonPage;
