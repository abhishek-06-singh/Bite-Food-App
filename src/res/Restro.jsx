import React, { useEffect, useState } from "react";
import axios from "axios";
import "./restro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Restro = () => {
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
    </div>
  );
};

export default Restro;
