import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";
import { bgGradLightRed } from "../../../tools/constants";
import PokeButton from "./PokeButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${bgGradLightRed} w-full h-16 px-5 relative flex flex-col items-center align-middle justify-center shadow-custom z-10`}
    >
      <div className="w-full flex items-center align-middle justify-between p-30">
        <PokeButton isOpen={isOpen} handleBurger={handleBurger} />
        <Link className="" onClick={() => setIsOpen(false)} to="/">
          <img
            className="w-50 h-8"
            src="src/assets/navbar/pokewild-logo.png"
            alt="Pokewild logo"
          />
        </Link>
      </div>
      {isOpen && <NavLinks setIsOpen={setIsOpen} />}
    </div>
  );
}
