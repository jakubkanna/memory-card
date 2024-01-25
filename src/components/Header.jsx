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
  message,
}) {
  const [menuVisible, setMenuVisibility] = useState(true);

  const toggleMenu = () => {
    setMenuVisibility(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisibility(false);
  };

  return (
    <header>
      <button type="button" className="burgerIcon" onClick={toggleMenu}>
        <ThreeBarsIcon size={24} />
      </button>
      <CurrentScore
        memorized={memoCount}
        wins={winCount}
        difficultyData={difficultyData}
      />

      {menuVisible && <div className="backdrop" onClick={closeMenu}></div>}

      {menuVisible && (
        <Menu
          setDifficulty={difficultySetter}
          closeMenu={closeMenu}
          message={message}
        />
      )}
    </header>
  );
}
