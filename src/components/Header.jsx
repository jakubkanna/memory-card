import Menu from "./Menu";
import { ThreeBarsIcon } from "@primer/octicons-react";
import "../styles/Header.css";
import CurrentScore from "./CurrentScore";
import { useState } from "react";

export default function Header({ memoCount, winCount }) {
  const [visible, setVisibility] = useState(false); //change to true when app done

  const handleClick = () => {
    setVisibility(!visible);
  };

  return (
    <header>
      <button type="button" className="burgerIcon" onClick={handleClick}>
        <ThreeBarsIcon size={24} />
      </button>
      <CurrentScore memorized={memoCount} wins={winCount} />
      {visible && <Menu />}
    </header>
  );
}
