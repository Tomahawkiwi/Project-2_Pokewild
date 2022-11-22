/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "@jidayyy/useonclickoutside";
import { bgGradLightRed } from "../../../tools/constants";
import PokeButton from "./PokeButton";
import Logo from "../../../assets/navbar/pokewild-logo.png";
import NavItems from "./NavItems";
import NavLinks from "./Navlinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      className={`${bgGradLightRed} w-full h-16 px-5 relative flex flex-col items-center align-middle justify-center shadow-custom z-20`}
    >
      <div className="w-full z-20 flex flex-row md:flex-row-reverse font-Silkscreen text-2xl text-white items-center align-middle justify-between p-30">
        <PokeButton isOpen={isOpen} handleBurger={handleBurger} />
        <NavItems />
        <Link className="" onClick={() => setIsOpen(false)} to="/">
          <img
            className="w-50 h-8 hover:cursor-pointer"
            src={Logo}
            alt="Pokewild logo"
          />
        </Link>
      </div>
      {isOpen && <NavLinks setIsOpen={setIsOpen} />}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed left-0 w-full z-10 top-0 h-screen bg-black bg-opacity-50"
        />
      )}
    </div>
  );
}
