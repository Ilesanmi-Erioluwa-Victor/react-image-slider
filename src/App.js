import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import Data from "./Data";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(Data);

  return (
    <div className="App">
      <header className="App-header">
        <FaChevronRight />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
