import { useState } from "react";
import PropTypes from "prop-types";

/* eslint-disable react/jsx-no-useless-fragment */
function Switch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center ">
      <div className="flex">
        <label className="inline-flex  relative items-center mr-5 cursor-pointer">
          <input
            onChange={() => setChecked((state) => !state)}
            checked={checked}
            type="checkbox"
            className="sr-only peer"
            readOnly
          />
          <div
            className={`w-20 test  h-6 bg-customLightRed-endGrad rounded-full peer ${
              checked ? "after:bg-fantominus" : "after:bg-dark"
            } after:bg-cover  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:-top-2 after:left-[2px] after:bg-gray-300 after:border-full after:rounded-full after:h-10 after:w-10 after:transition-all peer-checked:bg-customLightRed-endGrad after:border-spacing-1`}
          >
            {/* <img src="src/assets/navbar/logoDarkMode.png" alt="logo" /> */}
          </div>
        </label>
      </div>
    </div>
  );
}

const navLinks = [
  {
    linkName: "Pokédex",
    path: "/pokedex",
    image: "src/assets/navbar/logoPokedex.png",
    color: "#878787",
    width: "90%",
  },
  {
    linkName: "Combat",
    path: "/combat",
    image: "src/assets/navbar/logoFight.png",
    color: "#AFAFAF",
    width: "80%",
  },
  {
    linkName: "Unleash dark mode",
    path: "/darkMode",
    color: "white",
    width: "70%",
    switch: Switch,
  },
];

export default function NavLinks(props) {
  const { isOpen } = props;
  return (
    <>
      {isOpen && (
        <ul className="w-full top-16 absolute bg-opacity-70 bg-black h-screen flex-col flex items-end">
          {navLinks.map((item) => (
            <div
              style={{ backgroundColor: item.color, width: item.width }}
              className="rounded-bl-2xl p-2 h-24 flex"
            >
              {item.image && <img src={item.image} alt="logo" />}
              {item.linkName}
              {item.switch && item.switch()}
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

NavLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
