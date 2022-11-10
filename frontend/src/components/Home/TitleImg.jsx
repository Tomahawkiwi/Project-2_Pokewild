import React from "react";

function TitleImg() {
  return (
    <div className="bg-home bg-cover py-10 lg:h-96">
      <div className="flex flex-col items-center font-Silkscreen text-white">
        <h1 className="w-80 text-3xl">It's time to start your adventure !</h1>{" "}
        <br />
        <h2 className="text-5xl my-8">Welcome</h2>
        <div className="w-80 my-5 shadow-custom lg:w-3/5">
          <label className="relative block">
            <span className="absolute inset-y-0 right-3 h-16 top-0 z-30 flex items-center pl-3">
              <img
                className="w-5"
                src="src/assets/img-home/loupe-home.png"
                alt="search loupe"
              />
            </span>
            <input
              className="rounded-xl z-20 h-16 text-black relative w-full bg-white pl-10 "
              type="text"
              placeholder="  Which pokemon ?"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default TitleImg;
