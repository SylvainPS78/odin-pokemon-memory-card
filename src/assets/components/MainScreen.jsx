import React from "react";
import Card from "./Card.jsx";

const MainScreen = () => {
  return (
    <main role="contentinfo" aria-label="Site main">
      <div className="cards-container">
        {" "}
        <Card id={8} />
        <Card id={24} />
        <Card id={54} />
        <Card id={132} />
        <Card id={42} />
        <Card id={79} />
        <Card id={92} />
        <Card id={45} />
      </div>
    </main>
  );
};

export default MainScreen;
