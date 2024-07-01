import React, { useRef } from "react";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from "../../components/Card2";
import { Box, Button } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { COLORS } from "../../constants";
import { useNavigate } from "react-router-dom";
import { trimTitle } from "../../utils/helperFunctios";

function Responsive({ cardData, title }) {
  const sliderRef = useRef(null);
  const classes = useStyles();

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
          // dots: true,
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
    <Box sx={{ mt: 8, minHeight: "100%" }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box varient="h4" className={classes.sectionTitle}>
          {trimTitle(title)}
        </Box>
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
      <div className="" style={{ height: "500px" }}>
        <Box className="cardCC">
          <Slider ref={sliderRef} {...settings}>
            <div>
              {cardData.map((card, index) => {
                return (
                  <div key={index}>
                    <Card2 cardData={card} />
                  </div>
                );
              })}
            </div>
          </Slider>
        </Box>
      </div>
    </Box>
  );
}

export default Responsive;

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "21px",
  },
  cardCC: {},
}));
