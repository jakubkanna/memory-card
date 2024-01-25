import Board from "./Board";
import { useRef } from "react";

export default function Main({
  memoPokeArr,
  memoPokeArrSetter,
  winCount,
  winCountSetter,
}) {
  return (
    <main>
      <Board
        memoPokeArr={memoPokeArr}
        setMemoPokeArr={memoPokeArrSetter}
        winCount={winCount}
        setWinCount={winCountSetter}
      />
    </main>
  );
}
