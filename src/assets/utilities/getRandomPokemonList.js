import randomNumber from "./randomNumber.js";
import getPokemon from "./getPokemon.js";

const getRandomPokemonListRobust = async (listSize) => {
  const pokemonIds = [];
  const usedIds = new Set();

  while (pokemonIds.length < listSize) {
    const newId = randomNumber();
    if (!usedIds.has(newId)) {
      usedIds.add(newId);
      pokemonIds.push(newId);
    }
  }
  const batchSize = 5;
  const pokemonList = [];
  let totalFailed = 0;

  for (let i = 0; i < pokemonIds.length; i += batchSize) {
    const batch = pokemonIds.slice(i, i + batchSize);

    const batchPromises = batch.map(async (id) => {
      try {
        const pokemon = await getPokemon(id);
        return { success: true, data: pokemon, id };
      } catch (error) {
        return { success: false, error: error.message, id };
      }
    });

    const batchResults = await Promise.allSettled(batchPromises);

    batchResults.forEach((result) => {
      if (result.status === "fulfilled") {
        const { success, data, id, error } = result.value;
        if (success) {
          pokemonList.push(data);
        } else {
          console.warn(`⚠️ Failed to fetch Pokemon ${id}: ${error}`);
          totalFailed++;
        }
      } else {
        console.error(`❌ Promise rejected:`, result.reason);
        totalFailed++;
      }
    });
  }

  if (pokemonList.length === 0) {
    throw new Error("Failed to fetch any Pokemon data");
  }

  if (totalFailed > 0) {
    console.warn(`⚠️ ${totalFailed}/${listSize} Pokemon failed to load`);
  }

  return pokemonList;
};

export default getRandomPokemonListRobust;
