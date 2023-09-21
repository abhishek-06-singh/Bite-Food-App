import React, { useEffect, useState } from "react";
import "./restro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";

const Restro = () => {
  const [apidata, setApiData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  console.log(carouselImages);

  useEffect(() => {
    fetchData();
  }, []);

  const cloudImgId =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const imageUrls =
      json.data.cards[0].card.card.gridElements.infoWithStyle.info.map(
        (item) => cloudImgId + item.imageId
      );

    const imageElements = imageUrls.map((imageUrl, index) => (
      <img src={imageUrl} alt={`Image ${index}`} key={index} />
    ));

    setCarouselImages(imageElements);
  };

  return (
    <div className="container">
      <div className="filters">
        <div className="input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input className="input" placeholder="Search restaurants" />
        </div>
      </div>
      <div className="carousel">
        <Carousel slides={carouselImages} autoplay={true} interval={3000} />
      </div>
    </div>
  );
};

export default Restro;
