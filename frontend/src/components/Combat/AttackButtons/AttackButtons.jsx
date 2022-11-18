import PropTypes from "prop-types";
import React from "react";
import AttackCard from "./CardPart/AttackCard";
import AttackButton from "./AttackButton";

function AttackButtons({
  attack,
  setAttack,
  clickedPokemon,
  setLifeOpponent,
  lifeOpponent,
  dialbox,
}) {
  return (
    <div className="relative w-full">
      {Object.keys(attack).length > 0 && (
        <div className="absolute bottom-[550%] left-1/2 transform -translate-x-1/2">
          <AttackCard attack={attack} />
        </div>
      )}
      <div className="flex justify-center mt-6 mb-8">
        <AttackButton
          pokemon={clickedPokemon.name}
          index="0"
          setLifeOpponent={setLifeOpponent}
          lifeOpponent={lifeOpponent}
          dialbox={dialbox}
          setAttack={setAttack}
        />
        <AttackButton
          pokemon={clickedPokemon.name}
          index="1"
          setLifeOpponent={setLifeOpponent}
          lifeOpponent={lifeOpponent}
          dialbox={dialbox}
          setAttack={setAttack}
        />
      </div>
    </div>
  );
}

AttackButtons.propTypes = {
  attack: PropTypes.objectOf(PropTypes.any).isRequired,
  setAttack: PropTypes.func.isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  setLifeOpponent: PropTypes.func.isRequired,
  lifeOpponent: PropTypes.number.isRequired,
  dialbox: PropTypes.string.isRequired,
};

export default AttackButtons;
