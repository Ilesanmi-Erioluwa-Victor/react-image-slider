import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import Data from "./Data";

function App() {
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [data, setData] = useState(Data);

  // You can use this function instead of the below useEffect

  /* const nextSlide = () => {
     setIndex((oldValue) => {
       let newIndex = oldValue + 1;

       if (newIndex > data.length - 1) {
         newIndex = 0;
       }
       return newIndex;
     });
   };

   const prevSlide = () => {
     setIndex((oldValue) => {
       let newIndex = oldValue - 1;

       if (newIndex < 0) {
         newIndex = data.length - 1;
       }
       return newIndex;
     });
   };
 */

  // Note : whem using this method, your useEffect autoplay will run out of index
  // To fix the gotcha, copy paste you

  /*setIndex((oldValue) => {
    let newIndex = oldValue + 1;

    if (newIndex > data.length - 1) {
      newIndex = 0;
    }
    return newIndex;
  }); */

  // To your setInterval function.

  useEffect(() => {
    //  Checkfor last person...
    const lastIndex = data.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    //  setIndex to Zero if attain last slide
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  // useEffect for autoplay
  useEffect(() => {
    // Always have a clean up function for your windows function
    let Slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    // always have a clean up function to make your app more functional and to avoid bugs
    return () => clearInterval(Slider);
  }, [index]);

  return (
    <section className="section">
      <img src="./images/1.jpg" alt="Name" />
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

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>

        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
