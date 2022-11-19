import Bug from "../assets/pokemon_types/bug.png";
import Dark from "../assets/pokemon_types/dark.png";
import Dragon from "../assets/pokemon_types/dragon.png";
import Electric from "../assets/pokemon_types/electric.png";
import Fairy from "../assets/pokemon_types/fairy.png";
import Fighting from "../assets/pokemon_types/fighting.png";
import Fire from "../assets/pokemon_types/fire.png";
import Flying from "../assets/pokemon_types/flying.png";
import Ghost from "../assets/pokemon_types/ghost.png";
import Grass from "../assets/pokemon_types/grass.png";
import Ground from "../assets/pokemon_types/ground.png";
import Ice from "../assets/pokemon_types/ice.png";
import Normal from "../assets/pokemon_types/normal.png";
import Poison from "../assets/pokemon_types/poison.png";
import Psychic from "../assets/pokemon_types/psychic.png";
import Rock from "../assets/pokemon_types/rock.png";
import Steel from "../assets/pokemon_types/steel.png";
import Water from "../assets/pokemon_types/water.png";

const setSecondLogo = (pokemon) => {
  if (!pokemon.types[1]) {
    return <div className="w-0 h-0" />;
  }
  if (pokemon.types[1].type.name === "bug") {
    return (
      <div className="bg-[#91C12F] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#91C12F] h-5 w-5 rounded-tr-lg"
          src={Bug}
          alt="type bug"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "dark") {
    return (
      <div className="bg-[#5A5465] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5A5465] h-5 w-5 rounded-tr-lg"
          src={Dark}
          alt="type dark"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "dragon") {
    return (
      <div className="bg-[#0B6DC3] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#0B6DC3] h-5 w-5 rounded-tr-lg"
          src={Dragon}
          alt="type dragon"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "electric") {
    return (
      <div className="bg-[#F4D23C] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#F4D23C] h-5 w-5 rounded-tr-lg"
          src={Electric}
          alt="type electric"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "fairy") {
    return (
      <div className="bg-[#EC8FE6] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#EC8FE6] h-5 w-5 rounded-tr-lg"
          src={Fairy}
          alt="type fairy"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "fighting") {
    return (
      <div className="bg-[#CE416B] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#CE416B] h-5 w-5 rounded-tr-lg"
          src={Fighting}
          alt="type fighting"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "fire") {
    return (
      <div className="bg-[#FF9D55] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#FF9D55] h-5 w-5 rounded-tr-lg"
          src={Fire}
          alt="type fire"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "flying") {
    return (
      <div className="bg-[#8FA9DE] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#8FA9DE] h-5 w-5 rounded-tr-lg"
          src={Flying}
          alt="type flying"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "ghost") {
    return (
      <div className="bg-[#5269AD] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5269AD] h-5 w-5 rounded-tr-lg"
          src={Ghost}
          alt="type ghost"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "grass") {
    return (
      <div className="bg-[#63BC5A] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img className="h-5 w-5" src={Grass} alt="type grass" />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "ground") {
    return (
      <div className="bg-[#D97845] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#D97845] h-5 w-5 rounded-tr-lg"
          src={Ground}
          alt="type ground"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "ice") {
    return (
      <div className="bg-[#73CEC0] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#73CEC0] h-5 w-5 rounded-tr-lg"
          src={Ice}
          alt="type ice"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "normal") {
    return (
      <div className="bg-[#919AA2] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#919AA2] h-5 w-5 rounded-tr-lg"
          src={Normal}
          alt="type normal"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "poison") {
    return (
      <div className="bg-[#AA6BC8] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#AA6BC8] h-5 w-5 rounded-tr-lg"
          src={Poison}
          alt="type poison"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "psychic") {
    return (
      <div className="bg-[#FA7179] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#FA7179] h-5 w-5 rounded-tr-lg"
          src={Psychic}
          alt="type psychic"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "rock") {
    return (
      <div className="bg-[#C5B78C] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#C5B78C] h-5 w-5 rounded-tr-lg"
          src={Rock}
          alt="type rock"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "steel") {
    return (
      <div className="bg-[#5A8EA2] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5A8EA2] h-5 w-5 rounded-tr-lg"
          src={Steel}
          alt="type steel"
        />
      </div>
    );
  }
  if (pokemon.types[1].type.name === "water") {
    return (
      <div className="bg-[#5090D6] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5090D6] h-5 w-5 rounded-tr-lg"
          src={Water}
          alt="type water"
        />
      </div>
    );
  }
  return "";
};

export default setSecondLogo;
