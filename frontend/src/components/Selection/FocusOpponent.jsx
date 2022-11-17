import PropTypes from "prop-types";
import React from "react";
import { bgGradLightGrey } from "../../tools/constants";
import statMax from "../../tools/stats";
import Stats from "./Stats";

function FocusOpponent({ clickedOpponent }) {
  const statPokemon = clickedOpponent.stats;

  return (
    <div className="my-7 mx-0 flex justify-between items-center">
      <div className="w-fit flex flex-col justify-between">
        <div
          className={`w-fit py-1 px-2 ${bgGradLightGrey} flex shadow-custom rounded-xl`}
        >
          <Stats
            statValue={statPokemon[0].base_stat}
            typeStatMax={statMax.pv}
            textStat={statMax.namePv}
            colorBg="bg-[#D53A44]"
            clickedPokemon={clickedOpponent}
          />
          <Stats
            statValue={statPokemon[1].base_stat}
            typeStatMax={statMax.attack}
            textStat={statMax.nameAttack}
            colorBg="bg-[#FDA728]"
            clickedPokemon={clickedOpponent}
          />
          <Stats
            statValue={statPokemon[2].base_stat}
            typeStatMax={statMax.defense}
            textStat={statMax.nameDefense}
            colorBg="bg-[#0194EA]"
            clickedPokemon={clickedOpponent}
          />
          <Stats
            statValue={statPokemon[3].base_stat}
            typeStatMax={statMax.attackSp}
            textStat={statMax.nameAttackSp}
            colorBg="bg-[#F5682B]"
            clickedPokemon={clickedOpponent}
          />
          <Stats
            statValue={statPokemon[4].base_stat}
            typeStatMax={statMax.defenseSp}
            textStat={statMax.nameDefenseSp}
            colorBg="bg-[#8FB0C4]"
            clickedPokemon={clickedOpponent}
          />
          <Stats
            statValue={statPokemon[5].base_stat}
            typeStatMax={statMax.speed}
            textStat={statMax.nameSpeed}
            colorBg="bg-[#6319AD]"
            clickedPokemon={clickedOpponent}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-3">
        <div className="flex justify-center items-center w-32 h-32">
          <img
            src={
              clickedOpponent.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt={clickedOpponent.name}
            className={`${clickedOpponent.name === "moltres" && "scale-150"} ${
              clickedOpponent.name === "pikachu" ||
              clickedOpponent.name === "articuno"
                ? "w-24"
                : "w-32"
            }  h-fit`}
          />
        </div>
        <p className="w-full font-Silkscreen mt-2 text-xl text-center">
          {clickedOpponent.name}
        </p>
      </div>
    </div>
  );
}

FocusOpponent.propTypes = {
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FocusOpponent;
