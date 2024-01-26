/* eslint-disable react/prop-types */
import "../styles/Board.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Board({ cardsDataArr, gameDifficulty, onCardClick }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const newCards = cardsDataArr.map((cardData, i) => {
      const url = cardData.url;
      const name = cardData.name;
      return (
        <Card
          key={i}
          url={url}
          name={name}
          onClick={() => onCardClick(cardData)}
          gameDifficulty={gameDifficulty}
        />
      );
    });

    setCards(newCards);
  }, [cardsDataArr, gameDifficulty, onCardClick]);

  //mount
  return <div className="board">{cards}</div>;
}
