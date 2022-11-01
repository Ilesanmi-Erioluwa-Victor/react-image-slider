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
        {data.map((people, peopleIndex) => {
          const { id, image, name, title, quote } = people;

          let position = "nextSlide";

          if (index === peopleIndex) {
            position = "activeSlide";
          }

          if (
            peopleIndex === index - 1 ||
            (index === 0 && peopleIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img
                src={image}
                loading="lazy"
                alt={name}
                className="person-img"
              />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() => setIndex((...prev) => prev - 1)}
        >
          <FaChevronLeft />
        </button>

        <button
          className="next"
          onClick={() => setIndex((...prev) => prev + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
