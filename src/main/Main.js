import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="">
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
          Bite is a cutting-edge restaurant app designed to enhance your dining
          experience. Whether you're a food enthusiast looking for new culinary
          adventures or just want a quick and convenient way to satisfy your
          cravings, Foodie Delight has you covered.
        </p>
      </div>
    </div>
  );
};

export default Main;
