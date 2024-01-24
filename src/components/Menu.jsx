import "../styles/Menu.css";
import MessageBox from "./MessageBox";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function Menu() {
  return (
    <div className="menu">
      <MessageBox />
      <button type="button">New Game</button>
      <footer
        style={{ position: "fixed", bottom: 0, right: 0, fontSize: "10px" }}>
        <a href="http://jakubkanna.github.io">
          jakubkanna <MarkGithubIcon size={10} />
        </a>
      </footer>
    </div>
  );
}
