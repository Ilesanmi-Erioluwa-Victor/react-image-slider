import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import Data from "./Data";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(Data);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/ </span> Reviews
        </h2>
      </div>

      <div className="section-center">
        {data.map((people, index) => {
          const { id, image, name, title, quote } = people;
        })}
      </div>
    </section>
  );
}

export default App;
