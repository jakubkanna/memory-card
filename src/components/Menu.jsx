import "../styles/Menu.css";
import MessageBox from "./MessageBox";

export default function Menu() {
  return (
    <div className="menu">
      <MessageBox />
      <button type="button">New Game</button>
    </div>
  );
}
