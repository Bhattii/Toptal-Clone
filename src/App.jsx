import "./App.css";
import { Header } from "./layouts/Header";

import { Home } from "./pages/Home";
import { Top } from "./pages/Top";
import { Why } from "./pages/Why";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Top />
        <Why />
      </div>
    </>
  );
}

export default App;
