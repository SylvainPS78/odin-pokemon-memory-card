const isMobileDevice = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || screen.width <= 768
  );
};

const getPokemon = async (index) => {
  const id = index;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { name, sprites } = await res.json();

  let image;

  if (isMobileDevice()) {
    image =
      sprites.front_default ||
      sprites.other.home.front_default ||
      sprites.other.dream_world.front_default;
  } else {
    image =
      sprites.other.dream_world.front_default ||
      sprites.other.home.front_default ||
      sprites.front_default;
  }

  return { name, image, id };
};

export default getPokemon;
