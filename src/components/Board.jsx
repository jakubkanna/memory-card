/* eslint-disable react/prop-types */
import Card from "./Card";
import { getCards, fetchPokemon } from "../helpers";
import { useEffect, useState } from "react";

export default function Board({
  cardCount = 4,
  pokeCount = 100,
  memoPokeArr,
  setMemoPokeArr,
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function handleClick(clickedElData) {
      const isUnique = memoPokeArr.includes(clickedElData);

      setMemoPokeArr((prevMemoPokeArr) => {
        if (isUnique) {
          // If clickedElData is already present, reset memoPokeArr
          return [];
        } else {
          // If clickedElData is not present, add it to memoPokeArr
          return [...prevMemoPokeArr, clickedElData];
        }
      });

      //check for win
      if (memoPokeArr.length === pokeCount - 1) {
        // winsRef.current = winsRef.current + 1;
        // localStorage.setItem("wins", winsRef.current.toString());
      }

      // // Pass memoPokeArr.length to the parent
      // onScoreChange(memoPokeArr.length);
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
  }, [cardCount, memoPokeArr, pokeCount, setMemoPokeArr]);

  return <div className="card-container">{cards}</div>;
}
