import React, { useState } from "react";
import PropTypes from "prop-types";
import FiltersList from "./FiltersList";

function Filter({
  handleCheckbox,
  filter,
  handleCheckboxFight,
  fighterAvailable,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/2 md:w-full">
      <div className="flex h-12 text-white text-base font-Rajdhani items-center border-r-2 md:border-r-0">
        <button className="w-full" type="button" onClick={handleOpenFilters}>
          FILTER
        </button>
      </div>
      {isOpen && (
        <FiltersList
          handleCheckbox={handleCheckbox}
          filter={filter}
          handleCheckboxFight={handleCheckboxFight}
          fighterAvailable={fighterAvailable}
        />
      )}
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  handleCheckbox: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleCheckboxFight: PropTypes.func.isRequired,
  fighterAvailable: PropTypes.bool.isRequired,
};
