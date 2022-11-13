const setFirstLogo = (pokemon) => {
  if (pokemon.types["0"].type.name === "bug") {
    return (
      <div className="bg-[#91C12F] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#91C12F] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Bug.png"
          alt="type bug"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "dark") {
    return (
      <div className="bg-[#5A5465] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5A5465] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Dark.png"
          alt="type dark"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "dragon") {
    return (
      <div className="bg-[#0B6DC3] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#0B6DC3] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Dragon.png"
          alt="type dragon"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "electric") {
    return (
      <div className="bg-[#F4D23C] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#F4D23C] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Electric.png"
          alt="type electric"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "fairy") {
    return (
      <div className="bg-[#EC8FE6] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#EC8FE6] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Fairy.png"
          alt="type fairy"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "fighting") {
    return (
      <div className="bg-[#CE416B] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#CE416B] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Fighting.png"
          alt="type fighting"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "fire") {
    return (
      <div className="bg-[#FF9D55] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#FF9D55] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Fire.png"
          alt="type fire"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "flying") {
    return (
      <div className="bg-[#8FA9DE] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#8FA9DE] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Flying.png"
          alt="type flying"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "ghost") {
    return (
      <div className="bg-[#5269AD] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5269AD] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Ghost.png"
          alt="type ghost"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "grass") {
    return (
      <div className="bg-[#63BC5A] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/Grass.png"
          alt="type grass"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "ground") {
    return (
      <div className="bg-[#D97845] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#D97845] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Ground.png"
          alt="type ground"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "ice") {
    return (
      <div className="bg-[#73CEC0] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#73CEC0] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Ice.png"
          alt="type ice"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "normal") {
    return (
      <div className="bg-[#919AA2] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#919AA2] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Normal.png"
          alt="type normal"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "poison") {
    return (
      <div className="bg-[#AA6BC8] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#AA6BC8] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Poison.png"
          alt="type poison"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "psychic") {
    return (
      <div className="bg-[#FA7179] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#FA7179] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Psychic.png"
          alt="type psychic"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "rock") {
    return (
      <div className="bg-[#C5B78C] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#C5B78C] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Rock.png"
          alt="type rock"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "steel") {
    return (
      <div className="bg-[#5A8EA2] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5A8EA2] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Steel.png"
          alt="type steel"
        />
      </div>
    );
  }
  if (pokemon.types["0"].type.name === "water") {
    return (
      <div className="bg-[#5090D6] h-7 w-7 rounded-tr-lg flex justify-center items-center">
        <img
          className="bg-[#5090D6] h-5 w-5 rounded-tr-lg"
          src="src/assets/pokemon_types/Water.png"
          alt="type water"
        />
      </div>
    );
  }
  return <div>{pokemon.types["0"].type.name}</div>;
};

export default setFirstLogo;
