import bug from "../assets/pokemon_types/bug.png";
import dark from "../assets/pokemon_types/dark.png";
import dragon from "../assets/pokemon_types/dragon.png";
import electric from "../assets/pokemon_types/electric.png";
import fairy from "../assets/pokemon_types/fairy.png";
import fighting from "../assets/pokemon_types/fighting.png";
import fire from "../assets/pokemon_types/fire.png";
import flying from "../assets/pokemon_types/flying.png";
import ghost from "../assets/pokemon_types/ghost.png";
import grass from "../assets/pokemon_types/grass.png";
import ground from "../assets/pokemon_types/ground.png";
import ice from "../assets/pokemon_types/ice.png";
import normal from "../assets/pokemon_types/normal.png";
import poison from "../assets/pokemon_types/poison.png";
import psychic from "../assets/pokemon_types/psychic.png";
import rock from "../assets/pokemon_types/rock.png";
import steel from "../assets/pokemon_types/steel.png";
import water from "../assets/pokemon_types/water.png";

const pokemonTypes = [
  {
    name: "bug",
    img: bug,
    color: "91C12F",
  },

  {
    name: "dark",
    img: dark,
    color: "5A5465",
  },
  {
    name: "dragon",
    img: dragon,
    color: "0B6DC3",
  },
  {
    name: "electric",
    img: electric,
    color: "F4D23C",
  },
  {
    name: "fairy",
    img: fairy,
    color: "EC8FE6",
  },
  {
    name: "fighting",
    img: fighting,
    color: "CE416B",
  },
  {
    name: "fire",
    img: fire,
    color: "FF9D55",
  },
  {
    name: "flying",
    img: flying,
    color: "8FA9DE",
  },
  {
    name: "ghost",
    img: ghost,
    color: "5269AD",
  },
  {
    name: "grass",
    img: grass,
    color: "63BC5A",
  },
  {
    name: "ground",
    img: ground,
    color: "D97845",
  },
  {
    name: "ice",
    img: ice,
    color: "73CEC0",
  },
  {
    name: "normal",
    img: normal,
    color: "919AA2",
  },
  {
    name: "poison",
    img: poison,
    color: "AA6BC8",
  },
  {
    name: "psychic",
    img: psychic,
    color: "FA7179",
  },
  {
    name: "rock",
    img: rock,
    color: "C5B78C",
  },
  {
    name: "steel",
    img: steel,
    color: "5A8EA2",
  },
  {
    name: "water",
    img: water,
    color: "5090D6",
  },
];

const setLogo = (type) => {
  for (const pokemonType of pokemonTypes) {
    if (type === pokemonType.name) {
      return (
        <div
          className={`bg-[#${pokemonType.color}] h-7 w-7 rounded-full flex justify-center items-center`}
        >
          <img
            className="h-5 w-5"
            src={pokemonType.img}
            alt={`type ${pokemonType.name}`}
          />
        </div>
      );
    }
  }

  return <div>{type}</div>;
};

export default setLogo;
