import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import getRandomPokemonList from "../utlitis/getRandomPokemonList.js";

const MainScreen = ({ difficulty }) => {
  const [pokemonList, setPokemonList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const pokemonListData = await getRandomPokemonList(difficulty);

        setPokemonList(pokemonListData);
      } catch (e) {
        console.error("Error during loading:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPokemon();
  }, [difficulty]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
