import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import shuffleArray from "../utilities/shuffleArray.js";
import alreadyClicked from "../utilities/alreadyClicked.js";

const MainScreen = ({ pokemonList, difficulty, onIsWon, onIsGameOver }) => {
  const [round, setRound] = useState(0);
  const [shuffledPokemonList, setShuffledPokemonList] = useState([]);
  const [alreadyClickedList, setAlreadyClickedList] = useState([]);

  const handleCardSelected = (pokemonId) => {
    if (alreadyClicked(pokemonId, alreadyClickedList)) {
      onIsGameOver(true);
    } else {
      const newRound = round + 1;
      
      setAlreadyClickedList((prevList) => [...prevList, pokemonId]);
      setRound(newRound);
      
      if (newRound === difficulty) {
        onIsWon(true);
      }
    }

    setShuffledPokemonList(shuffleArray([...pokemonList]));
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
        {round} / {difficulty}
      </p>
      <div className="cards-container">
        {shuffledPokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            onCardSelected={handleCardSelected}
          />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
