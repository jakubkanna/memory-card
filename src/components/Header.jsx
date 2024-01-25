import Menu from "./Menu";
import { ThreeBarsIcon } from "@primer/octicons-react";
import "../styles/Header.css";
import CurrentScore from "./CurrentScore";
import { useEffect, useState } from "react";

export default function Header({ gameData, setDifficulty, message }) {
  const [menuVisibility, setMenuVisibility] = useState(true);

  const toggleMenu = () => {
    setMenuVisibility(!menuVisibility);
  };

  const openMenu = () => {
    setMenuVisibility(true);
  };

  const closeMenu = () => {
    setMenuVisibility(false);
  };

  useEffect(() => {
    typeof message === "string" && openMenu();
  }, [message]);

  return (
    <header>
      <button type="button" className="burgerIcon" onClick={toggleMenu}>
        <ThreeBarsIcon size={24} />
      </button>
      <CurrentScore gameData={gameData} />

      {menuVisibility && <div className="backdrop" onClick={closeMenu}></div>}

      {menuVisibility && (
        <Menu
          setDifficulty={setDifficulty}
          message={message}
          closeMenu={closeMenu}
        />
      )}
    </header>
  );
}
