import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./hero.css";

const carouselList = [
  {
    id: "1",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/0d50737c5d82b2e84c70d37dbbc0468d",
  },
  {
    id: "2",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7c7bb40560c994df088dc4ab36682344",
  },
  {
    id: "3",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/3180d5bd4606cac4ee158eead46b0540",
  },
  {
    id: "4",
    url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/6fa476c6612acbab5e2ccac960b465e2",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const { transform, opacity } = useSpring({
    opacity: 1,
    transform: `perspective(600px) rotateY(${index * -90}deg)`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {carouselList.map((item, idx) => (
        <animated.img
          key={item.id}
          src={item.url}
          className="carousel-item"
          style={{
            opacity: idx === index ? 1 : 0,
            transform: idx === index ? transform : "none",
          }}
          alt={`Carousel Item ${item.id}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
