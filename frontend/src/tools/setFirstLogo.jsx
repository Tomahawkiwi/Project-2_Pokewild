const setFirstLogo = (pokemon) => {
  if (pokemon.types["0"].type.name === "bug") {
    return (
      <img
        className="bg-[#91C12F] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Bug.png"
        alt="type bug"
      />
    );
  }
  if (pokemon.types["0"].type.name === "dark") {
    return (
      <img
        className="bg-[#5A5465] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Dark.png"
        alt="type dark"
      />
    );
  }
  if (pokemon.types["0"].type.name === "dragon") {
    return (
      <img
        className="bg-[#0B6DC3] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Dragon.png"
        alt="type dragon"
      />
    );
  }
  if (pokemon.types["0"].type.name === "electric") {
    return (
      <img
        className="bg-[#F4D23C] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Electric.png"
        alt="type electric"
      />
    );
  }
  if (pokemon.types["0"].type.name === "fairy") {
    return (
      <img
        className="bg-[#EC8FE6] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Fairy.png"
        alt="type fairy"
      />
    );
  }
  if (pokemon.types["0"].type.name === "fighting") {
    return (
      <img
        className="bg-[#CE416B] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Fighting.png"
        alt="type fighting"
      />
    );
  }
  if (pokemon.types["0"].type.name === "fire") {
    return (
      <img
        className="bg-[#FF9D55] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Fire.png"
        alt="type fire"
      />
    );
  }
  if (pokemon.types["0"].type.name === "flying") {
    return (
      <img
        className="bg-[#8FA9DE] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Flying.png"
        alt="type flying"
      />
    );
  }
  if (pokemon.types["0"].type.name === "ghost") {
    return (
      <img
        className="bg-[#5269AD] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Ghost.png"
        alt="type ghost"
      />
    );
  }
  if (pokemon.types["0"].type.name === "grass") {
    return (
      <img
        className="bg-[#63BC5A] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Grass.png"
        alt="type grass"
      />
    );
  }
  if (pokemon.types["0"].type.name === "ground") {
    return (
      <img
        className="bg-[#D97845] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Ground.png"
        alt="type ground"
      />
    );
  }
  if (pokemon.types["0"].type.name === "ice") {
    return (
      <img
        className="bg-[#73CEC0] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Ice.png"
        alt="type ice"
      />
    );
  }
  if (pokemon.types["0"].type.name === "normal") {
    return (
      <img
        className="bg-[#919AA2] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Normal.png"
        alt="type normal"
      />
    );
  }
  if (pokemon.types["0"].type.name === "poison") {
    return (
      <img
        className="bg-[#AA6BC8] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Poison.png"
        alt="type poison"
      />
    );
  }
  if (pokemon.types["0"].type.name === "psychic") {
    return (
      <img
        className="bg-[#FA7179] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Psychic.png"
        alt="type psychic"
      />
    );
  }
  if (pokemon.types["0"].type.name === "rock") {
    return (
      <img
        className="bg-[#C5B78C] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Rock.png"
        alt="type rock"
      />
    );
  }
  if (pokemon.types["0"].type.name === "steel") {
    return (
      <img
        className="bg-[#5A8EA2] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Steel.png"
        alt="type steel"
      />
    );
  }
  if (pokemon.types["0"].type.name === "water") {
    return (
      <img
        className="bg-[#5090D6] h-5 w-5 rounded-tr-lg"
        src="src/assets/pokemon_types/Water.png"
        alt="type water"
      />
    );
  }
  return <div>{pokemon.types["0"].type.name}</div>;
};

export default setFirstLogo;
