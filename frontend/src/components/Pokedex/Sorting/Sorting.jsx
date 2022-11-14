import React, { useState } from "react";
import PropTypes from "prop-types";
import SortingList from "./SortingList";

function Sorting({ handleSortingName, sortByName }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-1/2">
      <button
        className="w-full h-12 text-white text-sm font-Rajdhani"
        type="button"
        onClick={handleOpenFilters}
      >
        SORTING
      </button>
      {isOpen && (
        <SortingList
          handleSortingName={handleSortingName}
          sortByName={sortByName}
        />
      )}
    </div>
  );
}

export default Sorting;

Sorting.propTypes = {
  handleSortingName: PropTypes.func.isRequired,
  sortByName: PropTypes.bool.isRequired,
};
