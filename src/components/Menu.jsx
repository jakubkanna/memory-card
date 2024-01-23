import "../styles/Menu.css";
import MessageBox from "./MessageBox";
import Button from "./Button";

export default function Menu() {
  return (
    <div className="menu">
      <MessageBox />
      <Button text="New Game" />
    </div>
  );
}
