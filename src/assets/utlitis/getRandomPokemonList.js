import randomNumber from "./randomNumber.js";
import getPokemon from "./getPokemon.js";

const getRandomPokemonList = async (listSize) => {
  const pokemonList = [];

  for (let i = 0; i < listSize; i++) {
    let newId = randomNumber();

    while (pokemonList.some((object) => object.id === newId)) {
      // Check pokemon ID is not already in the list
      newId = randomNumber();
    }

    pokemonList.push(await getPokemon(newId));
  }

  return pokemonList;
};

export default getRandomPokemonList;
