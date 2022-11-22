import PropTypes from "prop-types";
import React from "react";
import { arenas, bgGradLightGrey } from "../../tools/constants";
import Arena from "./Arena";

function SelectionArena({ clickedArena, setClickedArena }) {
  return (
    <div className="h-fit mx-auto mt-4 flex justify-between">
      <div
        className={`w-24 mr-5 ${bgGradLightGrey} rounded-xl shadow-custom flex shrink-0 items-center`}
      >
        <p className="font-Silkscreen text-base text-center dark:text-black">
          Select the arena
        </p>
      </div>

      <div
        className={`grow h-full ${bgGradLightGrey} rounded-xl shadow-custom`}
      >
        <div className="w-fit grid gap-3 grid-cols-2 p-4 m-auto">
          {arenas.map((each) => (
            <Arena
              key={each.alt}
              arena={each}
              clickedArena={clickedArena}
              setClickedArena={setClickedArena}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

SelectionArena.propTypes = {
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
  setClickedArena: PropTypes.func.isRequired,
};

export default SelectionArena;
