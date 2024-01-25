/* eslint-disable react/prop-types */
import Card from "./Card";
import { getCards, fetchPokemon } from "../helpers";
import { useEffect, useState } from "react";

export default function Board({
  cardCount = 4,
  pokeCount = 10,
  memoPokeArr,
  setMemoPokeArr,
  winCount,
  setWinCount,
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function handleClick(clickedElData) {
      const isUnique = memoPokeArr.includes(clickedElData);

      setMemoPokeArr((prevMemoPokeArr) => {
        return isUnique ? [] : [...prevMemoPokeArr, clickedElData];
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
          />
        );
      });

      setCards(newCards);
    });
  }, [
    cardCount,
    memoPokeArr,
    pokeCount,
    setMemoPokeArr,
    setWinCount,
    winCount,
  ]);

  return <div className="card-container">{cards}</div>;
}
