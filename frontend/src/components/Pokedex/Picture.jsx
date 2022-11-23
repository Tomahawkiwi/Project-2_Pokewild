import React from "react";
import SearchbarSelect from "../Layout/Searchbar/Searchbar";
import Switch from "../Layout/Switch/Switch";

function Picture() {
  return (
    <div className="bg-pokedexheader dark:bg-darkpokedexheader sm:bg-pokedexheaderlg dark:sm:bg-darkpokedexheaderlg bg-cover w-full relative h-[200px] sm:h-80 lg:h-96">
      <div className="hidden md:flex justify-end py-10 mr-5">
        <Switch />
      </div>
      <div className="flex flex-col items-center p-20 sm:p-36 md:p-16">
        <h1 className="text-4xl text-white font-Silkscreen sm:text-7xl lg:text-8xl">
          Pokedex
        </h1>
        <div className="w-72 sm:w-80 md:w-full flex justify-center shadow-custom rounded-xl relative">
          <label className="absolute block" htmlFor="searchInput">
            <span className="absolute inset-y-0 right-3 h-8 top-0 z-[2] flex items-center pl-3">
              <img
                className="w-5"
                src="..//img-home/loupe-home.png"
                alt="search loupe"
              />
            </span>
            <div className="relative z-0">
              <SearchbarSelect />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Picture;
