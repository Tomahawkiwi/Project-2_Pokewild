import React from "react";
import { bgGradLightRed } from "../../tools/constants";

function HomeButtons() {
  return (
    <div className="flex m-8 space-x-7 py-3 justify-center text-white font-Silkscreen text-xl">
      <div className={`${bgGradLightRed} h-24 rounded-xl md:h-16`}>
        <button type="button">Get a random pokemon</button>
      </div>
      <div className={`${bgGradLightRed} h-24 rounded-xl md:h-16`}>
        <button type="button">View all 151 pokemon</button>
      </div>
    </div>
  );
}

export default HomeButtons;
