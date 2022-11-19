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

const setLogo = (type) => {
  if (type === "bug") {
    return (
      <div className="bg-[#91C12F] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Bug} alt="type bug" />
      </div>
    );
  }
  if (type === "dark") {
    return (
      <div className="bg-[#5A5465] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Dark} alt="type dark" />
      </div>
    );
  }
  if (type === "dragon") {
    return (
      <div className="bg-[#0B6DC3] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Dragon} alt="type dragon" />
      </div>
    );
  }
  if (type === "electric") {
    return (
      <div className="bg-[#F4D23C] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Electric} alt="type electric" />
      </div>
    );
  }
  if (type === "fairy") {
    return (
      <div className="bg-[#EC8FE6] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Fairy} alt="type fairy" />
      </div>
    );
  }
  if (type === "fighting") {
    return (
      <div className="bg-[#CE416B] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Fighting} alt="type fighting" />
      </div>
    );
  }
  if (type === "fire") {
    return (
      <div className="bg-[#FF9D55] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Fire} alt="type fire" />
      </div>
    );
  }
  if (type === "flying") {
    return (
      <div className="bg-[#8FA9DE] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Flying} alt="type flying" />
      </div>
    );
  }
  if (type === "ghost") {
    return (
      <div className="bg-[#5269AD] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Ghost} alt="type ghost" />
      </div>
    );
  }
  if (type === "grass") {
    return (
      <div className="bg-[#63BC5A] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Grass} alt="type grass" />
      </div>
    );
  }
  if (type === "ground") {
    return (
      <div className="bg-[#D97845] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Ground} alt="type ground" />
      </div>
    );
  }
  if (type === "ice") {
    return (
      <div className="bg-[#73CEC0] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Ice} alt="type ice" />
      </div>
    );
  }
  if (type === "normal") {
    return (
      <div className="bg-[#919AA2] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Normal} alt="type normal" />
      </div>
    );
  }
  if (type === "poison") {
    return (
      <div className="bg-[#AA6BC8] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Poison} alt="type poison" />
      </div>
    );
  }
  if (type === "psychic") {
    return (
      <div className="bg-[#FA7179] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Psychic} alt="type psychic" />
      </div>
    );
  }
  if (type === "rock") {
    return (
      <div className="bg-[#C5B78C] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Rock} alt="type rock" />
      </div>
    );
  }
  if (type === "steel") {
    return (
      <div className="bg-[#5A8EA2] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Steel} alt="type steel" />
      </div>
    );
  }
  if (type === "water") {
    return (
      <div className="bg-[#5090D6] h-7 w-7 rounded-full flex justify-center items-center">
        <img className="h-5 w-5" src={Water} alt="type water" />
      </div>
    );
  }
  if (type === "shadow" || type === "unknown") {
    return <div className="hidden" />;
  }
  return <div>{type}</div>;
};

export default setLogo;
