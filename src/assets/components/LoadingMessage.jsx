import pokeballImage from "../img/pokeball.png";

const LoadingMessage = () => {
  return (
    <div className="loading-message">
      Loading...
      <img
        className="loading-image"
        src={pokeballImage}
        aria-hidden="true"
        alt=""
      />
    </div>
  );
};

export default LoadingMessage;
