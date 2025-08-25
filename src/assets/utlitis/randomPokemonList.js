import randomNumber from "./randomNumber.js";

const randomPokemonList = (listSize) => {
  const pokemonList = [];

  for (let i = 0; i < listSize; i++) {
    let pokemonToAdd = randomNumber();

    while (pokemonList.includes(pokemonToAdd)) {
      pokemonToAdd = randomNumber();
    }

    pokemonList[i] = pokemonToAdd;
  }

  return pokemonList;
};

export default randomPokemonList;
