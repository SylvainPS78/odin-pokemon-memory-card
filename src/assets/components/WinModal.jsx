const WinModal = ({ finalScore, onExitSelected, onPlayAgainSelected }) => {
  return (
    <div className="modal-overlay">
      <div className="win-modal">
        <h2 className="win-modal-title">Congratulation, you Won !</h2>
        <p className="win-modal-final-score">Your score is : {finalScore}</p>
        <button className="win-modal-button continue-button">
          Continue Playing
        </button>
        <button
          className="win-modal-button play-again-button"
          onClick={() => onPlayAgainSelected()}
        >
          Play Again
        </button>
        <button
          className="win-modal-button exit-button"
          onClick={() => onExitSelected()}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default WinModal;
