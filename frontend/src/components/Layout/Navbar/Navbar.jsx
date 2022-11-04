import React, { useState } from "react";
import NavLinks from "./Navlinks";
import { bgGradLightRed } from "../../../tools/constants";
import PokeButton from "./PokeButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${bgGradLightRed} w-full h-16 px-5 relative flex flex-col items-center align-middle justify-center z-10`}
    >
      <div className="w-full flex items-center align-middle justify-between p-30">
        <PokeButton isOpen={isOpen} handleBurger={handleBurger} />
        <img
          className="w-28 h-9"
          src="src/assets/navbar/pokewild-logo.png"
          alt="Pokewild logo"
        />
      </div>
      <NavLinks isOpen={isOpen} />
    </div>
  );
}
