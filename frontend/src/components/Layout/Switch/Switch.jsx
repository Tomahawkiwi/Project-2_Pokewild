import React, { useState } from "react";

function Switch() {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleCheckbox = () => {
    setChecked((state) => !state);
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="h-full relative flex flex-col items-center justify-center z-50">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5">
          <input
            onChange={handleCheckbox}
            checked={checked}
            type="checkbox"
            className="sr-only peer"
            readOnly
          />
          <div
            className={`w-20 h-6 bg-customLightRed-endGrad after:bg-fantominus rounded-full peer ${
              checked ? "after:bg-solaroc" : "after:bg-fantominus"
            } after:bg-cover peer-focus:ring-green-300 after:cursor-pointer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:-top-2
               after:bg-gray-300 after:border-full after:rounded-full after:h-10 after:w-10 after:transition-all peer-checked:bg-customLightRed-endGrad after:border-spacing-1`}
          />
        </label>
      </div>
    </div>
  );
}

export default Switch;
