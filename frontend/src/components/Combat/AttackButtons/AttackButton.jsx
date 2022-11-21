import PropTypes from "prop-types";
import React from "react";
import { attackType } from "../../../tools/constants";

function AttackButton({
  pokemon,
  opponent,
  setLifeOpponent,
  lifeOpponent,
  setDialbox,
  attack,
  typeEffect,
  isMyTurn,
  setIsMyTurn,
  setLaunchCard,
  setCardType,
}) {
  const getModuloType = (typeAttack) => {
    if (
      opponent.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeAttack.damage_relations.double_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      return 2;
    }
    if (
      opponent.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeAttack.damage_relations.half_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      return 0.5;
    }
    if (
      opponent.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeAttack.damage_relations.no_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      return 0;
    }
    return 1;
  };

  const hit = (
    powerOfAttack,
    attackOfAssailant,
    defenseOfReceiver,
    typeAttack,
    accuracy
  ) => {
    const damages =
      (0.5 *
        (powerOfAttack * (attackOfAssailant / defenseOfReceiver)) *
        getModuloType(typeAttack) +
        1) *
      0.5;
    const chanceToAttack = Math.floor(Math.random() * 100) + 1;
    const chanceToCritical = Math.floor(Math.random() * 8) + 1;
    const chanceToOneShot = Math.floor(Math.random() * 50) + 1;

    const getMessageModuloType = (t) => {
      if (getModuloType(t) === 2) {
        return "It was very effective ! ";
      }
      if (getModuloType(t) === 1) {
        return "It hit normally. ";
      }
      if (getModuloType(t) === 0.5) {
        return "It was not very effective... ";
      }
      return 1;
    };

    if (getModuloType(typeAttack) === 0) {
      setDialbox("There is no effect...");
      return setLifeOpponent(lifeOpponent - 0);
    }

    if (chanceToAttack <= accuracy) {
      if (chanceToOneShot === 1) {
        setDialbox(
          `${getMessageModuloType(
            typeAttack
          )}But incredible... this attack just doomed ${opponent.name} !`
        );
        return setLifeOpponent(lifeOpponent - lifeOpponent);
      }
      if (chanceToCritical === 1) {
        setDialbox(
          `${getMessageModuloType(typeAttack)}Lucky, it hit critical !`
        );
        return setLifeOpponent(
          lifeOpponent - damages * 2 > 0 ? lifeOpponent - damages * 2 : 0
        );
      }
      setDialbox(`${getMessageModuloType(typeAttack)}`);
      return setLifeOpponent(
        lifeOpponent - damages > 0 ? lifeOpponent - damages : 0
      );
    }

    setDialbox("It missed...");
    return setLifeOpponent(lifeOpponent);
  };

  const attackAndHandleTurns = () => {
    setCardType(attack);
    setLaunchCard(true);
    setIsMyTurn(false);
    if (attack.damage_class.name === "special") {
      hit(
        attack.power,
        pokemon.stats[3].base_stat,
        opponent.stats[4].base_stat,
        typeEffect,
        attack.accuracy
      );
    } else {
      hit(
        attack.power,
        pokemon.stats[1].base_stat,
        opponent.stats[2].base_stat,
        typeEffect,
        attack.accuracy
      );
    }
  };

  return (
    <button
      type="button"
      onClick={() => isMyTurn && attackAndHandleTurns()}
      className={`w-2/5 max-w-[220px] h-14 mx-4 ${
        isMyTurn
          ? `bg-[${
              attackType[typeEffect.name]
            }] transition-colors duration-300 ease-in-out shadow-bolder hover:scale-105`
          : "bg-customDarkGrey-lighter text-white hover:cursor-not-allowed transition-colors duration-300 ease-in-out"
      } rounded-2xl hover:cursor-pointer`}
    >
      <p
        className={`${
          typeEffect.name === "bug" ||
          typeEffect.name === "electric" ||
          typeEffect.name === "ice" ||
          (typeEffect.name === "rock" && "text-white")
        } text-center align-middle font-Silkscreen px-3 ${
          isMyTurn ? "hover:cursor-pointer" : "hover:cursor-not-allowed"
        }`}
      >
        {attack.name}
      </p>
    </button>
  );
}
AttackButton.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  opponent: PropTypes.objectOf(PropTypes.any).isRequired,
  lifeOpponent: PropTypes.number.isRequired,
  setLifeOpponent: PropTypes.func.isRequired,
  setDialbox: PropTypes.func.isRequired,
  attack: PropTypes.objectOf(PropTypes.any).isRequired,
  typeEffect: PropTypes.objectOf(PropTypes.any).isRequired,
  isMyTurn: PropTypes.bool.isRequired,
  setIsMyTurn: PropTypes.func.isRequired,
  setLaunchCard: PropTypes.func.isRequired,
  setCardType: PropTypes.func.isRequired,
};

export default AttackButton;
