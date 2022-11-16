import React from "react";

function Picture() {
  return (
    <div className="w-full p-20 flex flex-col justify-end items-center relative h-[200px] md:h-80 lg:h-96">
      <img
        className="w-full h-full top-0 left-0 object-cover absolute md:invisible"
        src="src/assets/pokedex/pokedex-header.png"
        alt="trees"
      />
      <img
        className="w-full h-full top-0 left-0 object-cover absolute invisible md:visible"
        src="src/assets/pokedex/pokedex-header-desktop.png"
        alt="trees"
      />
      <h1 className="absolute text-4xl text-white font-Silkscreen md:text-7xl lg:text-8xl">
        Pokédex
      </h1>
    </div>
  );
}

export default Picture;
