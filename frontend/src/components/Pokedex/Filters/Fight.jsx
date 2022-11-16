import React from "react";
import PropTypes from "prop-types";

function Fight({ handleCheckboxFight, fighterAvailable }) {
  return (
    <div>
      <label className="flex justify-evenly">
        <input
          type="checkbox"
          onChange={handleCheckboxFight}
          checked={fighterAvailable}
        />
        <img
          className="h-6"
          src="src/assets/fight_mode/picto_fight.png"
          alt="fightmode"
        />
      </label>
    </div>
  );
}

export default Fight;

Fight.propTypes = {
  handleCheckboxFight: PropTypes.func.isRequired,
  fighterAvailable: PropTypes.bool.isRequired,
};
