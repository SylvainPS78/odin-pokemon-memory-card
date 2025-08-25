import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import LoadingMessage from "./LoadingMessage.jsx";
import getRandomPokemonList from "../utlitis/getRandomPokemonList.js";

const MainScreen = ({ difficulty }) => {
  const [pokemonList, setPokemonList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const [pokemonListData] = await Promise.all([
          getRandomPokemonList(difficulty),
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);

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
    return <LoadingMessage />;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <main role="contentinfo" aria-label="Site main">
      <h1 className="game-title">Pokemon Memory Card Game</h1>
      <div className="cards-container">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
