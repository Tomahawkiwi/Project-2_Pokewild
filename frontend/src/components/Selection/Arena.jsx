import PropTypes from "prop-types";
import React from "react";
import { bgGradLightGrey } from "../../tools/constants";

function Arena({ arena, clickedArena, setClickedArena }) {
  return (
    <button
      onClick={() => setClickedArena(arena)}
      className="w-full relative max-w-[160px]"
      type="button"
    >
      <img
        src={arena.path}
        alt={arena.alt}
        className={`${
          clickedArena.alt === arena.alt &&
          "scale-110 border-customLightRed border-4 xs:scale-105"
        } rounded-[10px] shadow-custom hover:scale-110 hover:cursor-pointer xs:hover:scale-105`}
      />
      {clickedArena.alt === arena.alt && (
        <div
          className={`${bgGradLightGrey} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6
          rounded-full shadow-custom flex justify-center items-center text-center text-green-600 text-lg xs:w-9 xs:h-9`}
        >
          ✓
        </div>
      )}
    </button>
  );
}

export default Arena;

Arena.propTypes = {
  arena: PropTypes.objectOf(PropTypes.any).isRequired,
  clickedArena: PropTypes.objectOf(PropTypes.any).isRequired,
  setClickedArena: PropTypes.func.isRequired,
};
