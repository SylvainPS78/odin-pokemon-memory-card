const Header = ({ currentScore, highScore }) => {
  return (
    <header className="header" role="contentinfo" aria-label="Site header">
      <p className="current-score">SCORE : {currentScore}</p>
      <p>/</p>
      <p className="high-score">HIGH SCORE : {highScore}</p>
    </header>
  );
};

export default Header;
