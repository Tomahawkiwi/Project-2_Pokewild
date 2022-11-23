import React from "react";

function About() {
  return (
    <div className="bg-white dark:bg-[#AFAFAF]">
      <div className="flex m-5 sm:mx-20 space-x-7 py-6 md:px-5 text-center items-center text-red-700 dark:text-white font-Rajdhani">
        <h2 className="text-xl rounded-md">About Pokewild</h2>
        <p className="text-sm lg:text-base md:hidden">
          Welcome to the Pokewild game site! <br /> Based on the 1st generation
          of Pokémons, you can find here a Pokédex. We also offer you to fight
          against a random opponent chosen by the computer to test your agility.
          Let's start now!
        </p>
        <p className="hidden md:visible md:flex">
          Welcome to the Pokewild game site!
          <br /> Based on the 1st generation of Pokémons, you can find here a
          Pokédex. We also offer you to fight against a random opponent chosen
          by the computer to test your experience and your agility. You can
          choose your battle arena as well as your character. They will be able
          to evolve as they gain experience during the fights. Let's start now!
        </p>
      </div>
    </div>
  );
}

export default About;
