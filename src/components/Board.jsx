/* eslint-disable react/prop-types */
import Card from "./Card";
import { fetchPokemon } from "../api";
import { useEffect, useState } from "react";

export default function Board({ cardCount = 4, pokemonCount = 100 }) {
  const [cards, setCards] = useState([]);
  const memoPokemonArr = []; //memo = memorized

  function handleClick(item) {
    memoPokemonArr.push(item);
    console.log(memoPokemonArr);
  }

  //do once per cardCount change
  useEffect(() => {
    const randomIndex = () => Math.floor(Math.random() * pokemonCount - 1);
    fetchPokemon(pokemonCount).then((data) => {
      const newCards = [];

      for (let i = 1; i <= cardCount; i++) {
        const item = data.results[randomIndex()];
        const url = item.url;
        const name = item.name;
        newCards.push(
          <Card
            key={i}
            url={url}
            name={name}
            onClick={() => handleClick(item)}
          />
        );
      }

      setCards(newCards);
    });
  }, [cardCount, pokemonCount]);

  return <div className="card-container">{cards}</div>;
}
