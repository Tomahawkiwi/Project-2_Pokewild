import PropTypes from "prop-types";
import React, { useState } from "react";
import AttackButtons from "./AttackButtons/AttackButtons";
import LiveScreen from "./ScreenPart/LiveScreen";

function Combat({ clickedPokemon, clickedOpponent, clickedArena, dialbox }) {
  const [lifePokemon, setLifePokemon] = useState(
    clickedPokemon.stats[0].base_stat
  );
  const [lifeOpponent, setLifeOpponent] = useState(
    clickedOpponent.stats[0].base_stat
  );
  const [attack, setAttack] = useState({});

  return (
    <div className="h-full bg-customLightGrey dark:bg-gradient-to-br dark:from-customDarkGrey dark:to-customDarkGrey-endGrad">
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
        attack={attack}
        setAttack={setAttack}
        lifeOpponent={lifeOpponent}
        setLifeOpponent={setLifeOpponent}
        dialbox={dialbox}
        clickedPokemon={clickedPokemon}
        clickedOpponent={clickedOpponent}
      />
    </div>
  );
}

Combat.propTypes = {
  dialbox: PropTypes.string.isRequired,
  clickedPokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedOpponent: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Combat;
