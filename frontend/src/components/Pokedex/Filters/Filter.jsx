import React, { useState } from "react";
import PropTypes from "prop-types";
import { bgGradLightRed } from "../../../tools/constants";
import Filters from "./FiltersList";

function Filter({ handleCheckbox, filter }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`${bgGradLightRed} w-1/2 h-12 text-white text-sm font-Rajdhani`}
        type="button"
        onClick={handleOpenFilters}
      >
        FILTER
      </button>
      {isOpen && <Filters handleCheckbox={handleCheckbox} filter={filter} />}
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  handleCheckbox: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
