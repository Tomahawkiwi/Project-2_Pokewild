import React from "react";

function About() {
  return (
    <div>
      <div className="flex relative m-5 space-x-7 text-center items-center text-red-700 font-Rajdhani lg:mx-80">
        <h2 className="text-xl bg-white rounded-md">About Pokewild</h2>
        <p className="text-md bg-white rounded-md lg:text-xl">
          Welcome to the Pokewild game site! Based on the 1st generation of
          Pokémons, you can find here a Pokédex. We also offer you to fight
          against a random opponent chosen by the computer to test your
          experience and your agility. You can choose your battle arena as well
          as your character. They will be able to evolve as they gain experience
          during the fights. Let's start now!
        </p>
      </div>
    </div>
  );
}

export default About;
