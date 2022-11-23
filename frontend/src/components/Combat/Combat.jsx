import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { allAttacks } from "../../tools/constants";
import AttackButtons from "./AttackButtons/AttackButtons";
import LiveScreen from "./ScreenPart/LiveScreen";

function Combat({
  clickedPokemon,
  clickedOpponent,
  clickedArena,
  isMyTurn,
  setIsMyTurn,
  setDialbox,
  isCardPokemon,
  setIsCardPokemon,
  isCardOpponent,
  setIsCardOpponent,
  setCardType,
}) {
  const [lifePokemon, setLifePokemon] = useState(
    clickedPokemon.stats[0].base_stat
  );
  const [lifeOpponent, setLifeOpponent] = useState(
    clickedOpponent.stats[0].base_stat
  );
  const [damages, setDamages] = useState("");
  const [attack1, setAttack1] = useState({});
  const [attack2, setAttack2] = useState({});
  const [attack1Opponent, setAttack1Opponent] = useState({});
  const [attack2Opponent, setAttack2Opponent] = useState({});
  const [isFightEnd, setIsFightEnd] = useState(false);

  const getUrlTypeAttacks = async (pokemon, opponent) => {
    await axios
      .get(allAttacks[pokemon][0].link)
      .then((res) => setAttack1(res.data));
    await axios
      .get(allAttacks[pokemon][1].link)
      .then((res) => setAttack2(res.data));
    await axios
      .get(allAttacks[opponent][0].link)
      .then((res) => setAttack1Opponent(res.data));
    await axios
      .get(allAttacks[opponent][1].link)
      .then((res) => setAttack2Opponent(res.data));
  };

  useEffect(() => {
    getUrlTypeAttacks(clickedPokemon.name, clickedOpponent.name);
  }, []);

  return (
    <div className="h-full bg-customLightGrey">
      <LiveScreen
        clickedPokemon={clickedPokemon}
        lifePokemon={lifePokemon}
        setLifePokemon={setLifePokemon}
        clickedOpponent={clickedOpponent}
        lifeOpponent={lifeOpponent}
        setLifeOpponent={setLifeOpponent}
        clickedArena={clickedArena}
        isFightEnd={isFightEnd}
      />

      {Object.keys(attack1).length > 0 && Object.keys(attack2).length > 0 && (
        <AttackButtons
          lifeOpponent={lifeOpponent}
          setLifeOpponent={setLifeOpponent}
          lifePokemon={lifePokemon}
          setLifePokemon={setLifePokemon}
          clickedPokemon={clickedPokemon}
          clickedOpponent={clickedOpponent}
          setDamages={setDamages}
          damages={damages}
          attack1={attack1}
          attack2={attack2}
          attack1Opponent={attack1Opponent}
          attack2Opponent={attack2Opponent}
          isMyTurn={isMyTurn}
          setIsMyTurn={setIsMyTurn}
          setDialbox={setDialbox}
          isCardPokemon={isCardPokemon}
          setIsCardPokemon={setIsCardPokemon}
          isCardOpponent={isCardOpponent}
          setIsCardOpponent={setIsCardOpponent}
          setCardType={setCardType}
          setIsFightEnd={setIsFightEnd}
          isFightEnd={isFightEnd}
        />
      )}
    </div>
  );
}

Combat.propTypes = {
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
  setDialbox: PropTypes.func.isRequired,
  isMyTurn: PropTypes.bool.isRequired,
  setIsMyTurn: PropTypes.func.isRequired,
  isCardPokemon: PropTypes.bool.isRequired,
  setIsCardPokemon: PropTypes.func.isRequired,
  isCardOpponent: PropTypes.bool.isRequired,
  setIsCardOpponent: PropTypes.func.isRequired,
  setCardType: PropTypes.func.isRequired,
};

export default Combat;
