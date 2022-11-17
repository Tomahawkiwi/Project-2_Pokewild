import React from "react";
import PropTypes from "prop-types";
import setLogo from "../../../tools/setLogo";

function Types({ type, handleCheckbox, filter }) {
  if (type === "unknown" || type === "shadow" || type === "dark")
    return <div className="hidden" />;

  return (
    <div>
      <label className="flex m-1">
        <input
          className="m-2"
          type="checkbox"
          onChange={() => handleCheckbox(type)}
          checked={filter.indexOf(type) > -1}
        />
        {setLogo(type)}
      </label>
    </div>
  );
}

export default Types;

Types.propTypes = {
  type: PropTypes.string.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
};
