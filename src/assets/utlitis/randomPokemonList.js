import randomNumber from "./randomNumber.js";

const randomPokemonList = (listSize) => {
  const pokemonList = [];

  for (let i = 0; i < listSize; i++) {
    pokemonList[i] = randomNumber();
  }

  return pokemonList;
};

export default randomPokemonList;
