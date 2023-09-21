import React, { useEffect, useState } from "react";
import axios from "axios";
import "./restro.css";
// import Carousel from "../carouselcomponent/Carousel";
import { Carousel } from "3d-react-carousal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Restro = () => {
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];
  useEffect(() => {
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="filters">
        <div className="input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input className="input" placeholder="Search restaurants" />
        </div>
      </div>
      <div className="carousel">
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </div>
    </div>
  );
};

export default Restro;
