import Card from "./Card"; // Assuming you have a Card component

export default function CardContainer({ cardCount = 4 }) {
  const cards = [];

  for (let i = 0; i < cardCount; i++) {
    cards.push(<Card key={i} />);
  }

  return <div className="card-container">{cards}</div>;
}
