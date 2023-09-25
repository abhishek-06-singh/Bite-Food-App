import React, { useEffect, useState } from "react";
import "./restro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Restro = () => {
  const [apidata, setApiData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(carouselImages);

  useEffect(() => {
    fetchData();
  }, []);

  const cloudImgId =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const fetchData = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <div className="container">
      <span className="section-title">Best offers for you ➪</span>
      <div className="carousel">
        {isLoading ? (
          <Box
            sx={{
              paddingLeft: "100px",
              paddingRight: "100px",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        ) : (
          <Carousel slides={carouselImages} autoplay={true} interval={3000} />
        )}
      </div>

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
