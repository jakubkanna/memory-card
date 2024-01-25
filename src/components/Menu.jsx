import { useState } from "react";
import "../styles/Menu.css";
import MessageBox from "./MessageBox";
import { MarkGithubIcon, XIcon } from "@primer/octicons-react";

export default function Menu({ setDifficulty, closeMenu }) {
  const [displayNewGameButton, setDisplayNewGameButton] = useState(true);

  function passValue(difficulty) {
    setDifficulty(difficulty);
    closeMenu(); // Hide the Menu component after difficulty is selected
  }

  function handleNewGame() {
    setDisplayNewGameButton(false);
  }

  return (
    <div className="menu">
      <header>
        {/* <button type="button">
          <XIcon size={24} />
        </button> */}
      </header>

      <div className="body">
        <MessageBox />
        <div className="buttonBox">
          {displayNewGameButton ? (
            <button type="button" onClick={handleNewGame}>
              New Game
            </button>
          ) : (
            <div className="difficultyButtons">
              <button type="button" onClick={() => passValue("easy")}>
                Easy
              </button>
              <button type="button" onClick={() => passValue("medium")}>
                Medium
              </button>
              <button type="button" onClick={() => passValue("hard")}>
                Hard
              </button>
            </div>
          )}
        </div>

        <footer
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            fontSize: "10px",
          }}>
          <a href="http://jakubkanna.github.io">
            jakubkanna <MarkGithubIcon size={10} />
          </a>
        </footer>
      </div>
    </div>
  );
}
