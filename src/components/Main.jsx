import Board from "./Board";
import { useRef } from "react";

export default function Main() {
  const winsRef = useRef(parseInt(localStorage.getItem("wins")) || 0);

  return (
    <main>
      <Board
        winsRef={winsRef}
        onScoreChange={(value) => {
          //
        }}
      />
    </main>
  );
}
