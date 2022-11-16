import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";
import { bgGradLightRed } from "../../../tools/constants";
import PokeButton from "./PokeButton";
import NavItems from "./NavItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${bgGradLightRed} w-full h-16 px-5 relative flex flex-col items-center align-middle justify-center z-10`}
    >
      <div className="w-full flex flex-row md:flex-row-reverse font-Silkscreen text-2xl text-white items-center align-middle justify-between p-30">
        <PokeButton isOpen={isOpen} handleBurger={handleBurger} />
        <NavItems />
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
