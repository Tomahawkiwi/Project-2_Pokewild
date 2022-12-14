import React from "react";
import PropTypes from "prop-types";

function Fight({ handleCheckboxFight, fighterAvailable }) {
  return (
    <div>
      <label className="flex justify-evenly m-5">
        <input
          type="checkbox"
          onChange={handleCheckboxFight}
          checked={fighterAvailable}
        />
        <img
          className="h-7 w-7"
          src="/fight_mode/picto_fight.png"
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
