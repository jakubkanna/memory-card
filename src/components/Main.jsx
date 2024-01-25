import Board from "./Board";

export default function Main({
  memoPokeArr,
  memoPokeArrSetter,
  winCount,
  winCountSetter,
  difficultyData,
}) {
  return (
    <main>
      <Board
        memoPokeArr={memoPokeArr}
        setMemoPokeArr={memoPokeArrSetter}
        winCount={winCount}
        setWinCount={winCountSetter}
        difficultyData={difficultyData}
      />
    </main>
  );
}
