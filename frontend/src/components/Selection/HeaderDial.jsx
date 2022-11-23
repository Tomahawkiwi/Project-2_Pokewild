import PropTypes, { object, string } from "prop-types";
import React from "react";
import Dialbox from "./Dialbox";
import useWindowSize from "../../hooks/useWindowSize";

function HeaderDial({
  dialbox,
  setDialbox,
  isChoiceValidated,
  setIsFightBegin,
  isFightBegin,
  isCardPokemon,
  isCardOpponent,
  cardType,
}) {
  const screenWidth = useWindowSize().width;

  return (
    <div className="h-fit mt-14">
      <div className="relative object-cover">
        <h1 className="absolute w-full bottom-full text-center font-Silkscreen text-4xl">
          TIME TO FIGHT
        </h1>
        <img
          src={
            screenWidth > 640
              ? "/src/assets/combat-selection/bg-flames-big-screen.png"
              : "/src/assets/combat-selection/bg-flames.png"
          }
          alt="Flames background"
          className="w-full max-h-36 object-cover"
        />
      </div>
      <Dialbox
        dialbox={dialbox}
        setDialbox={setDialbox}
        isChoiceValidated={isChoiceValidated}
        setIsFightBegin={setIsFightBegin}
        isFightBegin={isFightBegin}
        isCardPokemon={isCardPokemon}
        isCardOpponent={isCardOpponent}
        cardType={cardType}
      />
    </div>
  );
}

HeaderDial.propTypes = {
  dialbox: PropTypes.oneOfType([string, object]).isRequired,
  setDialbox: PropTypes.func.isRequired,
  isChoiceValidated: PropTypes.bool.isRequired,
  setIsFightBegin: PropTypes.func.isRequired,
  isFightBegin: PropTypes.bool.isRequired,
  isCardPokemon: PropTypes.bool.isRequired,
  isCardOpponent: PropTypes.bool.isRequired,
  cardType: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HeaderDial;
