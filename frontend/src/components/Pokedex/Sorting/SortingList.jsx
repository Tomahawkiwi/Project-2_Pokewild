import React from "react";
import PropTypes from "prop-types";
import { bgGradLightGrey } from "../../../tools/constants";

function SortingList({
  handleSortingName,
  sortByName,
  handleSortingInvertName,
  sortByInvertName,
  handleSortingNumber,
  sortByNumber,
  handleSortingInvertNumber,
  sortByInvertNumber,
}) {
  return (
    <div
      className={`${bgGradLightGrey} h-[20vh] w-1/2 absolute flex flex-col font-Rajdhani justify-center md:w-full md:h-full md:relative`}
    >
      <label className="ml-2 mb-1">
        <input
          type="checkbox"
          onChange={handleSortingName}
          checked={sortByName}
        />{" "}
        Name (a-z)
      </label>

      <label className="ml-2 mb-1">
        <input
          type="checkbox"
          onChange={handleSortingInvertName}
          checked={sortByInvertName}
        />{" "}
        Name (z-a)
      </label>
      <label className="ml-2 mb-1">
        <input
          type="checkbox"
          onChange={handleSortingNumber}
          checked={sortByNumber}
        />{" "}
        Number (asc)
      </label>
      <label className="ml-2 mb-1">
        <input
          type="checkbox"
          onChange={handleSortingInvertNumber}
          checked={sortByInvertNumber}
        />{" "}
        Number (des)
      </label>
    </div>
  );
}

export default SortingList;

SortingList.propTypes = {
  handleSortingName: PropTypes.func.isRequired,
  sortByName: PropTypes.bool.isRequired,
  handleSortingInvertName: PropTypes.func.isRequired,
  sortByInvertName: PropTypes.bool.isRequired,
  handleSortingNumber: PropTypes.func.isRequired,
  sortByNumber: PropTypes.bool.isRequired,
  handleSortingInvertNumber: PropTypes.func.isRequired,
  sortByInvertNumber: PropTypes.bool.isRequired,
};
