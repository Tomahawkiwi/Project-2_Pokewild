import React from "react";
import PropTypes from "prop-types";
import { bgGradLightGrey } from "../../../tools/constants";

function SortingList({ handleSortingName, sortByName }) {
  return (
    <div>
      <div className={`${bgGradLightGrey} h-[20vh] w-1/2 absolute`}>
        <div className="m-2 flex flex-row items-center justify-evenly font-Rajdhani">
          <input
            type="checkbox"
            onChange={handleSortingName}
            checked={sortByName}
          />
          Name (a-z)
        </div>
      </div>
    </div>
  );
}

export default SortingList;

SortingList.propTypes = {
  handleSortingName: PropTypes.func.isRequired,
  sortByName: PropTypes.bool.isRequired,
};
