import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [memoPokeArr, setMemoPokeArr] = useState([]); // memo = memorized

  return (
    <>
      <Header memorized={memoPokeArr.length} />
      <Main memoPokeArr={memoPokeArr} memoPokeArrSetter={setMemoPokeArr} />
      <Footer />
    </>
  );
}

{
  /* <App>
  <Header>
    <CurrentScore />
  </Header>
  <Main>
    <Board />
  </Main>
  <Footer />
</App>; */
}
