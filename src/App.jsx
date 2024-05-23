import { Link } from "react-router-dom";
import "./App.css";
import { Practice } from "./components/Practice";


import { Home } from "./pages/Home";
import { Top } from "./pages/Top";
import { Why } from "./pages/Why";

function App() {
  return (
    <>
    
      <Link to="/">
        <Home />
      </Link>
      <Link to="top">
        <Top />
      </Link>
      <Link to="why">
        <Why />
      </Link>
      {/* <Practice /> */}
    </>
  );
}

export default App;
