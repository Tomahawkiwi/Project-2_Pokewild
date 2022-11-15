import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, []);

  if (!pokemon) return <div>Loading ...</div>;

  return (
    <div>
      <div> {pokemon.name}</div>
      <div> {pokemon.id}</div>
      <div> HP: {pokemon.stats[0].base_stat}</div>
      <div> ATT: {pokemon.stats[1].base_stat}</div>
      <div> DEF: {pokemon.stats[2].base_stat}</div>
      <div> ATT SPE: {pokemon.stats[3].base_stat}</div>
      <div> DEF SPE: {pokemon.stats[4].base_stat}</div>
      <div> SPEED: {pokemon.stats[5].base_stat}</div>

      <img
        className="h-48"
        src={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt=""
      />
    </div>
  );
}

export default PokemonPage;
