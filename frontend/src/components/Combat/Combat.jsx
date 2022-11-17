import PropTypes from "prop-types";
import React, { useState } from "react";
import AttackButtons from "./AttackButtons/AttackButtons";
import AttackCard from "./CardPart/AttackCard";
import LiveScreen from "./ScreenPart/LiveScreen";

function Combat({ clickedPokemon, clickedOpponent, clickedArena }) {
  const [lifePokemon, setLifePokemon] = useState(
    clickedPokemon.stats[0].base_stat
  );
  const [lifeOpponent, setLifeOpponent] = useState(
    clickedOpponent.stats[0].base_stat
  );

  return (
    <div className="h-full bg-customLightGrey">
      <AttackCard attack={clickedPokemon.types[0].type.name} />
      <LiveScreen
        clickedPokemon={clickedPokemon}
        lifePokemon={lifePokemon}
        setLifePokemon={setLifePokemon}
        clickedOpponent={clickedOpponent}
        lifeOpponent={lifeOpponent}
        setLifeOpponent={setLifeOpponent}
        clickedArena={clickedArena}
      />
      <AttackButtons
        attack={clickedPokemon.types[0].type.name}
        lifeOpponent={lifeOpponent}
        setLifeOpponent={setLifeOpponent}
      />
    </div>
  );
}

Combat.propTypes = {
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Combat;
