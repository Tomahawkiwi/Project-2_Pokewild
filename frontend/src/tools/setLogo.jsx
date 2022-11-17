const setLogo = (type) => {
  if (type === "bug") {
    return (
      <div className="bg-[#91C12F] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/bug.png"
          alt="type bug"
        />
      </div>
    );
  }
  if (type === "dark") {
    return (
      <div className="bg-[#5A5465] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/dark.png"
          alt="type dark"
        />
      </div>
    );
  }
  if (type === "dragon") {
    return (
      <div className="bg-[#0B6DC3] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/dragon.png"
          alt="type dragon"
        />
      </div>
    );
  }
  if (type === "electric") {
    return (
      <div className="bg-[#F4D23C] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/electric.png"
          alt="type electric"
        />
      </div>
    );
  }
  if (type === "fairy") {
    return (
      <div className="bg-[#EC8FE6] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/fairy.png"
          alt="type fairy"
        />
      </div>
    );
  }
  if (type === "fighting") {
    return (
      <div className="bg-[#CE416B] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/fighting.png"
          alt="type fighting"
        />
      </div>
    );
  }
  if (type === "fire") {
    return (
      <div className="bg-[#FF9D55] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/fire.png"
          alt="type fire"
        />
      </div>
    );
  }
  if (type === "flying") {
    return (
      <div className="bg-[#8FA9DE] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/flying.png"
          alt="type flying"
        />
      </div>
    );
  }
  if (type === "ghost") {
    return (
      <div className="bg-[#5269AD] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/ghost.png"
          alt="type ghost"
        />
      </div>
    );
  }
  if (type === "grass") {
    return (
      <div className="bg-[#63BC5A] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/grass.png"
          alt="type grass"
        />
      </div>
    );
  }
  if (type === "ground") {
    return (
      <div className="bg-[#D97845] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/ground.png"
          alt="type ground"
        />
      </div>
    );
  }
  if (type === "ice") {
    return (
      <div className="bg-[#73CEC0] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/ice.png"
          alt="type ice"
        />
      </div>
    );
  }
  if (type === "normal") {
    return (
      <div className="bg-[#919AA2] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/normal.png"
          alt="type normal"
        />
      </div>
    );
  }
  if (type === "poison") {
    return (
      <div className="bg-[#AA6BC8] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/poison.png"
          alt="type poison"
        />
      </div>
    );
  }
  if (type === "psychic") {
    return (
      <div className="bg-[#FA7179] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/psychic.png"
          alt="type psychic"
        />
      </div>
    );
  }
  if (type === "rock") {
    return (
      <div className="bg-[#C5B78C] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/rock.png"
          alt="type rock"
        />
      </div>
    );
  }
  if (type === "steel") {
    return (
      <div className="bg-[#5A8EA2] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/steel.png"
          alt="type steel"
        />
      </div>
    );
  }
  if (type === "water") {
    return (
      <div className="bg-[#5090D6] h-7 w-7 rounded-full flex justify-center items-center">
        <img
          className="h-5 w-5"
          src="src/assets/pokemon_types/water.png"
          alt="type water"
        />
      </div>
    );
  }
  if (type === "shadow" || type === "unknown") {
    return <div className="hidden" />;
  }
  return <div>{type}</div>;
};

export default setLogo;
