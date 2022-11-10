import React from "react";

function Fight() {
  return (
    <div>
      <label className="flex justify-evenly">
        <input type="checkbox" />
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
