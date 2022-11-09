import PropTypes from "prop-types";
import React from "react";
import { bgGradLightGrey } from "../../tools/constants";
import statMax from "../../tools/stats";
import Stats from "./Stats";

function FocusGamer({ clickedPokemon }) {
  const statPokemon = clickedPokemon.stats;

  return (
    <div className="w-10/12 my-7 mx-auto flex justify-between">
      <div className="flex flex-col justify-center items-center mx-3">
        <div className="flex justify-center items-center w-32 h-32">
          <img
            src={
              clickedPokemon.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt={clickedPokemon.name}
            className="w-32 h-fit"
          />
        </div>
        <p className="w-full font-Silkscreen mt-2 text-xl text-center">
          {clickedPokemon.name}
        </p>
      </div>
      <div className="w-fit flex flex-col justify-between">
        <div
          className={`w-fit py-1 px-2 ${bgGradLightGrey} flex shadow-custom rounded-xl`}
        >
          <Stats
            statValue={statPokemon[0].base_stat}
            typeStatMax={statMax.pv}
            textStat={statMax.namePv}
            colorBg="bg-[#D53A44]"
            clickedPokemon={clickedPokemon}
          />
          <Stats
            statValue={statPokemon[1].base_stat}
            typeStatMax={statMax.attack}
            textStat={statMax.nameAttack}
            colorBg="bg-[#FDA728]"
            clickedPokemon={clickedPokemon}
          />
          <Stats
            statValue={statPokemon[2].base_stat}
            typeStatMax={statMax.defense}
            textStat={statMax.nameDefense}
            colorBg="bg-[#0194EA]"
            clickedPokemon={clickedPokemon}
          />
          <Stats
            statValue={statPokemon[3].base_stat}
            typeStatMax={statMax.attackSp}
            textStat={statMax.nameAttackSp}
            colorBg="bg-[#F5682B]"
            clickedPokemon={clickedPokemon}
          />
          <Stats
            statValue={statPokemon[4].base_stat}
            typeStatMax={statMax.defenseSp}
            textStat={statMax.nameDefenseSp}
            colorBg="bg-[#8FB0C4]"
            clickedPokemon={clickedPokemon}
          />
          <Stats
            statValue={statPokemon[5].base_stat}
            typeStatMax={statMax.speed}
            textStat={statMax.nameSpeed}
            colorBg="bg-[#6319AD]"
            clickedPokemon={clickedPokemon}
          />
        </div>
        <button
          type="button"
          className="bg-customLightRed text-white w-full h-10 mt-2 rounded-2xl shadow-custom font-Silkscreen text-sm hover:scale-110"
        >
          Choose
        </button>
      </div>
    </div>
  );
}

FocusGamer.propTypes = {
  clickedPokemon: PropTypes.objectOf.isRequired,
};

export default FocusGamer;
