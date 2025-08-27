import { useState, useEffect } from "react";
import "./assets/styles/Game.css";
import DifficultyModal from "./assets/components/DifficultyModal.jsx";
import WinModal from "./assets/components/WinModal.jsx";
import GameOverModal from "./assets/components/GameOverModal.jsx";
import Header from "./assets/components/Header.jsx";
import MainScreen from "./assets/components/MainScreen.jsx";
import Footer from "./assets/components/Footer.jsx";
import LoadingMessage from "./assets/components/LoadingMessage.jsx";
import getRandomPokemonList from "./assets/utilities/getRandomPokemonList.js";

const Game = () => {
  const [isDiffModalOpen, setIsDiffModalOpen] = useState(true);
  const [isGameActive, setIsGameActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [fullPokemonList, setFullPokemonList] = useState(null);
  const [slicedPokemonList, setSlicedlPokemonList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [maxRound, setMaxRound] = useState(0);
  const [maxScore, setMaxScore] = useState(() => {
    return parseInt(localStorage.getItem("pokemonMaxScore") || "0");
  });

  const handleIsWon = () => {
    setIsWon(true);
  };

  const handleExitButton = () => {
    setIsGameActive(false);
    setIsWon(false);
    setIsGameOver(false);
    setIsDiffModalOpen(true);
    setDifficulty(null);
    setSlicedlPokemonList(null);
    setFullPokemonList(null);
    setIsLoading(true);
    setCurrentScore(0);
    setCurrentRound(0);
    setMaxRound(null);
  };

  const handlePlayAgainButton = () => {
    setIsWon(false);
    setIsGameOver(false);
    setIsLoading(true);
    setCurrentScore(0);
    setCurrentRound(0);
    setMaxRound(difficulty);
    setSlicedlPokemonList(null);
    setFullPokemonList(null);
  };

  const handleContinuePlayingButton = () => {
    setIsWon(false);
    setIsGameOver(false);
    setIsLoading(true);
    const newDifficulty = difficulty + 1;
    setDifficulty(newDifficulty);
    const newMaxRound = maxRound + newDifficulty;
    setMaxRound(newMaxRound);
    setSlicedlPokemonList(null);
    setFullPokemonList(null);
  };

  const handleCurrentScore = (newRound) => {
    setCurrentRound(newRound);
    setCurrentScore(newRound);

    if (newRound > maxScore) {
      setMaxScore(newRound);
      localStorage.setItem("pokemonMaxScore", newRound.toString());
    }
  };

  const handleIsGameOver = () => {
    setIsGameOver(true);
  };

  const handleDifficultySelected = (level) => {
    setDifficulty(level);
    setIsDiffModalOpen(false);
    setIsGameActive(true);
    setMaxRound(level);
  };

  useEffect(() => {
    if (fullPokemonList && difficulty) {
      setSlicedlPokemonList(fullPokemonList.slice(0, difficulty));
    }
  }, [fullPokemonList, difficulty]);

  useEffect(() => {
    if (!fullPokemonList) {
      const fetchAllPokemon = async () => {
        try {
          const [pokemonListData] = await Promise.all([
            isGameActive
              ? getRandomPokemonList(difficulty)
              : getRandomPokemonList(15),
            new Promise((resolve) => setTimeout(resolve, 2000)),
          ]);
          setFullPokemonList(pokemonListData);
        } catch (e) {
          console.error("Error during loading:", e);
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchAllPokemon();
    }
  }, [fullPokemonList, isGameActive, difficulty]);

  return (
    <>
      {isDiffModalOpen && (
        <DifficultyModal onDifficultySelected={handleDifficultySelected} />
      )}

      {isGameActive &&
        (error ? (
          <div className="error-message">Error: {error}</div>
        ) : isLoading ? (
          <LoadingMessage />
        ) : (
          <>
            {" "}
            <Header currentScore={currentScore} maxScore={maxScore} />{" "}
            <MainScreen
              pokemonList={slicedPokemonList}
              maxRound={maxRound}
              onIsWon={handleIsWon}
              onIsGameOver={handleIsGameOver}
              onRoundUpdate={handleCurrentScore}
              currentRound={currentRound}
            />
          </>
        ))}

      {isWon && (
        <WinModal
          finalScore={currentScore}
          onExitSelected={handleExitButton}
          onPlayAgainSelected={handlePlayAgainButton}
          onContinuePlayingSelected={handleContinuePlayingButton}
        />
      )}
      {isGameOver && (
        <GameOverModal
          finalScore={currentScore}
          onExitSelected={handleExitButton}
          onPlayAgainSelected={handlePlayAgainButton}
        />
      )}

      <Footer />
    </>
  );
};

export default Game;
