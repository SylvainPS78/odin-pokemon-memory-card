import React, { useEffect, useState } from "react";
import getPokemon from "../utlitis/getPokemon.js";

const Card = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = await getPokemon(id);
      setPokemon(pokemonData);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-card">
      <img className="pkemon-card-img" src={pokemon.image} alt={pokemon.name} />
      <p className="pkemon-card-name">{pokemon.name}</p>
    </div>
  );
};

export default Card;
