import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import setBackgroundType from "../../../tools/setBackgroundType";
import setFirstLogo from "../../../tools/setFirstLogo";
import setSecondLogo from "../../../tools/setSecondLogo";
import setNumber from "../../../tools/setNumber";
import Picture from "../Picture";
import FocusStats from "./FocusStats";
import statMax from "../../../tools/stats";
import LH from "../../../assets/img-pokedex/logo-height.png";
import LW from "../../../assets/img-pokedex/logo-weight.png";
import { bgGradLightGrey } from "../../../tools/constants";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, []);

  if (!pokemon) return <div>Loading ...</div>;

  return (
    <div>
      <Picture />
      <div>
        <div>
          <div className="bg-white flex flex-col items-center font-Silkscreen w-3/4 rounded-3xl my-20 mx-auto">
            <div>
              <img
                className="h-50"
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt="Pokemon"
              />
              <div className="text-xl"> {pokemon.name}</div>
              <div className="text-sm mr-2 mb-1">{setNumber(pokemon)}</div>
            </div>
            <div>
              <div className={`flex px-10 ${setBackgroundType(pokemon)}`}>
                <div className="h-14 rounded-full">{setFirstLogo(pokemon)}</div>
                <div className="h-14 rounded-full">
                  {setSecondLogo(pokemon)}
                </div>
              </div>
              <div
                className={`${bgGradLightGrey} font-Rajdhani w-fit rounded-xl mx-auto`}
              >
                <div className="w-fit flex items-center justify-between my-10 mx-3">
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
              <div className="flex text-xl justify-around items-center">
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
      </div>
    </div>
  );
}

export default PokemonPage;
