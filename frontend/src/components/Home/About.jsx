import React from "react";

function About() {
  return (
    <div className="bg-white">
      <div className="flex m-5 space-x-7 py-6 text-center items-center text-red-700 font-Rajdhani">
        <h2 className="text-xl rounded-md">About Pokewild</h2>
        <p className="text-sm text-left lg:text-xl">
          Welcome to the Pokewild game site! Based on the 1st generation of
          Pokémons, you can find here a Pokédex. We also offer you to fight
          against a random opponent chosen by the computer to test your agility.
          Let's start now!
        </p>
      </div>
    </div>
  );
}

export default About;
