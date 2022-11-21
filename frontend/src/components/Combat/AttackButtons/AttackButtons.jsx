import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AttackCard from "./CardPart/AttackCard";
import AttackButton from "./AttackButton";

function AttackButtons({
  clickedPokemon,
  clickedOpponent,
  setLifeOpponent,
  lifeOpponent,
  attack1,
  attack2,
  isMyTurn,
  setIsMyTurn,
  setDialbox,
}) {
  const [isAttackLoading, setIsAttackLoading] = useState(true);
  const [typeEffectAttack1, setTypeEffectAttack1] = useState({});
  const [typeEffectAttack2, setTypeEffectAttack2] = useState({});
  const [launchCard, setLaunchCard] = useState(false);
  const [cardType, setCardType] = useState("");

  const getEffectsTypeAttacks = async () => {
    setIsAttackLoading(true);
    await axios
      .get(attack1.type.url)
      .then((res) => setTypeEffectAttack1(res.data));
    await axios
      .get(attack2.type.url)
      .then((res) => setTypeEffectAttack2(res.data));
    setIsAttackLoading(false);
  };

  useEffect(() => {
    getEffectsTypeAttacks();
  }, [attack1, attack2]);

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
          {launchCard && (
            <div className="absolute bottom-[550%] left-1/2 transform -translate-x-1/2">
              <AttackCard
                typeAttack={cardType.type.name}
                launchCard={launchCard}
              />
            </div>
          )}
          <div className="flex justify-center mt-6 mb-8">
            <AttackButton
              pokemon={clickedPokemon}
              opponent={clickedOpponent}
              setLifeOpponent={setLifeOpponent}
              lifeOpponent={lifeOpponent}
              setDialbox={setDialbox}
              attack={attack1}
              typeEffect={typeEffectAttack1}
              isMyTurn={isMyTurn}
              setIsMyTurn={setIsMyTurn}
              setLaunchCard={setLaunchCard}
              setCardType={setCardType}
            />
            <AttackButton
              pokemon={clickedPokemon}
              opponent={clickedOpponent}
              setLifeOpponent={setLifeOpponent}
              lifeOpponent={lifeOpponent}
              setDialbox={setDialbox}
              attack={attack2}
              typeEffect={typeEffectAttack2}
              isMyTurn={isMyTurn}
              setIsMyTurn={setIsMyTurn}
              setLaunchCard={setLaunchCard}
              setCardType={setCardType}
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
  attack1: PropTypes.objectOf(PropTypes.any).isRequired,
  attack2: PropTypes.objectOf(PropTypes.any).isRequired,
  isMyTurn: PropTypes.bool.isRequired,
  setDialbox: PropTypes.func.isRequired,
  setIsMyTurn: PropTypes.func.isRequired,
};

export default AttackButtons;
