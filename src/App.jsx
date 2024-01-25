import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rulesMd from "./assets/rules.md?raw";

export default function App() {
  const initialWinCount = parseInt(localStorage.getItem("winCount")) || 0;
  const rules = <ReactMarkdown children={rulesMd} />;

  const [memoPokeArr, setMemoPokeArr] = useState([]); // memo = memorized
  const [winCount, setWinCount] = useState(initialWinCount);
  const [difficulty, setDifficulty] = useState("easy");
  const [message, setMessage] = useState(rules);

  const getDifficultyData = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return {
          pokeCount: 50,
          cardCount: 4,
          gameDifficulty: difficulty,
        };

      case "medium":
        return {
          pokeCount: 100,
          cardCount: 8,
          gameDifficulty: difficulty,
        };

      case "hard":
        return {
          pokeCount: 1000,
          cardCount: 16,
          gameDifficulty: difficulty,
        };

      default:
        return {
          pokeCount: 100,
          cardCount: 4,
          gameDifficulty: difficulty,
        };
    }
  };

  const difficultyData = getDifficultyData(difficulty);

  useEffect(() => {
    localStorage.setItem("winCount", winCount.toString());
  }, [winCount]);

  return (
    <>
      <Header
        memoCount={memoPokeArr.length}
        winCount={winCount}
        difficultyData={difficultyData}
        difficultySetter={setDifficulty}
        message={message}
      />
      <Main
        memoPokeArr={memoPokeArr}
        memoPokeArrSetter={setMemoPokeArr}
        winCount={winCount}
        winCountSetter={setWinCount}
        difficultyData={difficultyData}
      />
      <Footer />
    </>
  );
}
