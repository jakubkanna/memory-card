import "../styles/CurrentScore.css";

export default function CurrentScore({ gameData }) {
  return (
    <div className="currentScore">
      <p>Wins: {gameData.winCount}</p>
      <p>Difficulty: {`${gameData.gameDifficulty}`}</p>
      <p>
        Memorized: {gameData.memorizedCount} / {gameData.pokeCount}
      </p>
    </div>
  );
}
