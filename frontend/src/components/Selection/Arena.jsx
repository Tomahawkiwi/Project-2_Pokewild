import PropTypes from "prop-types";
import React from "react";
import { bgGradLightGrey } from "../../tools/constants";

function Arena({ path, alt, clickedArena, setClickedArena }) {
  return (
    <button
      onClick={() => setClickedArena(alt)}
      className="w-full relative"
      type="button"
    >
      <img
        src={path}
        alt={alt}
        className={`${
          clickedArena === alt && "scale-110 border-customLightRed border-4"
        } rounded-[10px] shadow-custom hover:scale-110`}
      />
      {clickedArena === alt && (
        <div
          className={`${bgGradLightGrey} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full shadow-custom flex justify-center items-center text-center text-green-600 text-lg`}
        >
          ✓
        </div>
      )}
    </button>
  );
}

export default Arena;

Arena.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  clickedArena: PropTypes.string.isRequired,
  setClickedArena: PropTypes.func.isRequired,
};
