import React from "react";
import PropTypes from "prop-types";
import setLogo from "../../../tools/setLogo";

function Types({ type, handleCheckbox, filter }) {
  if (type === "unknown" || type === "shadow")
    return <div className="hidden" />;

  return (
    <div className="flex m-1">
      <input
        className="m-2"
        type="checkbox"
        onChange={() => handleCheckbox(type)}
        checked={filter.indexOf(type) > -1}
      />
      {setLogo(type)}
    </div>
  );
}

export default Types;

Types.propTypes = {
  type: PropTypes.string.isRequired,
  handleCheckbox: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
