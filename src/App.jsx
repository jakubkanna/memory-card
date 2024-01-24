import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Board from "./components/Board";

export default function App({ score }) {
  return (
    <>
      <Header score={score} />
      <Main score={score} />
      <Footer />
    </>
  );
}

<App >
  <Header>
    <CurrentScore score={score} />
  </Header>
  <Main>
    <Board onScoreChange={}/>
  </Main>
  <Footer />
</App>;
