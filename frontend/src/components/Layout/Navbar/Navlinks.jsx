import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Fight from "../../../assets/navbar/logoFight.png";
import Pokedex from "../../../assets/navbar/logoPokedex.png";
import Switch from "../Switch/Switch";

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
