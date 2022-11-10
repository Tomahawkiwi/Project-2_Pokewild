import React from "react";
import { bgGradLightRed } from "../../tools/constants";

function Wilder() {
  return (
    <div className="flex flex-col py-10 text-center items-center justify-center">
      <div className="font-Rajdhani text-black text-xl">
        <h3>Want to go wilder ?</h3>
      </div>
      <div
        className={`${bgGradLightRed} flex justify-center rounded-2xl shadow-custom py-3 w-40 h-16 font-Silkscreen text-white`}
      >
        <button type="button">Fight mode</button>
      </div>
    </div>
  );
}

export default Wilder;
