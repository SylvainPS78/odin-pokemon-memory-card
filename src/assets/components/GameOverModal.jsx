const GameOverModal = ({ finalScore, onExitSelected, onPlayAgainSelected }) => {
  return (
    <div className="modal-overlay">
      <div className="game-over-modal">
        <h2 className="game-over-modal-title">Sorry, you loose !</h2>
        <p className="game-over-modal-final-score">
          Your score is : {finalScore}
        </p>
        <button
          className="game-over-modal-button play-again-button"
          onClick={() => onPlayAgainSelected()}
        >
          Play Again
        </button>
        <button
          className="game-over-modal-button exit-button"
          onClick={() => onExitSelected()}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
