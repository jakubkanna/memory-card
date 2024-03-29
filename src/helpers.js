//Create array of items in which at least one is unique
export function getCards(data, cardCount, pokeCount, memoPokeArr) {
  const isMemorized = (item) => memoPokeArr.some((el) => el === item);
  const randomIndex = () => Math.floor(Math.random() * pokeCount);
  const items = [];

  for (let i = 1; i <= cardCount; i++) {
    let newItem;

    // Keep generating items until a unique one is found
    do {
      newItem = data.results[randomIndex()];
    } while (isMemorized(newItem));

    items.push(newItem);
  }

  // Check if all items are not unique
  if (items.every((item) => isMemorized(item))) {
    // Replace the last item with a unique one
    let uniqueItem;
    do {
      uniqueItem = data.results[randomIndex()];
    } while (isMemorized(uniqueItem));

    // Update memoPokemonArr and items
    memoPokeArr[cardCount - 1] = uniqueItem;
    items[cardCount - 1] = uniqueItem;
  }

  return items;
}

//fetch main data
export async function fetchPokemon(count) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${count}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pokemonData = await response.json();
    // console.log(pokemonData);
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
}

//
export const getGameConfig = (difficulty) => {
  switch (difficulty) {
    case "easy":
      return {
        pokeCount: 50,
        cardCount: 4,
      };

    case "medium":
      return {
        pokeCount: 100,
        cardCount: 8,
      };

    case "hard":
      return {
        pokeCount: 1000,
        cardCount: 16,
      };

    default:
      return {
        pokeCount: 100,
        cardCount: 4,
      };
  }
};
