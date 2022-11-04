import React from "react";

function Picture() {
  return (
    <div>
      <img
        className="w-full relative"
        src="src/assets/pokedex/pokedex-header.png"
        alt="trees"
      />
      <h1 className="absolute text-4xl text-[#FFFFFF] font-Silkscreen translate-x-2/4 translate-y-[-250%] md:text-7xl md:translate-x-[60%] lg:text-8xl lg:translate-x-[54%]">
        Pokédex
      </h1>
    </div>
  );
}

export default Picture;
