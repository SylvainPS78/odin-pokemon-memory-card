import React from "react";
import Card from "./Card.jsx";
import randomPokemonList from "../utlitis/randomPokemonList.js";

const MainScreen = () => {
  return (
    <main role="contentinfo" aria-label="Site main">
      <p className="game-title">Pokemon Memory Card Game</p>
      <div className="cards-container">
        {randomPokemonList(10).map((index) => (
          <Card key={index} id={index} />
        ))}
      </div>
    </main>
  );
};

export default MainScreen;
