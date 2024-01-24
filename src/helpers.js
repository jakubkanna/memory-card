//Create array of 4 items in which at least one is unique
export function getItems(data, cardCount, pokeCount, memoPokeArr) {
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
