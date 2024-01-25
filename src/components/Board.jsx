/* eslint-disable react/prop-types */
import Card from "./Card";
import { getCards, fetchPokemon } from "../helpers";
import { useEffect, useState } from "react";

export default function Board({
  memoPokeArr,
  setMemoPokeArr,
  winCount,
  setWinCount,
  difficultyData,
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const { pokeCount, cardCount, gameDifficulty } = difficultyData;

    function handleClick(clickedElData) {
      const isIncluded = memoPokeArr.some(
        (item) => item.name === clickedElData.name
      );

      setMemoPokeArr((prevMemoPokeArr) => {
        return isIncluded ? [] : [...prevMemoPokeArr, clickedElData];
      });

      //check for win
      if (memoPokeArr.length === pokeCount - 1) {
        let newCount = winCount;

        newCount++;

        setWinCount(newCount);
        setMemoPokeArr([]);
      }
    }

    fetchPokemon(pokeCount).then((data) => {
      const cardsArrData = getCards(data, cardCount, pokeCount, memoPokeArr);

      const newCards = cardsArrData.map((cardData, i) => {
        const url = cardData.url;
        const name = cardData.name;
        return (
          <Card
            key={i}
            url={url}
            name={name}
            onClick={() => handleClick(cardData)}
            gameDifficulty={gameDifficulty}
          />
        );
      });

      setCards(newCards);
    });
  }, [difficultyData, memoPokeArr, setMemoPokeArr, setWinCount, winCount]);

  return <div className="card-container">{cards}</div>;
}
