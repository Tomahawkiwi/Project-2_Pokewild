import React from "react";

function TitleImg() {
  return (
    <div>
      <div className="absolute w-full h-32">
        <img src="./src/assets/img-home/bg-img-home.png" alt="bg home" />
      </div>
      <div className="relative font-Silkscreen text-white text-center">
        <h1 className="text-2xl">It's time to start your adventure !</h1>
        <br />
        <h2 className="relative text-5xl my-5 rounded-xl">Welcome</h2>
        <input
          className="relative mb-5"
          type="text"
          placeholder="Which pokemon ?"
        />
      </div>
    </div>
  );
}

export default TitleImg;
