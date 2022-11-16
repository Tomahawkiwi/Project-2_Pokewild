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
    <div>
      <div className={`${bgGradLightGrey} h-[80vh] w-1/2 absolute`}>
        <div className="flex flex-col">
          <button className="m-2" type="button" onClick={handleOpenTypes}>
            Type
          </button>
          <div className="flex flex-row flex-wrap justify-between m-5">
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
          <button className="m-2" type="button" onClick={handleOpenFight}>
            Available to fight
          </button>
          {fightIsOpen && (
            <Fight
              handleCheckboxFight={handleCheckboxFight}
              fighterAvailable={fighterAvailable}
            />
          )}
        </div>
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
