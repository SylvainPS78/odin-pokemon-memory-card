const WinModal = () => {
  return (
    <div className="modal-overlay">
      <div className="win-modal">
        <h2 className="win-modal-title">Congratulation, you Won !</h2>
        <button className="win-modal-button continue-button">
          Continue Playing
        </button>
        <button className="win-modal-button play-again-button">
          Play Again
        </button>
        <button className="win-modal-button exit-button">Exit</button>
      </div>
    </div>
  );
};

export default WinModal;
