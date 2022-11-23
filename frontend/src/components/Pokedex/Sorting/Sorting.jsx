import React, { useState } from "react";
import PropTypes from "prop-types";
import SortingList from "./SortingList";

function Sorting({
  handleSortingName,
  sortByName,
  handleSortingInvertName,
  sortByInvertName,
  handleSortingNumber,
  sortByNumber,
  handleSortingInvertNumber,
  sortByInvertNumber,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFilters = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-1/2 md:w-full">
      <div className="flex h-12 text-white text-base font-Rajdhani items-center">
        <button className="w-full" type="button" onClick={handleOpenFilters}>
          SORTING
        </button>
      </div>
      {isOpen && (
        <SortingList
          handleSortingName={handleSortingName}
          sortByName={sortByName}
          handleSortingInvertName={handleSortingInvertName}
          sortByInvertName={sortByInvertName}
          handleSortingNumber={handleSortingNumber}
          sortByNumber={sortByNumber}
          handleSortingInvertNumber={handleSortingInvertNumber}
          sortByInvertNumber={sortByInvertNumber}
        />
      )}
    </div>
  );
}

export default Sorting;

Sorting.propTypes = {
  handleSortingName: PropTypes.func.isRequired,
  sortByName: PropTypes.bool.isRequired,
  handleSortingInvertName: PropTypes.func.isRequired,
  sortByInvertName: PropTypes.bool.isRequired,
  handleSortingNumber: PropTypes.func.isRequired,
  sortByNumber: PropTypes.bool.isRequired,
  handleSortingInvertNumber: PropTypes.func.isRequired,
  sortByInvertNumber: PropTypes.bool.isRequired,
};
