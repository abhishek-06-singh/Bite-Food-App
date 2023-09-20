import React from "react";
import "./main.css";
import bag from "../../assets/bag.png";
import certi from "../../assets/certi.png";
import anytime from "../../assets/anytime.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <>
      <div className="bag-icon">
        <div className="icon-container">
          <img
            style={{ width: "60%", marginLeft: "30px" }}
            src={bag}
            alt="Bag Icon"
          />
          <h2>Home Delivery</h2>
        </div>
        <div className="icon-container">
          <img src={certi} style={{ width: "50%" }} alt="Certificate Icon" />
          <h2>Safe Packaging</h2>
        </div>
        <div className="icon-container">
          <img src={anytime} style={{ width: "50%" }} alt="Clock Icon" />
          <h2>24-Hour Delivery</h2>
        </div>
      </div>

      <div className="container">
        <div className="heading">
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <FontAwesomeIcon icon={faLocationDot} size="2xl" color=" white" />
            <h1>Order Food from best place near you</h1>
          </div>

          <p>
            Bite is a cutting-edge restaurant app designed to enhance your
            dining experience. Whether you're a food enthusiast looking for new
            culinary adventures or just want a quick and convenient way to
            satisfy your cravings, Foodie Delight has you covered.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
