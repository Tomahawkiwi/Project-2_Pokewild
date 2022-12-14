import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { bgGradLightGrey } from "../../../tools/constants";
import Fight from "./Fight";
import Types from "./Types";

function FiltersList({
  handleCheckbox,
  filter,
  handleCheckboxFight,
  fighterAvailable,
}) {
  const [typeIsOpen, setTypeIsOpen] = useState(false);
  const handleOpenTypes = () => {
    setTypeIsOpen(!typeIsOpen);
  };
  const [fightIsOpen, setFightIsOpen] = useState(false);
  const handleOpenFight = () => {
    setFightIsOpen(!fightIsOpen);
  };

  const [type, setType] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => res.data)
      .then((data) => {
        setType(data.results);
      });
  }, []);

  return (
    <div
      className={`${bgGradLightGrey} h-[80vh] w-1/2 absolute md:w-full md:relative md:h-max`}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center">
          <button
            className="m-2 flex border-solid w-5/6"
            type="button"
            onClick={handleOpenTypes}
          >
            Type
          </button>
          <button
            className="m-2 flex w-1/6 text-3xl"
            type="button"
            onClick={handleOpenTypes}
          >
            {typeIsOpen ? "-" : "+"}
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly m-5 md:max-w-fit">
          {typeIsOpen &&
            type.map((item) => (
              <Types
                key={item.name}
                type={item.name}
                handleCheckbox={handleCheckbox}
                filter={filter}
              />
            ))}
        </div>
        <div className="flex items-center">
          <button
            className="m-2 flex w-5/6"
            type="button"
            onClick={handleOpenFight}
          >
            Available to fight
          </button>
          <button
            className="m-2 flex w-1/6 text-3xl"
            type="button"
            onClick={handleOpenFight}
          >
            {fightIsOpen ? "-" : "+"}
          </button>
        </div>
        {fightIsOpen && (
          <Fight
            handleCheckboxFight={handleCheckboxFight}
            fighterAvailable={fighterAvailable}
          />
        )}
      </div>
    </div>
  );
}

export default FiltersList;

FiltersList.propTypes = {
  handleCheckbox: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleCheckboxFight: PropTypes.func.isRequired,
  fighterAvailable: PropTypes.bool.isRequired,
};
