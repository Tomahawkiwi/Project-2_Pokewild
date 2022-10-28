import React from "react";
import PokeButton from "./PokeButton";

// const navLinks = [
// //   {
// //     id: "homePage",
// //     name: "Welcome",
// //     link: "/",
// //   },
// //   {
// //     id: "pokédex",
// //     name: "Pokédex",
// //     link: "/pokedex",
// //   },
// //   {
// //     id: "fightMode",
// //     name: "Fight Mode",
// //     link: "/fightMode",
// //   },
// //   {
// //     id: "darkMode",
// //     name: "Dark mode",
// //     link: "/darkMode",
// //   },
//  ];

export default function Navbar() {
  return (
    <div className="w-full h-24 bg-customRed">
      <nav className="flex justify-between mx-4 py-7">
        <PokeButton />
        <img
          src="./src/assets/navbar/pokewild-logo.png"
          alt="logo pokewild"
          className="w-48 h-10"
        />
      </nav>
    </div>
  );
}
