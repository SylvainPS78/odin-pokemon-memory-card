const Card = ({ name, image, onCardSelected, id }) => {
  return (
    <button className="pokemon-card" onClick={() => onCardSelected(id)}>
      <img className="pokemon-card-img" src={image} alt={name} />
      <p className="pokemon-card-name">{name.toUpperCase()}</p>
    </button>
  );
};

export default Card;
