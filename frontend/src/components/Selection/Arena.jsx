import PropTypes from "prop-types";
import React from "react";

function Arena({ path, alt }) {
  return (
    <button className="w-full" type="button">
      <img
        src={path}
        alt={alt}
        className="rounded-[10px] shadow-custom hover:scale-110"
      />
    </button>
  );
}

export default Arena;

Arena.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
