export async function fetchPokemon(count) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`
    ); //fetch first 100 pokemon

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pokemonData = await response.json();

    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}
