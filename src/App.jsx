import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ReactMarkdown from "react-markdown";
import rulesMd from "./assets/rules.md?raw";
import { getGameConfig, getCards, fetchPokemon } from "./helpers";
import { useState, useEffect } from "react";
export default function App() {
  const rules = <ReactMarkdown>{rulesMd}</ReactMarkdown>;
  const [memoPokeArr, setMemoPokeArr] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");
  const [message, setMessage] = useState(rules);
  const [cardsData, setCardsData] = useState([]);
  const [winCount, setWinCount] = useState(
    () => parseInt(localStorage.getItem("winCount")) || 0
  );

  const [isRedBlinking, setIsRedBlinking] = useState(false);
  const [isGoldBlinking, setIsGoldBlinking] = useState(false);

  const gameConfig = getGameConfig(difficulty);

  const gameData = {
    winCount: winCount,
    gameDifficulty: difficulty,
    memorizedCount: memoPokeArr.length,
    pokeCount: gameConfig.pokeCount,
    cardCount: gameConfig.cardCount,
  };

  function onCardClick(cardData) {
    const isIncluded = memoPokeArr.some((item) => item.name === cardData.name);

    setMemoPokeArr((prevMemoPokeArr) => {
      if (isIncluded) return reset();

      const updatedMemoPokeArr = [...prevMemoPokeArr, cardData];

      if (updatedMemoPokeArr.length === gameConfig.pokeCount - 1) return win();

      return nextRound(updatedMemoPokeArr);
    });
  }

  function win() {
    setIsGoldBlinking(true);

    const newWinCount = winCount + 1;
    setWinCount(newWinCount);
    localStorage.setItem("winCount", newWinCount.toString());

    const winMessage = "Win";
    setMessage(winMessage);
    return [];
  }

  const reset = () => {
    setIsRedBlinking(true);

    const loseMessage = "Lose";
    setMessage(loseMessage);
    return [];
  };

  const nextRound = (updatedMemoPokeArr) => {
    setMessage(rules);
    return updatedMemoPokeArr;
  };

  useEffect(() => {
    fetchPokemon(gameConfig.pokeCount).then((data) => {
      const fetchedCardsData = getCards(
        data,
        gameConfig.cardCount,
        gameConfig.pokeCount,
        memoPokeArr
      );
      setCardsData(fetchedCardsData);
    });
  }, [gameConfig.pokeCount, gameConfig.cardCount, memoPokeArr]);

  useEffect(() => {
    if (isRedBlinking || isGoldBlinking) {
      const blinkTimer = setTimeout(() => {
        setIsRedBlinking(false);
        setIsGoldBlinking(false);
      }, 500);
      return () => clearTimeout(blinkTimer);
    }
  }, [isRedBlinking, isGoldBlinking]);

  return (
    <>
      <Header
        gameData={gameData}
        setDifficulty={setDifficulty}
        message={message}
      />
      <Main
        cardsDataArr={cardsData}
        gameDifficulty={difficulty}
        onCardClick={onCardClick}
      />
      {isRedBlinking && <div className="blinkRed"></div>}
      {isGoldBlinking && <div className="blinkGold"></div>}
    </>
  );
}
