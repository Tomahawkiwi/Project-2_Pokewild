import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Fight from "../../../assets/navbar/logoFight.png";
import Pokedex from "../../../assets/navbar/logoPokedex.png";

export function Switch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="h-full relative flex flex-col items-center justify-center z-50">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            onChange={() => setChecked((state) => !state)}
            checked={checked}
            type="checkbox"
            className="sr-only peer"
            readOnly
          />
          <div
            className={`w-20 test   h-6 bg-customLightRed-endGrad after:bg-fantominus rounded-full peer ${
              checked ? "after:bg-fantominus" : "after:bg-solaroc"
            } after:bg-cover peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:-top-2 after:left-[2px]
             after:bg-gray-300 after:border-full after:rounded-full after:h-10 after:w-10 after:transition-all peer-checked:bg-customLightRed-endGrad after:border-spacing-1`}
          />
        </label>
      </div>
    </div>
  );
}

export const navLinks = [
  {
    linkName: "Pokedex",
    path: "/pokedex",
    image: Pokedex,
    color: "#878787",
    width: "90%",
    fontFamily: "Silkscreen",
    alignItems: "center",
    fontSize: "24px",
  },
  {
    linkName: "Combat",
    path: "/combat",
    image: Fight,
    color: "#AFAFAF",
    width: "80%",
    fontFamily: "Silkscreen",
    alignItems: "center",
    fontSize: "24px",
  },
];

export default function NavLinks(props) {
  const { setIsOpen } = props;

  return (
    <ul className="w-full bottom-0 z-20 transform translate-y-[100%] absolute flex-col flex items-end">
      <div className="w-full flex justify-end flex-col items-end">
        {navLinks.map((item) => (
          <Link
            key={item.linkName}
            className="rounded-bl-2xl p-2 h-24 flex cursor-pointer"
            style={{
              backgroundColor: item.color,
              width: item.width,
              fontFamily: item.fontFamily,
              alignItems: item.alignItems,
              fontSize: item.fontSize,
              flexDirection: item.flexDirection,
            }}
            onClick={() => setIsOpen(false)}
            to={item.path}
          >
            {item.image && (
              <img
                src={item.image}
                className="w-16 ml-3 cursor-pointer"
                alt="logo"
              />
            )}
            <p
              style={{ marginTop: item.marginTop }}
              className="mx-4 align-middle cursor-pointer"
            >
              {item.linkName}
            </p>
          </Link>
        ))}
        <div className="rounded-bl-2xl p-2 h-24 items-center align-middle justify-center font-Rajdhani bg-white flex w-[60%] flex-col">
          <Switch />
          <p>Unleash the darkmode</p>
        </div>
      </div>
    </ul>
  );
}

NavLinks.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
