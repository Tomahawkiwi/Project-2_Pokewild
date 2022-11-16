/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from "prop-types";

export default function PokeButton(props) {
  const { isOpen, handleBurger } = props;
  return (
    <img
      onClick={handleBurger}
      src={
        isOpen
          ? "src/assets/navbar/poke-open.png"
          : "src/assets/navbar/poke-close-x2.png"
      }
      alt="burger"
      className="w-10 md:hidden h-10"
    />
  );
}

PokeButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleBurger: PropTypes.func.isRequired,
};
