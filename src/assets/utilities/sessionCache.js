// Utilitaire pour gérer le cache sessionStorage
const SESSION_KEYS = {
  POKEMON_LIST: "pokemonList",
  FETCH_TIMESTAMP: "fetchTimestamp",
};

// Durée de validité du cache (en millisecondes) - 30 minutes
const CACHE_DURATION = 30 * 60 * 1000;

const setSessionCache = (key, data) => {
  try {
    const cacheObject = {
      data: data,
      timestamp: Date.now(),
    };
    sessionStorage.setItem(key, JSON.stringify(cacheObject));
    return true;
  } catch (error) {
    console.warn("Failed to set session cache:", error);
    return false;
  }
};

const getSessionCache = (key) => {
  try {
    const cached = sessionStorage.getItem(key);
    if (!cached) return null;

    const cacheObject = JSON.parse(cached);

    // Vérifier si le cache est encore valide
    if (Date.now() - cacheObject.timestamp > CACHE_DURATION) {
      sessionStorage.removeItem(key);
      return null;
    }

    return cacheObject.data;
  } catch (error) {
    console.warn("Failed to get session cache:", error);
    sessionStorage.removeItem(key);
    return null;
  }
};

const clearSessionCache = (key = null) => {
  try {
    if (key) {
      sessionStorage.removeItem(key);
    } else {
      // Nettoyer seulement nos clés
      Object.values(SESSION_KEYS).forEach((sessionKey) => {
        sessionStorage.removeItem(sessionKey);
      });
    }
  } catch (error) {
    console.warn("Failed to clear session cache:", error);
  }
};

const hasCachedData = (key) => {
  return getSessionCache(key) !== null;
};

export {
  SESSION_KEYS,
  setSessionCache,
  getSessionCache,
  clearSessionCache,
  hasCachedData,
};
