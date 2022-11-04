import React from "react";
import Pokedex from "../components/Pokedex/Pokedex";
import PokedexList from "../components/Pokedex/PokedexList";

function PokedexPage() {
  return (
    <div>
      <PokedexList />
      <Pokedex />
    </div>
  );
}

export default PokedexPage;
