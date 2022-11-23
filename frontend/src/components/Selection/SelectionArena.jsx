import PropTypes from "prop-types";
import React from "react";
import { arenas, bgGradLightGrey } from "../../tools/constants";
import Arena from "./Arena";
import useWindowSize from "../../hooks/useWindowSize";

function SelectionArena({ clickedArena, setClickedArena }) {
  const screenWidth = useWindowSize().width;

  return (
    <div className="h-fit mx-auto mt-4 flex justify-between md:flex-col md:items-center">
      <div
        className={`w-24 mr-5 ${
          screenWidth < 768 && bgGradLightGrey
        } rounded-xl shadow-custom flex shrink-0 items-center md:bg-transparent md:shadow-none md:w-fit md:px-5 md:py-2 md:mb-2`}
      >
        <p className="font-Silkscreen text-base text-center dark:text-black">
          Select the arena
        </p>
      </div>

      <div
        className={`grow h-full ${bgGradLightGrey} rounded-xl shadow-custom`}
      >
        <div className="w-fit grid gap-3 grid-cols-2 p-4 m-auto xs:p-7 ">
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
