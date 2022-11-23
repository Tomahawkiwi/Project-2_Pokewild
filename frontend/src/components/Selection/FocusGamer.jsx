import PropTypes from "prop-types";
import React from "react";
import { bgGradLightGrey, choiceByDefault } from "../../tools/constants";
import statMax from "../../tools/stats";
import Stats from "./Stats";

function FocusGamer({
  clickedPokemon,
  setIsChoiceValidated,
  clickedArena,
  getRandomOpponent,
  setDialbox,
  buttonReady,
  setButtonReady,
}) {
  const statPokemon = clickedPokemon.stats;

  const handleReady = () => {
    if (
      clickedPokemon.name !== choiceByDefault.name &&
      Object.keys(clickedArena).length === 2
    ) {
      setButtonReady(true);
      setDialbox(`Nice, you chose ${clickedPokemon.name} !`);
      getRandomOpponent((opponent) => {
        setDialbox(`... and you'll face ${opponent.name} !`, 3500);
        setIsChoiceValidated(true);
      });
    }
    if (
      clickedPokemon.name === choiceByDefault.name &&
      Object.keys(clickedArena).length !== 2
    ) {
      setDialbox("You must choose a pokemon and an arena");
    }
    if (
      clickedPokemon.name === choiceByDefault.name &&
      Object.keys(clickedArena).length === 2
    ) {
      setDialbox("You forgot to choose your pokemon...");
    }
    if (
      clickedPokemon.name !== choiceByDefault.name &&
      Object.keys(clickedArena).length !== 2
    ) {
      setDialbox("You forgot to choose an arena...");
    }
  };

  return (
    <div className="my-7 mx-0 flex justify-between md:flex-col md:h-[80%] md:mr-10">
      <div className="flex flex-col justify-center items-center mx-[7%] xs:mx-[15%]">
        <div className="flex justify-center items-center w-32 h-32">
          <img
            src={
              clickedPokemon.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt={clickedPokemon.name}
            className={`${clickedPokemon.name === "moltres" && "scale-150"} ${
              clickedPokemon.name === "pikachu" ||
              clickedPokemon.name === "articuno"
                ? "w-24"
                : "w-32"
            }  h-fit xs:scale-[120%]`}
          />
        </div>
        <p className="w-full font-Silkscreen mt-2 text-xl text-center xs:mt-4 md:w-[140%]">
          {clickedPokemon.name}
        </p>
      </div>
      <div className="w-fit flex flex-col justify-between md:flex-col-reverse">
        <div
          className={`w-fit py-1 px-2 ${bgGradLightGrey} flex shadow-custom rounded-xl xs:py-2 dark:text-black`}
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
        {buttonReady ? (
          <div
            className={`${bgGradLightGrey} h-10 w-10 rounded-full shadow-custom mx-auto flex justify-center items-center
            text-center text-green-600 text-2xl md:mt-0 md:mb-6`}
          >
            ✓
          </div>
        ) : (
          <button
            type="button"
            onClick={() => handleReady()}
            className={`${
              clickedPokemon.name !== choiceByDefault.name &&
              Object.keys(clickedArena).length === 2
                ? "bg-customLightRed dark:bg-gradient-to-br dark:from-customDarkRed dark:to-customDarkRed-endGrad hover:scale-110 cursor-pointer transition-colors duration-300 ease-in-out"
                : "bg-customDarkGrey-lighter cursor-not-allowed"
            } text-white w-full max-w-[136px] h-10 mt-2 mx-auto rounded-2xl shadow-custom font-Silkscreen text-base md:mt-0 md:mb-6 lg:mb-3`}
          >
            Ready
          </button>
        )}
      </div>
    </div>
  );
}

FocusGamer.propTypes = {
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  setIsChoiceValidated: PropTypes.func.isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
  getRandomOpponent: PropTypes.func.isRequired,
  setDialbox: PropTypes.func.isRequired,
  buttonReady: PropTypes.bool.isRequired,
  setButtonReady: PropTypes.func.isRequired,
};

export default FocusGamer;
