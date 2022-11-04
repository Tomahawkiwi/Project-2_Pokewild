const setBackgroundType = (pokemon) => {
  if (!pokemon.types[1]) {
    return <div className="w-0 h-0" />;
  }
  if (pokemon.types["1"].type.name === "bug") {
    return "bg-[#91C12F]";
  }
  if (pokemon.types["1"].type.name === "dark") {
    return "bg-[#5A5465]";
  }
  if (pokemon.types["1"].type.name === "dragon") {
    return "bg-[#0B6DC3]";
  }
  if (pokemon.types["1"].type.name === "electric") {
    return "bg-[#F4D23C]";
  }
  if (pokemon.types["1"].type.name === "fairy") {
    return "bg-[#EC8FE6]";
  }
  if (pokemon.types["1"].type.name === "fighting") {
    return "bg-[#CE416B]";
  }
  if (pokemon.types["1"].type.name === "fire") {
    return "bg-[#FF9D55]";
  }
  if (pokemon.types["1"].type.name === "flying") {
    return "bg-[#8FA9DE]";
  }
  if (pokemon.types["1"].type.name === "ghost") {
    return "bg-[#5269AD]";
  }
  if (pokemon.types["1"].type.name === "grass") {
    return "bg-[#63BC5A]";
  }
  if (pokemon.types["1"].type.name === "ground") {
    return "bg-[#D97845]";
  }
  if (pokemon.types["1"].type.name === "ice") {
    return "bg-[#73CEC0]";
  }
  if (pokemon.types["1"].type.name === "normal") {
    return "bg-[#919AA2]";
  }
  if (pokemon.types["1"].type.name === "poison") {
    return "bg-[#AA6BC8]";
  }
  if (pokemon.types["1"].type.name === "psychic") {
    return "bg-[#FA7179]";
  }
  if (pokemon.types["1"].type.name === "rock") {
    return "bg-[#C5B78C]";
  }
  if (pokemon.types["1"].type.name === "steel") {
    return "bg-[#5A8EA2]";
  }
  if (pokemon.types["1"].type.name === "water") {
    return "bg-[#5090D6]";
  }
  return "";
};

export default setBackgroundType;
