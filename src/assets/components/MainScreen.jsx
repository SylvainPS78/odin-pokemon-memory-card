import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import shuffleArray from "../utilities/shuffleArray.js";
import alreadyClicked from "../utilities/alreadyClicked.js";

const MainScreen = ({
  pokemonList,
  maxRound,
  onIsWon,
  currentRound,
  onIsGameOver,
  onRoundUpdate,
}) => {
  const [shuffledPokemonList, setShuffledPokemonList] = useState([]);
  const [alreadyClickedList, setAlreadyClickedList] = useState([]);
  const [animatingCardId, setAnimatingCardId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardSelected = async (pokemonId) => {
    setAnimatingCardId(pokemonId);
    setIsAnimating(true);

    await new Promise((resolve) => setTimeout(resolve, 200));

    await new Promise((resolve) => setTimeout(resolve, 300));

    if (alreadyClicked(pokemonId, alreadyClickedList)) {
      onIsGameOver(true);
    } else {
      setAlreadyClickedList((prevList) => [...prevList, pokemonId]);
      const newRound = currentRound + 1;
      onRoundUpdate(newRound);

      if (newRound === maxRound) {
        onIsWon(true);
      }
    }

    setShuffledPokemonList(shuffleArray([...pokemonList]));

    setTimeout(() => {
      setAnimatingCardId(null);
      setIsAnimating(false);
    }, 100);
  };

  useEffect(() => {
    if (pokemonList && pokemonList.length > 0) {
      setShuffledPokemonList(shuffleArray([...pokemonList]));
    }
  }, [pokemonList]);

  if (!pokemonList || pokemonList.length === 0) {
    return <div>No Pokemon available</div>;
  }

  return (
    <main role="contentinfo" aria-label="Site main">
      <h1 className="game-title">Pokemon Memory Card Game</h1>
      <p className="round-progress">
        {currentRound} / {maxRound}
      </p>
      <div className={`cards-container ${isAnimating ? "fading-out" : ""}`}>
        {shuffledPokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            onCardSelected={handleCardSelected}
            isPulsing={animatingCardId === pokemon.id}
          />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
