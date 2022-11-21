import React from "react";
import SearchbarSelect from "../Layout/Searchbar/Searchbar";

function Picture() {
  return (
    <div className="bg-pokedexheader sm:bg-pokedexheaderlg bg-cover w-full p-20 flex flex-col justify-end items-center relative h-[200px] sm:h-80 lg:h-96">
      <h1 className="absolute text-4xl text-white font-Silkscreen sm:text-7xl lg:text-8xl">
        Pokedex
      </h1>
      <div className="w-72 sm:w-80 md:w-full flex justify-center shadow-custom rounded-xl relative">
        <label className="absolute block" htmlFor="searchInput">
          <span className="absolute inset-y-0 right-3 h-8 top-0 z-30 flex items-center pl-3">
            <img
              className="w-5"
              src="../src/assets/img-home/loupe-home.png"
              alt="search loupe"
            />
          </span>
          <SearchbarSelect />
        </label>
      </div>
    </div>
  );
}

export default Picture;
