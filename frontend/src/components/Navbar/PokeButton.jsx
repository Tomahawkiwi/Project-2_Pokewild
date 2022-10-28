/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";

export default function PokeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <img
          onClick={() => setIsOpen(false)}
          src="src/assets/navbar/poke-open.png"
          alt="burger"
          className="w-10"
        />
      ) : (
        <img
          onClick={() => setIsOpen(true)}
          src="src/assets/navbar/poke-close-x2.png"
          alt="burger"
          className="w-10"
        />
      )}
    </div>
  );
}
