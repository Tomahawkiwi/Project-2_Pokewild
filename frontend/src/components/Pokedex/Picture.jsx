import React from "react";
import trees from "../../assets/pokedex/pokedex-header.png";
import treesLg from "../../assets/pokedex/pokedex-header-desktop.png";

function Picture() {
  return (
    <div className="w-full p-20 flex flex-col justify-end items-center relative h-[200px] md:h-80 lg:h-96">
      <img
        className="w-full h-full top-0 left-0 object-cover absolute visible md:invisible"
        src={trees}
        alt="trees"
      />
      <img
        className="w-full h-full top-0 left-0 object-cover absolute invisible md:visible"
        src={treesLg}
        alt="trees"
      />
      <h1 className="absolute text-4xl text-white font-Silkscreen md:text-7xl lg:text-8xl">
        Pokedex
      </h1>
    </div>
  );
}

export default Picture;
