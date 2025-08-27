const Card = ({ name, image, onCardSelected, id, isPulsing = false }) => {
  return (
    <button 
      className={`pokemon-card ${isPulsing ? 'pulsing' : ''}`} 
      onClick={() => onCardSelected(id)}
    >
      <img className="pokemon-card-img" src={image} alt={name} />
      <p className="pokemon-card-name">{name.toUpperCase()}</p>
    </button>
  );
};

export default Card;
