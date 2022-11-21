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
  dialbox,
  isMyTurn,
  setIsMyTurn,
  setDialbox,
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

  const getUrlTypeAttacks = async (pokemon) => {
    await axios
      .get(allAttacks[pokemon][0].link)
      .then((res) => setAttack1(res.data));
    await axios
      .get(allAttacks[pokemon][1].link)
      .then((res) => setAttack2(res.data));
  };

  useEffect(() => {
    getUrlTypeAttacks(clickedPokemon.name);
  }, [clickedPokemon.name]);

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
      />

      {Object.keys(attack1).length > 0 && Object.keys(attack2).length > 0 && (
        <AttackButtons
          lifeOpponent={lifeOpponent}
          setLifeOpponent={setLifeOpponent}
          dialbox={dialbox}
          clickedPokemon={clickedPokemon}
          clickedOpponent={clickedOpponent}
          setDamages={setDamages}
          damages={damages}
          attack1={attack1}
          attack2={attack2}
          isMyTurn={isMyTurn}
          setIsMyTurn={setIsMyTurn}
          setDialbox={setDialbox}
        />
      )}
    </div>
  );
}

Combat.propTypes = {
  dialbox: PropTypes.string.isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
  setDialbox: PropTypes.func.isRequired,
  isMyTurn: PropTypes.bool.isRequired,
  setIsMyTurn: PropTypes.func.isRequired,
};

export default Combat;
