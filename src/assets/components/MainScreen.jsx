import React from "react";
import Card from "./Card.jsx";
import randomPokemonList from "../utlitis/randomPokemonList.js";

const MainScreen = ({ difficulty }) => {
  return (
    <main role="contentinfo" aria-label="Site main">
      <p className="game-title">Pokemon Memory Card Game</p>
      <div className="cards-container">
        {randomPokemonList(difficulty).map((index) => (
          <Card key={index} id={index} />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
