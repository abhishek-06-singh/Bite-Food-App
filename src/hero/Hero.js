import React, { useEffect, useState } from "react";
import background from "./../../assets/herobackground.jpg";

import "./hero.css";

const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="hero-container">
      <div
        className="background"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={`darkish-fade ${showText ? "show-text" : ""}`}></div>
      </div>
      <div className={`content ${showText ? "show-text" : ""}`}>
        <h1 className="text">A Bite Is All You Need...</h1>

        <p className="animate-text">
          Bite is a cutting-edge restaurant app designed to enhance your dining
          experience. Whether you're a food enthusiast looking for new culinary
          adventures or just want a quick and convenient way to satisfy your
          cravings, Foodie Delight has you covered.
        </p>
      </div>
    </div>
  );
};

export default Hero;
