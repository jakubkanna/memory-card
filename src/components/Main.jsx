import Board from "./Board";
import { useRef } from "react";

export default function Main({ memoPokeArr, memoPokeArrSetter }) {
  return (
    <main>
      <Board memoPokeArr={memoPokeArr} setMemoPokeArr={memoPokeArrSetter} />
    </main>
  );
}
