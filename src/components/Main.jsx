import Board from "./Board";

export default function Main({ cardsDataArr, gameDifficulty, onCardClick }) {
  return (
    <main>
      <Board
        cardsDataArr={cardsDataArr}
        gameDifficulty={gameDifficulty}
        onCardClick={onCardClick}
      />
    </main>
  );
}
