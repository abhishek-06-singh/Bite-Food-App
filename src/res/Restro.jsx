import React, { useEffect, useState } from "react";
import axios from "axios";
import "./restro.css";
import { Input, Button, Modal, Checkbox } from "antd";

const Restro = () => {
  const { Search } = Input;
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
        <input className="input" placeholder="input search text" />
      </div>
    </div>
  );
};

export default Restro;
