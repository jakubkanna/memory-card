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
  setMessage,
}) {
  const [cards, setCards] = useState([]);
  const winnerMessage = "You win.";
  const loseMessage = "You lose.";

  useEffect(() => {
    const { pokeCount, cardCount, gameDifficulty } = difficultyData;

    function handleClick(clickedElData) {
      const isIncluded = memoPokeArr.some(
        (item) => item.name === clickedElData.name
      );

      setMemoPokeArr((prevMemoPokeArr) => {
        if (isIncluded) {
          // Lose condition
          setMessage(loseMessage);
          return [];
        }

        const updatedMemoPokeArr = [...prevMemoPokeArr, clickedElData];

        // Check for win
        if (updatedMemoPokeArr.length === pokeCount - 1) {
          let newCount = winCount + 1;

          setWinCount(newCount);
          setMessage(winnerMessage);
          return [];
        }

        return updatedMemoPokeArr;
      });
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
  }, [
    difficultyData,
    memoPokeArr,
    setMemoPokeArr,
    setMessage,
    setWinCount,
    winCount,
  ]);

  return <div className="card-container">{cards}</div>;
}
