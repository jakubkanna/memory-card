export default function CurrentScore({ memorized, wins, difficultyData }) {
  return (
    <div className="currentScore">
      <p>Wins: {wins}</p>
      <p>Level: {`${difficultyData.gameDifficulty}`}</p>
      <p>
        Memorized: {memorized} / {difficultyData.pokeCount}
      </p>
    </div>
  );
}
