import { useState } from "react";
import Card from "./Card.jsx";

const MainScreen = ({ pokemonList, difficulty }) => {
  const [round, setRound] = useState(0);

  if (!pokemonList || pokemonList.length === 0) {
    return <div>No Pokemon available</div>;
  }

  return (
    <main role="contentinfo" aria-label="Site main">
      <h1 className="game-title">Pokemon Memory Card Game</h1>
      <p className="round-progress">
        {round} / {difficulty}
      </p>
      <div className="cards-container">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} image={pokemon.image} name={pokemon.name} />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
