import PropTypes from "prop-types";
import React from "react";
import { attackType } from "../../../tools/constants";

function AttackButtons({ attack, setLifeOpponent, lifeOpponent }) {
  return (
    <div className="flex justify-center mt-6 mb-8">
      <button
        type="button"
        onClick={() =>
          lifeOpponent - 15 > 0
            ? setLifeOpponent(lifeOpponent - 15)
            : setLifeOpponent(0)
        }
        className={`w-2/5 max-w-[220px] h-14 mx-4 bg-[${attackType[attack]}] rounded-2xl hover:cursor-pointer`}
      >
        <p
          className={`${
            attack === "bug" ||
            attack === "electric" ||
            attack === "ice" ||
            (attack === "rock" && "text-white")
          } text-center align-middle font-Silkscreen hover:cursor-pointer`}
        >
          {attack}
        </p>
      </button>
      <button
        type="button"
        onClick={() =>
          lifeOpponent - 15 > 0
            ? setLifeOpponent(lifeOpponent - 15)
            : setLifeOpponent(0)
        }
        className={`w-2/5 max-w-[220px] h-14 mx-4 bg-[${attackType[attack]}] rounded-2xl hover:cursor-pointer`}
      >
        <p
          className={`${
            attack === "bug" ||
            attack === "electric" ||
            attack === "ice" ||
            (attack === "rock" && "text-white")
          } text-center align-middle font-Silkscreen hover:cursor-pointer`}
        >
          {attack}
        </p>
      </button>
    </div>
  );
}

AttackButtons.propTypes = {
  attack: PropTypes.string.isRequired,
  setLifeOpponent: PropTypes.func.isRequired,
  lifeOpponent: PropTypes.number.isRequired,
};

export default AttackButtons;
