import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rulesMd from "./assets/rules.md?raw";
import { getDifficultyData } from "./helpers";

export default function App() {
  const initialWinCount = parseInt(localStorage.getItem("winCount")) || 0;
  const rules = <ReactMarkdown children={rulesMd} />;

  const [memoPokeArr, setMemoPokeArr] = useState([]); // memo = memorized
  const [winCount, setWinCount] = useState(initialWinCount);
  const [difficulty, setDifficulty] = useState("easy");
  const [message, setMessage] = useState(rules);

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
        messageSetter={setMessage}
      />
      <Footer />
    </>
  );
}
