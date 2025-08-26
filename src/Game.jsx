import { useState, useEffect } from "react";
import "./assets/styles/Game.css";
import DifficultyModal from "./assets/components/DifficultyModal.jsx";
import WinModal from "./assets/components/WinModal.jsx";
import Header from "./assets/components/Header.jsx";
import MainScreen from "./assets/components/MainScreen.jsx";
import Footer from "./assets/components/Footer.jsx";
import LoadingMessage from "./assets/components/LoadingMessage.jsx";
import getRandomPokemonList from "./assets/utilities/getRandomPokemonList.js";

const Game = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isGameActive, setIsGameActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [fullPokemonList, setFullPokemonList] = useState(null);
  const [slicedPokemonList, setSlicedlPokemonList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isWon, setIsWon] = useState(false);

  const handleIsWon = () => {
    setIsWon(true);
  };

  const handleDifficultySelected = (level) => {
    setDifficulty(level);
    setIsModalOpen(false);
    setIsGameActive(true);
  };

  useEffect(() => {
    if (fullPokemonList && difficulty) {
      setSlicedlPokemonList(fullPokemonList.slice(0, difficulty));
    }
  }, [fullPokemonList, difficulty]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const [pokemonListData] = await Promise.all([
          getRandomPokemonList(15),
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
  }, []);

  return (
    <>
      {isModalOpen && (
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
            <Header currentScore={0} highScore={0} />{" "}
            <MainScreen
              pokemonList={slicedPokemonList}
              difficulty={difficulty}
              onIsWon={handleIsWon}
            />
          </>
        ))}

      {isWon && <WinModal />}

      <Footer />
    </>
  );
};

export default Game;
