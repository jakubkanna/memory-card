import { useState } from "react";
import "../styles/Menu.css";
import MessageBox from "./MessageBox";
import { MarkGithubIcon, XIcon } from "@primer/octicons-react";

export default function Menu({ setDifficulty, message, closeMenu }) {
  const [displayNewGameButton, setDisplayNewGameButton] = useState(true);

  function handleNewGame() {
    setDisplayNewGameButton(false);
  }

  return (
    <div className="menu">
      <header>Pokemon Memory Game </header>

      <div className="body">
        <MessageBox message={message} />
        <div className="buttonBox">
          {displayNewGameButton ? (
            <button type="button" onClick={handleNewGame}>
              New Game
            </button>
          ) : (
            <div className="difficultyButtons">
              <button
                type="button"
                onClick={() => {
                  setDifficulty("easy");
                  closeMenu();
                }}>
                Easy
              </button>
              <button
                type="button"
                onClick={() => {
                  setDifficulty("medium");
                  closeMenu();
                }}>
                Medium
              </button>
              <button
                type="button"
                onClick={() => {
                  setDifficulty("hard");
                  closeMenu();
                }}>
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
