import React from "react";
import Card from "./Card.jsx";

const MainScreen = () => {
  return (
    <main role="contentinfo" aria-label="Site main">
      <p className="game-title">Pokemon Memory Card Game</p>
      <div className="cards-container">
        {" "}
        <Card id={1} />
        <Card id={24} />
        <Card id={54} />
        <Card id={132} />
        <Card id={150} />
        <Card id={151} />
      </div>
    </main>
  );
};

export default MainScreen;
