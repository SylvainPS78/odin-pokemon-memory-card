const Card = ({ name, image }) => {
  return (
    <button className="pokemon-card">
      <img className="pokemon-card-img" src={image} alt={name} />
      <p className="pokemon-card-name">{name.toUpperCase()}</p>
    </button>
  );
};

export default Card;
