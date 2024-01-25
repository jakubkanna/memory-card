export default function CurrentScore({ score }) {
  return (
    <div className="currentScore">
      <p>Wins:</p>
      <p>Memorized: {score}</p>
    </div>
  );
}
