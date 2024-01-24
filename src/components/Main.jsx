import Board from "./Board";
import { useRef } from "react";

export default function Main({ score }) {
  const winsRef = useRef(parseInt(localStorage.getItem("wins")) || 0);

  return (
    <main>
      <Board
        winsRef={winsRef}
        onScoreChange={(newScore) => (score = newScore)} // Update the score here
      />
    </main>
  );
}
