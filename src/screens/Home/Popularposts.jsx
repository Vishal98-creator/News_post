import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from "../../components/Card2";
import { Box, Button } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

function Responsive({ cardData }) {
  const sliderRef = useRef(null);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ mt: 8 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box varient="h4">Популярни_LatestVideos</Box>
        <Box>
          <Button onClick={() => sliderRef.current.slickPrev()}>
            <NavigateBefore />
          </Button>
          <Button
            onClick={() => sliderRef.current.slickNext()}
            sx={{ marginLeft: 2 }}
          >
            <NavigateNext />
          </Button>
        </Box>
      </Box>
      <div className="slider-container" style={{ height: "500px" }}>
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => {
            return (
              <div key={index}>
                <Card2 cardData={card} />
              </div>
            );
          })}
        </Slider>
      </div>
    </Box>
  );
}

export default Responsive;
