function setAvailableToFight(pokemon) {
  if (
    pokemon.name === "charizard" ||
    pokemon.name === "blastoise" ||
    pokemon.name === "venusaur" ||
    pokemon.name === "pikachu" ||
    pokemon.name === "articuno" ||
    pokemon.name === "zapdos" ||
    pokemon.name === "moltres" ||
    pokemon.name === "mewtwo" ||
    pokemon.name === "mew" ||
    pokemon.name === "dragonite" ||
    pokemon.name === "gyarados"
  ) {
    return true;
  }
  return false;
}

export default setAvailableToFight;
