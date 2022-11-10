import React from "react";

function About() {
  return (
    <div className="bg-white">
      <div className="flex m-5 space-x-7 text-center items-center text-red-700 font-Rajdhani lg:mx-80">
        <h2 className="text-xl rounded-md">About Pokewild</h2>
        <p className="sm:text-md lg:text-xl">
          Welcome to the Pokewild game site! Based on the 1st generation of
          Pokémons, you can find here a Pokédex. We also offer you to fight
          against a random opponent chosen by the computer to test your
          experience and your agility.They will be able to evolve as they gain
          experience during the fights. Let's start now!
        </p>
      </div>
    </div>
  );
}

export default About;
