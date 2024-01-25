import Menu from "./Menu";
import { ThreeBarsIcon } from "@primer/octicons-react";
import "../styles/Header.css";
import CurrentScore from "./CurrentScore";
import { useState } from "react";

export default function Header({
  memoCount,
  winCount,
  difficultyData,
  difficultySetter,
}) {
  const [visible, setVisibility] = useState(true); //change to true when app done

  const toggleVisibility = () => {
    setVisibility(!visible);
  };

  return (
    <header>
      <button type="button" className="burgerIcon" onClick={toggleVisibility}>
        <ThreeBarsIcon size={24} />
      </button>
      <CurrentScore
        memorized={memoCount}
        wins={winCount}
        difficultyData={difficultyData}
      />
      {visible && (
        <Menu
          setDifficulty={difficultySetter}
          setVisibility={toggleVisibility}
        />
      )}
    </header>
  );
}
