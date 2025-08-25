import React from "react";

const DifficultyModal = ({ onDifficultySelected }) => {
  return (
    <div className="difficulty-modal">
      <h2 className="difficulty-modal-title">Select a difficulty level</h2>
      <button
        className="difficulty-modal-button"
        onClick={() => onDifficultySelected(5)}
      >
        Easy
      </button>
      <button
        className="difficulty-modal-button"
        onClick={() => onDifficultySelected(10)}
      >
        Medium
      </button>
      <button
        className="difficulty-modal-button"
        onClick={() => onDifficultySelected(15)}
      >
        Hard
      </button>
    </div>
  );
};

export default DifficultyModal;
