/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from "prop-types";
import PokeOpen from "../../../assets/navbar/poke-open.png";
import PokeClose from "../../../assets/navbar/poke-close-x2.png";

export default function PokeButton(props) {
  const { isOpen, handleBurger } = props;
  return (
    <img
      onClick={handleBurger}
      src={isOpen ? PokeOpen : PokeClose}
      alt="burger"
      className="w-10 md:hidden h-10 cursor-pointer"
    />
  );
}

PokeButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleBurger: PropTypes.func.isRequired,
};
