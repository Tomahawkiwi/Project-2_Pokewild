import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { attackType } from "../../../tools/constants";

function AttackButton({
  pokemon,
  opponent,
  lifeOpponent,
  setLifeOpponent,
  lifePokemon,
  setLifePokemon,
  setDialbox,
  attack,
  attack1Opponent,
  attack2Opponent,
  typeEffect,
  typeEffectOpponent1,
  typeEffectOpponent2,
  isMyTurn,
  setIsMyTurn,
  setIsCardPokemon,
  setIsCardOpponent,
  setCardType,
}) {
  const [turnOpponent, setTurnOpponent] = useState(0);

  // TOOLS
  // I get the modulator number for the types relation

  const getModuloType = (typeAttack, target) => {
    if (
      target.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeAttack.damage_relations.no_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      return 0;
    }
    if (
      target.types
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
      target.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeAttack.damage_relations.half_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      return 0.5;
    }

    return 1;
  };

  // I declare the function to calculate and returns the damages and comments
  // in dialbox for my Pokemon and the opponent, including cheated, critical and missed attacks.

  const hit = (
    powerOfAttack,
    attackOfAssailant,
    defenseOfReceiver,
    typeAttack,
    accuracy,
    target,
    setLifeTarget,
    lifeTarget
  ) => {
    const damages =
      (0.5 *
        (powerOfAttack * (attackOfAssailant / defenseOfReceiver)) *
        getModuloType(typeAttack, target) +
        1) *
      0.5;
    const chanceToAttack = Math.floor(Math.random() * 100) + 1;
    const chanceToCritical = Math.floor(Math.random() * 8) + 1;
    const chanceToOneShot = Math.floor(Math.random() * 50) + 1;

    const getMessageModuloType = (t) => {
      if (getModuloType(t, target) === 2) {
        return "It was very effective ! ";
      }
      if (getModuloType(t, target) === 1) {
        return "It was quite effective. ";
      }
      if (getModuloType(t, target) === 0.5) {
        return "It wasn't very effective... ";
      }
      return 1;
    };
    // Pikachu cheaté
    if (target.name === "pikachu") {
      setLifeTarget(Math.ceil(lifeTarget / 2));
      return setTimeout(
        () =>
          setDialbox(
            `${getMessageModuloType(
              typeAttack,
              target
            )}... but pikachu is a legend !`
          ),
        3500
      );
    }
    if (getModuloType(typeAttack, target) === 0) {
      setLifeTarget(lifeTarget - 0);
      return setTimeout(() => setDialbox("There is no effect..."), 3500);
    }

    if (chanceToAttack <= accuracy) {
      if (chanceToOneShot === 1) {
        setLifeTarget(lifeTarget - lifeTarget);
        return setTimeout(
          () =>
            setDialbox(
              `${getMessageModuloType(
                typeAttack,
                target
              )}But incredible... this attack just doomed ${target.name} !`
            ),
          3500
        );
      }
      if (chanceToCritical === 1) {
        setLifeTarget(
          lifeTarget - damages * 2 > 0 ? lifeTarget - damages * 2 : 0
        );
        return setTimeout(
          () =>
            setDialbox(
              `${getMessageModuloType(
                typeAttack,
                target
              )}Lucky, it hit critical !`
            ),
          3500
        );
      }
      setLifeTarget(lifeTarget - damages > 0 ? lifeTarget - damages : 0);
      return setTimeout(
        () => setDialbox(`${getMessageModuloType(typeAttack, target)}`),
        3500
      );
    }

    setLifeTarget(lifeTarget);
    return setTimeout(() => setDialbox("It missed..."), 3500);
  };

  // MY TURN
  // I declare the function that run my turn

  const myAttackAndHandleTurn = () => {
    setIsCardOpponent(false);
    setIsCardPokemon(true);
    setCardType(attack);
    setDialbox(`${pokemon.name} uses ${attack.name} !`);
    setIsMyTurn(false);
    if (attack.damage_class.name === "special") {
      setTimeout(() => {
        hit(
          attack.power,
          pokemon.stats[3].base_stat,
          opponent.stats[4].base_stat,
          typeEffect,
          attack.accuracy,
          opponent,
          setLifeOpponent,
          lifeOpponent
        );
        setTurnOpponent(turnOpponent + 1);
      }, 3000);
    } else {
      setTimeout(() => {
        hit(
          attack.power,
          pokemon.stats[1].base_stat,
          opponent.stats[2].base_stat,
          typeEffect,
          attack.accuracy,
          opponent,
          setLifeOpponent,
          lifeOpponent
        );
        setTurnOpponent(turnOpponent + 1);
      }, 3000);
    }
  };

  // OPPONENT
  // I declare the function that choose a random attack between the two available in my object in 'constants.js' + IA pour privilégier à 75% les attaques du type fort si existant.

  const getTheRandomAttackOpponent = () => {
    const AttacksOpponent = [attack1Opponent, attack2Opponent];

    const attack1IA = [];
    const attack2IA = [];

    if (
      pokemon.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeEffectOpponent1.damage_relations.double_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      attack1IA.push(1);
    }

    if (
      pokemon.types
        .map((t) => t.type.name)
        .filter((each) =>
          typeEffectOpponent2.damage_relations.double_damage_to
            .map((e) => e.name)
            .includes(each)
        ).length > 0
    ) {
      attack2IA.push(1);
    }

    const randomize = (chances) => Math.floor(Math.random() * chances + 1);

    if (attack1IA.length > attack2IA.length) {
      if (randomize(4) >= 3) {
        return [AttacksOpponent[0], typeEffectOpponent1];
      }
      return [AttacksOpponent[1], typeEffectOpponent2];
    }
    if (attack1IA.length < attack2IA.length) {
      if (randomize(4) >= 3) {
        return [AttacksOpponent[1], typeEffectOpponent2];
      }
      return [AttacksOpponent[0], typeEffectOpponent1];
    }

    if (randomize(2) === 1) {
      return [AttacksOpponent[0], typeEffectOpponent1];
    }
    return [AttacksOpponent[1], typeEffectOpponent2];
  };

  // I declare the function that run the opponent's turn

  const OpponentAttackAndHandleTurn = () => {
    const [randomAttackOpponent, typeEffectRandomAttackOpponent] =
      getTheRandomAttackOpponent();

    setIsCardPokemon(false);
    setIsCardOpponent(true);
    setCardType(randomAttackOpponent);
    setDialbox(`${opponent.name} uses ${randomAttackOpponent.name} !`);
    if (randomAttackOpponent.damage_class.name === "special") {
      setTimeout(
        () =>
          hit(
            randomAttackOpponent.power,
            opponent.stats[3].base_stat,
            pokemon.stats[4].base_stat,
            typeEffectRandomAttackOpponent,
            randomAttackOpponent.accuracy,
            pokemon,
            setLifePokemon,
            lifePokemon
          ),
        3000
      );
    } else {
      setTimeout(
        () =>
          hit(
            randomAttackOpponent.power,
            opponent.stats[1].base_stat,
            pokemon.stats[2].base_stat,
            typeEffectRandomAttackOpponent,
            randomAttackOpponent.accuracy,
            pokemon,
            setLifePokemon,
            lifePokemon
          ),
        3000
      );
    }
    setTimeout(() => {
      if (lifePokemon === 0) {
        setIsMyTurn(false);
      } else {
        setIsMyTurn(true);
      }
    }, 7000);
  };

  // I use useEffect to get in react opponent turn at the end of gamer turn (see setTurnOpponent)

  useEffect(() => {
    if (opponent.stats[5].base_stat > pokemon.stats[5].base_stat) {
      if (turnOpponent === 0 && lifeOpponent !== 0) {
        setTimeout(() => {
          OpponentAttackAndHandleTurn();
        }, 7000);
      }
      if (turnOpponent !== 0 && lifeOpponent !== 0) {
        setTimeout(() => {
          OpponentAttackAndHandleTurn();
        }, 7000);
      }
    }
    if (opponent.stats[5].base_stat <= pokemon.stats[5].base_stat) {
      if (turnOpponent !== 0 && lifeOpponent !== 0) {
        setTimeout(() => {
          OpponentAttackAndHandleTurn();
        }, 7000);
      }
    }
  }, [turnOpponent]);

  // THE JSX

  return (
    <button
      type="button"
      onClick={() => isMyTurn && lifePokemon !== 0 && myAttackAndHandleTurn()}
      className={`w-2/5 max-w-[220px] h-14 mx-4 ${
        isMyTurn && lifePokemon !== 0
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
          isMyTurn && lifePokemon !== 0
            ? "hover:cursor-pointer"
            : "hover:cursor-not-allowed"
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
  lifePokemon: PropTypes.number.isRequired,
  setLifePokemon: PropTypes.func.isRequired,
  setDialbox: PropTypes.func.isRequired,
  attack: PropTypes.objectOf(PropTypes.any).isRequired,
  typeEffect: PropTypes.objectOf(PropTypes.any).isRequired,
  attack1Opponent: PropTypes.objectOf(PropTypes.any).isRequired,
  attack2Opponent: PropTypes.objectOf(PropTypes.any).isRequired,
  typeEffectOpponent1: PropTypes.objectOf(PropTypes.any).isRequired,
  typeEffectOpponent2: PropTypes.objectOf(PropTypes.any).isRequired,
  isMyTurn: PropTypes.bool.isRequired,
  setIsMyTurn: PropTypes.func.isRequired,
  setIsCardPokemon: PropTypes.func.isRequired,
  setIsCardOpponent: PropTypes.func.isRequired,
  setCardType: PropTypes.func.isRequired,
};

export default AttackButton;
