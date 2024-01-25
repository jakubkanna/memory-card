export default function CurrentScore({ memorized, wins }) {
  return (
    <div className="currentScore">
      <p>Wins: {wins}</p>
      <p>Memorized: {memorized}</p>
    </div>
  );
}
