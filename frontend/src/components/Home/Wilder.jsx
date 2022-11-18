import React from "react";
import { Link } from "react-router-dom";
import CombatSelection from "../../pages/Combat_selection";
import { bgGradLightRed } from "../../tools/constants";

function Wilder() {
  return (
    <div className="flex flex-col py-4 text-center items-center justify-center">
      <div className="font-Rajdhani text-black text-2xl">
        <h3>Want to get wilder ?</h3>
      </div>
      <div
        className={`${bgGradLightRed} flex justify-center items-center rounded-2xl shadow-custom mt-7 py-3 w-40 h-16 font-Silkscreen text-white`}
      >
        <Link to="/combat" element={<CombatSelection />}>
          <button type="button">Fight mode</button>
        </Link>
      </div>
    </div>
  );
}

export default Wilder;
