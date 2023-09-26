import React, { useEffect, useState, useRef } from "react";
import "./restro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "3d-react-carousal";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Restro = () => {
  const [apidata, setApiData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const [dishSlider, setDishSlider] = useState([]);
  const [dishSliderName, setDishSliderName] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const sliderRef = useRef(null);
  console.log(dishSliderName);
  useEffect(() => {
    fetchData();
  }, [apidata]);

  const cloudImgId =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();
      console.log(json);

      const Bannerurls =
        json.data.cards[0].card.card.gridElements.infoWithStyle.info.map(
          (item) => cloudImgId + item.imageId
        );
      const Sliderurls = json.data.cards[1].card.card.imageGridCards.info.map(
        (item) => cloudImgId + item.imageId
      );
      const Sliderurlsname =
        json.data.cards[1].card.card.imageGridCards.info.map(
          (item) => item.action.text
        );

      const imageElements = Bannerurls.map((imageUrl, index) => (
        <img src={imageUrl} alt={`Image ${index}`} key={index} />
      ));

      setCarouselImages(imageElements);
      setDishSlider(Sliderurls);
      setDishSliderName(Sliderurlsname);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleLeftArrowClick = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      const newScrollLeft = sliderRef.current.scrollLeft - scrollAmount / 2;
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleRightArrowClick = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth;
      const newScrollLeft = sliderRef.current.scrollLeft + scrollAmount / 2;
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
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
          <Carousel
            width="900px"
            slides={carouselImages}
            autoplay={true}
            interval={1000}
          />
        )}
      </div>
      <span className="section-title"> What's on your mind?</span>
      <div className="arrow-container">
        <span className="arrow" onClick={handleLeftArrowClick}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000" }} />
        </span>
        <span className="arrow" onClick={handleRightArrowClick}>
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000" }} />
        </span>
      </div>
      <div className="dish-container">
        <div className="dish-slider" ref={sliderRef}>
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                key={index}
                sx={{
                  bgcolor: "grey.900",
                  borderRadius: "50%",
                  marginRight: "50px",
                }}
                variant="rectangular"
                width={100}
                height={100}
              />
            ))
          ) : (
            <>
              {dishSlider.map((imageUrl, index) => (
                <div key={index} className="dish-item">
                  <img
                    src={imageUrl}
                    alt={`Dish ${index}`}
                    className="dish-thumbnail"
                  />
                  <p style={{ marginLeft: "55px" }}>{dishSliderName[index]}</p>
                </div>
              ))}
            </>
          )}
        </div>
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
