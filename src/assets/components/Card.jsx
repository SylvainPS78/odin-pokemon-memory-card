const Card = ({ name, image, onCardSelected }) => {
  return (
    <button className="pokemon-card" onClick={() => onCardSelected()}>
      <img className="pokemon-card-img" src={image} alt={name} />
      <p className="pokemon-card-name">{name.toUpperCase()}</p>
    </button>
  );
};

export default Card;
