const GameOverModal = () => {
  return (
    <div className="modal-overlay">
      <div className="game-over-modal">
        <h2 className="game-over-modal-title">Sorry, you loose !</h2>
        <button className="game-over-modal-button play-again-button">
          Play Again
        </button>
        <button className="game-over-modal-button exit-button">Exit</button>
      </div>
    </div>
  );
};

export default GameOverModal;
