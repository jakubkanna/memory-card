import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
  const initialWinCount = parseInt(localStorage.getItem("winCount")) || 0;

  const [memoPokeArr, setMemoPokeArr] = useState([]); // memo = memorized
  const [winCount, setWinCount] = useState(initialWinCount);

  useEffect(() => {
    localStorage.setItem("winCount", winCount.toString());
  }, [winCount]);

  return (
    <>
      <Header memoCount={memoPokeArr.length} winCount={winCount} />
      <Main
        memoPokeArr={memoPokeArr}
        memoPokeArrSetter={setMemoPokeArr}
        winCount={winCount}
        winCountSetter={setWinCount}
      />
      <Footer />
    </>
  );
}
