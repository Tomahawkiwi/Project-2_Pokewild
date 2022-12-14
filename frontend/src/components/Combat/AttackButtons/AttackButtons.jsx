import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AttackButton from "./AttackButton";

function AttackButtons({
  clickedPokemon,
  clickedOpponent,
  lifeOpponent,
  setLifeOpponent,
  lifePokemon,
  setLifePokemon,
  attack1,
  attack2,
  attack1Opponent,
  attack2Opponent,
  isMyTurn,
  setIsMyTurn,
  setDialbox,
  setIsCardPokemon,
  setIsCardOpponent,
  setCardType,
  setIsFightEnd,
  isFightEnd,
}) {
  const [isAttackLoading, setIsAttackLoading] = useState(true);
  const [typeEffectAttack1, setTypeEffectAttack1] = useState({});
  const [typeEffectAttack2, setTypeEffectAttack2] = useState({});
  const [typeEffectAttackOpponent1, setTypeEffectAttackOpponent1] = useState(
    {}
  );
  const [typeEffectAttackOpponent2, setTypeEffectAttackOpponent2] = useState(
    {}
  );

  const getEffectsTypeAttacks = async () => {
    setIsAttackLoading(true);
    await axios
      .get(attack1.type.url)
      .then((res) => setTypeEffectAttack1(res.data));
    await axios
      .get(attack2.type.url)
      .then((res) => setTypeEffectAttack2(res.data));
    await axios
      .get(attack1Opponent.type.url)
      .then((res) => setTypeEffectAttackOpponent1(res.data));
    await axios
      .get(attack2Opponent.type.url)
      .then((res) => setTypeEffectAttackOpponent2(res.data));
    setIsAttackLoading(false);
  };

  useEffect(() => {
    getEffectsTypeAttacks();
  }, [attack1, attack2, attack1Opponent, attack2Opponent]);

  if (isAttackLoading)
    return (
      <div className="h-36 flex flex-col justify-center">
        <div>Loading ...</div>
      </div>
    );

  return (
    <div>
      {!isAttackLoading && (
        <div className="relative w-full">
          <div className="flex justify-center mt-6 mb-8">
            <AttackButton
              pokemon={clickedPokemon}
              opponent={clickedOpponent}
              lifeOpponent={lifeOpponent}
              setLifeOpponent={setLifeOpponent}
              lifePokemon={lifePokemon}
              setLifePokemon={setLifePokemon}
              setDialbox={setDialbox}
              attack={attack1}
              typeEffect={typeEffectAttack1}
              typeEffectOpponent1={typeEffectAttackOpponent1}
              typeEffectOpponent2={typeEffectAttackOpponent2}
              attack1Opponent={attack1Opponent}
              attack2Opponent={attack2Opponent}
              isMyTurn={isMyTurn}
              setIsMyTurn={setIsMyTurn}
              setIsCardPokemon={setIsCardPokemon}
              setIsCardOpponent={setIsCardOpponent}
              setCardType={setCardType}
              setIsFightEnd={setIsFightEnd}
              isFightEnd={isFightEnd}
            />
            <AttackButton
              pokemon={clickedPokemon}
              opponent={clickedOpponent}
              lifeOpponent={lifeOpponent}
              setLifeOpponent={setLifeOpponent}
              lifePokemon={lifePokemon}
              setLifePokemon={setLifePokemon}
              setDialbox={setDialbox}
              attack={attack2}
              typeEffect={typeEffectAttack2}
              typeEffectOpponent1={typeEffectAttackOpponent1}
              typeEffectOpponent2={typeEffectAttackOpponent2}
              attack1Opponent={attack1Opponent}
              attack2Opponent={attack2Opponent}
              isMyTurn={isMyTurn}
              setIsMyTurn={setIsMyTurn}
              setIsCardPokemon={setIsCardPokemon}
              setIsCardOpponent={setIsCardOpponent}
              setCardType={setCardType}
              setIsFightEnd={setIsFightEnd}
              isFightEnd={isFightEnd}
            />
          </div>
        </div>
      )}
    </div>
  );
}

AttackButtons.propTypes = {
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  lifeOpponent: PropTypes.number.isRequired,
  setLifeOpponent: PropTypes.func.isRequired,
  lifePokemon: PropTypes.number.isRequired,
  setLifePokemon: PropTypes.func.isRequired,
  attack1: PropTypes.objectOf(PropTypes.any).isRequired,
  attack2: PropTypes.objectOf(PropTypes.any).isRequired,
  attack1Opponent: PropTypes.objectOf(PropTypes.any).isRequired,
  attack2Opponent: PropTypes.objectOf(PropTypes.any).isRequired,
  isMyTurn: PropTypes.bool.isRequired,
  setDialbox: PropTypes.func.isRequired,
  setIsMyTurn: PropTypes.func.isRequired,
  setIsCardPokemon: PropTypes.func.isRequired,
  setIsCardOpponent: PropTypes.func.isRequired,
  setCardType: PropTypes.func.isRequired,
  isFightEnd: PropTypes.bool.isRequired,
  setIsFightEnd: PropTypes.func.isRequired,
};

export default AttackButtons;
