import React, { useEffect, useRef, useState } from 'react';
import './TextCarousel.css'

const messages = [
  '#FF6F61', // red
  '#6B5B95', // purple 
  '#FCBC04', // yellow
  '#8B93A2',  // grey
  '#77DD77', // green
  '#61A5C2', // blue
]
const delay = 3000;
const TextCarousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === messages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
          <div className="txt">
            search
          </div>
          <form className="searchbar-form d-flex" role="search">
            <svg className="SearchIcon d-flex" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14511 7.06398L11.6923 10.6111L10.7699 11.5335L7.22273 7.98636C6.56035 8.46303 5.76178 8.75398 4.88892 8.75398C2.66654 8.75398 0.865112 6.95255 0.865112 4.73017C0.865112 2.50779 2.66654 0.70636 4.88892 0.70636C7.1113 0.70636 8.91273 2.50779 8.91273 4.73017C8.91273 5.60303 8.62178 6.4016 8.14511 7.06398ZM4.88892 1.94446C3.34749 1.94446 2.10321 3.18874 2.10321 4.73017C2.10321 6.2716 3.34749 7.51588 4.88892 7.51588C6.43035 7.51588 7.67464 6.2716 7.67464 4.73017C7.67464 3.18874 6.43035 1.94446 4.88892 1.94446Z" fill="#539BBB" />
            </svg>

            <input className="searchbar form-control " type="search"  placeholder="Search by profile, setting, artifact etc..." aria-label="Search" />
          </form>
        
        <div className="text-carousel">
          <div className="text-1">
          Set-up Catalix for Success
          </div>
          <div className="text-2">
          Get Catalix up to date or start your transformation by following the guide below.
          </div>
        </div>
        <div className="carousal d-flex">
          {messages.map((message, idx) => (
            <div className="carousal-item" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              <div className="carousel-item-count d-flex">
                <div className="item-count">
                  {idx + 1}/6
                </div>
              </div>
              <div className="carousal-text">
                <div className="text-center">{message}</div>
              </div>
              <div className="carousal-button">
                <button type="button" className='btn'>
                  Learn More
                </button>
              </div>
            </div>
          ))
          }

          <div className="slideshowDots">
            {messages.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </>
      )
}

      export default TextCarousel
