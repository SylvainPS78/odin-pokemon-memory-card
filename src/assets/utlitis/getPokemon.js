const getPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { name, sprites } = await res.json();
  const image =
    sprites.other.dream_world.front_default || sprites.front_default;
  return { name, image, id };
};

export default getPokemon;
