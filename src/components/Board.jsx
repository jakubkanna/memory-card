/* eslint-disable react/prop-types */
import Card from "./Card";
import { fetchPokemon } from "../api";
import { getItems } from "../helpers";
import { useEffect, useState } from "react";

export default function Board({ cardCount = 4, pokeCount = 100 }) {
  const [cards, setCards] = useState([]);
  const [memoPokeArr, setMemoPokeArr] = useState([]); // memo = memorized

  useEffect(() => {
    function handleClick(clickedElData) {
      setMemoPokeArr((prevMemoPokeArr) => [...prevMemoPokeArr, clickedElData]); //re-render Board and memorize clicked element data
    }

    fetchPokemon(pokeCount).then((data) => {
      const cardsArrData = getItems(data, cardCount, pokeCount, memoPokeArr);
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
  }, [cardCount, memoPokeArr, pokeCount]);

  return <div className="card-container">{cards}</div>;
}
