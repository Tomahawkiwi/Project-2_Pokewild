import PropTypes from "prop-types";
import React from "react";
import { attackType, allAttacks } from "../../../tools/constants";

function AttackButton({
  pokemon,
  index,
  setLifeOpponent,
  lifeOpponent,
  dialbox,
  setAttack,
}) {
  const attack = allAttacks[pokemon][index].type;
  const attackName = allAttacks[pokemon][index].name;

  const attackEffect = () => {
    if (lifeOpponent - 15 < 0) {
      setLifeOpponent(0);
    }
    if (lifeOpponent - 15 >= 0) {
      setLifeOpponent(lifeOpponent - 15);
    }
    setAttack(allAttacks[pokemon][index]);
  };

  return (
    <button
      type="button"
      onClick={() => dialbox === "Let the fight begin !" && attackEffect()}
      className={`w-2/5 max-w-[220px] h-14 mx-4 ${
        dialbox === "Let the fight begin !"
          ? `bg-[${attackType[attack]}] transition-colors duration-300 ease-in-out`
          : "bg-customDarkGrey-lighter text-white hover:cursor-not-allowed"
      } rounded-2xl hover:cursor-pointer`}
    >
      <p
        className={`${
          attack === "bug" ||
          attack === "electric" ||
          attack === "ice" ||
          (attack === "rock" && "text-white")
        } text-center align-middle font-Silkscreen px-3 hover:cursor-pointer`}
      >
        {attackName}
      </p>
    </button>
  );
}
AttackButton.propTypes = {
  pokemon: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  setLifeOpponent: PropTypes.func.isRequired,
  setAttack: PropTypes.func.isRequired,
  lifeOpponent: PropTypes.number.isRequired,
  dialbox: PropTypes.string.isRequired,
};

export default AttackButton;
