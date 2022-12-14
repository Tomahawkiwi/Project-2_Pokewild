import React from "react";
import SearchbarSelect from "../Layout/Searchbar/Searchbar";
import Switch from "../Layout/Switch/Switch";

function TitleImg() {
  return (
    <div className="bg-home dark:bg-darkhome bg-cover py-10 lg:h-96">
      <div>
        <div className="hidden md:flex justify-end mr-5">
          <Switch />
        </div>
        <div className="flex flex-col items-center font-Silkscreen text-white">
          <h1 className="w-80 text-3xl text-center md:w-full">
            It's time to start your adventure !
          </h1>
          <br />
          <h2 className="text-5xl my-8">Welcome</h2>
          <div className="w-80 my-5 shadow-custom rounded-xl lg:w-3/5">
            <label className="relative block" htmlFor="searchInput">
              <span className="absolute inset-y-0 right-3 h-8 top-0 z-30 flex items-center pl-3">
                <img
                  className="w-5"
                  src="/img-home/loupe-home.png"
                  alt="search loupe"
                />
              </span>
              <SearchbarSelect />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleImg;
