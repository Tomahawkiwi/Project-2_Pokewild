import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";
import { bgGradLightRed } from "../../../tools/constants";
import PokeButton from "./PokeButton";
import Logo from "../../../assets/navbar/pokewild-logo.png";
import NavItems from "./NavItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isOpen]);

  return (
    <div
      className={`${bgGradLightRed} dark:bg-gradient-to-br dark:from-customDarkRed dark:to-customDarkRed-endGrad w-full h-16 px-5 relative flex flex-col items-center align-middle justify-center shadow-custom z-10`}
    >
      <div className="w-full flex flex-row md:flex-row-reverse font-Silkscreen text-2xl text-white items-center align-middle justify-between p-30">
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
    </div>
  );
}
