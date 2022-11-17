import PropTypes from "prop-types";
import React from "react";
import LiveScreen from "./LiveScreen";

function Combat({ clickedPokemon, clickedOpponent, clickedArena }) {
  return (
    <div className="mt-36 h-full">
      <LiveScreen
        clickedPokemon={clickedPokemon}
        clickedOpponent={clickedOpponent}
        clickedArena={clickedArena}
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
