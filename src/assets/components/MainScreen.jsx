import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import getRandomPokemonList from "../utlitis/getRandomPokemonList.js";

const MainScreen = ({ difficulty }) => {
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      const pokemonListData = await getRandomPokemonList(difficulty);
      setPokemonList(pokemonListData);
    };

    fetchAllPokemon();
  }, [difficulty]);

  if (!pokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <main role="contentinfo" aria-label="Site main">
      <p className="game-title">Pokemon Memory Card Game</p>
      <div className="cards-container">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
