const Card = ({ name, image }) => {
  return (
    <div className="pokemon-card">
      <img className="pokemon-card-img" src={image} alt={name} />
      <p className="pokemon-card-name">{name.toUpperCase()}</p>
    </div>
  );
};

export default Card;
