import React, { useState } from "react";
import "./assets/styles/Game.css";
import MainScreen from "./assets/components/MainScreen.jsx";
import Footer from "./assets/components/Footer.jsx";
import DifficultyModal from "./assets/components/DifficultyModal.jsx";

const Game = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isGameActive, setIsGameActive] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const handleDifficultySelected = (level) => {
    setDifficulty(level);
    setIsModalOpen(false);
    setIsGameActive(true);
  };

  return (
    <>
      {isModalOpen && (
        <DifficultyModal onDifficultySelected={handleDifficultySelected} />
      )}
      {isGameActive && <MainScreen difficulty={difficulty} />}

      <Footer />
    </>
  );
};

export default Game;
