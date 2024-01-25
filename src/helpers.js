//Create array of 4 items in which at least one is unique
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
    ); //fetch first 100 pokemon

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

//controls score
export class GameController {
  static playRound() {
    console.log(":)");
    //if some of memorized items is the same as clicked reset score
  }

  static isUnique(item, arr) {
    return arr.some((el) => el === item);
  }
}
