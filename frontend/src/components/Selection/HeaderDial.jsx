import PropTypes from "prop-types";
import React from "react";
import Switch from "../Layout/Switch/Switch";
import Dialbox from "./Dialbox";

function HeaderDial({
  dialbox,
  setDialbox,
  isChoiceValidated,
  setIsFightBegin,
  isFightBegin,
}) {
  return (
    <div>
      <div className="hidden md:flex justify-end mr-5 py-10">
        <Switch />
      </div>
      <div className="h-fit mt-14">
        <div className="relative object-cover">
          <h1 className="absolute w-full bottom-full text-center font-Silkscreen text-4xl">
            TIME TO FIGHT
          </h1>
          <img
            src="/src/assets/combat-selection/bg-flames.png"
            alt="Flames background"
            className="w-full max-h-44 object-cover"
          />
        </div>
        <Dialbox
          dialbox={dialbox}
          setDialbox={setDialbox}
          isChoiceValidated={isChoiceValidated}
          setIsFightBegin={setIsFightBegin}
          isFightBegin={isFightBegin}
        />
      </div>
    </div>
  );
}

HeaderDial.propTypes = {
  dialbox: PropTypes.string.isRequired,
  setDialbox: PropTypes.func.isRequired,
  isChoiceValidated: PropTypes.bool.isRequired,
  setIsFightBegin: PropTypes.func.isRequired,
  isFightBegin: PropTypes.bool.isRequired,
};

export default HeaderDial;
