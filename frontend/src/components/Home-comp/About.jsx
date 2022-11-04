import React from "react";

function About() {
  return (
    <div>
      <div className="flex m-5 space-x-7 text-center items-center text-red-700 font-Rajdhani">
        <h2 className="text-xl bg-white rounded-md">About Pokewild</h2>
        <p className="text-xs bg-white rounded-md">
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
