import Bug from "../../../assets/pokemon_types/Bug.png";
import Dark from "../../../assets/pokemon_types/Dark.png";
import Dragon from "../../../assets/pokemon_types/Dragon.png";
import Electric from "../../../assets/pokemon_types/Electric.png";
import Fairy from "../../../assets/pokemon_types/Fairy.png";
import Fighting from "../../../assets/pokemon_types/Fighting.png";
import Fire from "../../../assets/pokemon_types/Fire.png";
import Flying from "../../../assets/pokemon_types/Flying.png";
import Ghost from "../../../assets/pokemon_types/Ghost.png";
import Grass from "../../../assets/pokemon_types/Grass.png";
import Ground from "../../../assets/pokemon_types/Ground.png";
import Ice from "../../../assets/pokemon_types/Ice.png";
import Normal from "../../../assets/pokemon_types/Normal.png";
import Poison from "../../../assets/pokemon_types/Poison.png";
import Psychic from "../../../assets/pokemon_types/Psychic.png";
import Rock from "../../../assets/pokemon_types/Rock.png";
import Steel from "../../../assets/pokemon_types/Steel.png";
import Water from "../../../assets/pokemon_types/Water.png";

const setFirstLogoFocus = (pokemon) => {
  if (pokemon.types["0"].type.name === "bug") {
    return (
      <div className="bg-[#91C12F] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#91C12F] h-15 w-15 rounded-full"
          src={Bug}
          alt="type bug"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "dark") {
    return (
      <div className="bg-[#5A5465] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#5A5465] h-15 w-15 rounded-full"
          src={Dark}
          alt="type dark"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "dragon") {
    return (
      <div className="bg-[#0B6DC3] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#0B6DC3] h-15 w-15 rounded-full"
          src={Dragon}
          alt="type dragon"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "electric") {
    return (
      <div className="bg-[#F4D23C] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#F4D23C] h-15 w-15 rounded-full"
          src={Electric}
          alt="type electric"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "fairy") {
    return (
      <div className="bg-[#EC8FE6] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#EC8FE6] h-15 w-15 rounded-full"
          src={Fairy}
          alt="type fairy"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "fighting") {
    return (
      <div className="bg-[#CE416B] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#CE416B] h-15 w-15 rounded-full"
          src={Fighting}
          alt="type fighting"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "fire") {
    return (
      <div className="bg-[#FF9D55] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#FF9D55] h-15 w-15 rounded-full"
          src={Fire}
          alt="type fire"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "flying") {
    return (
      <div className="bg-[#8FA9DE] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#8FA9DE] h-15 w-15 rounded-full"
          src={Flying}
          alt="type flying"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "ghost") {
    return (
      <div className="bg-[#5269AD] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#5269AD] h-15 w-15 rounded-full"
          src={Ghost}
          alt="type ghost"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "grass") {
    return (
      <div className="bg-[#63BC5A] h-20 w-20 rounded-full flex justify-center items-center">
        <img className="h-15 w-15 rounded-full" src={Grass} alt="type grass" />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "ground") {
    return (
      <div className="bg-[#D97845] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#D97845] h-15 w-15 rounded-full"
          src={Ground}
          alt="type ground"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "ice") {
    return (
      <div className="bg-[#73CEC0] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#73CEC0] h-15 w-15 rounded-full"
          src={Ice}
          alt="type ice"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "normal") {
    return (
      <div className="bg-[#919AA2] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#919AA2] h-15 w-15 rounded-full"
          src={Normal}
          alt="type normal"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "poison") {
    return (
      <div className="bg-[#AA6BC8] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#AA6BC8] h-15 w-15 rounded-full"
          src={Poison}
          alt="type poison"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "psychic") {
    return (
      <div className="bg-[#FA7179] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#FA7179] h-15 w-15 rounded-full"
          src={Psychic}
          alt="type psychic"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "rock") {
    return (
      <div className="bg-[#C5B78C] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#C5B78C] h-15 w-15 rounded-full"
          src={Rock}
          alt="type rock"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "steel") {
    return (
      <div className="bg-[#5A8EA2] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#5A8EA2] h-15 w-15 rounded-full"
          src={Steel}
          alt="type steel"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "water") {
    return (
      <div className="bg-[#5090D6] h-20 w-20 rounded-full flex justify-center items-center">
        <img
          className="bg-[#5090D6] h-15 w-15 rounded-full"
          src={Water}
          alt="type water"
        />
      </div>
    );
  }
  return <div>{pokemon.types["0"].type.name}</div>;
};

export default setFirstLogoFocus;
