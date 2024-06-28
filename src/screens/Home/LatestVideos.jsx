import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../components/Card1";
import { makeStyles } from "@mui/styles";
import Card3 from "../../components/Card3";
import { Box, Button } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { COLORS } from "../../constants";

function LatestVideos({ cardData }) {
  const sliderRef = useRef(null);
  const classes = useStyles();
  const settings = {
    className: "slider variable-width",
    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    // infinite: false,
  };
  return (
    <Box className={classes.sliderContainer} sx={{ mt: 8 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box varient="h4" className={classes.sectionTitle}>
          Популярни
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
      <Slider ref={sliderRef} {...settings}>
        <div style={{ width: 700 }}>
          <Card1 cardData={cardData[0]} />
        </div>
        <div
          style={{ width: 400, marginTop: "0px" }}
          className="c-small-card-react-slick"
        >
          <Card3 cardData={cardData[1]} />
          <Card3 cardData={cardData[2]} />
        </div>
        <div style={{ width: 400 }} className="c-small-card-react-slick">
          <Card3 cardData={cardData[3]} />
          <Card3 cardData={cardData[4]} />
        </div>
        <div style={{ width: 300 }} className="c-small-card-react-slick">
          <Card3 cardData={cardData[5]} />
          <Card3 cardData={cardData[0]} />
        </div>
      </Slider>
    </Box>
  );
}

export default LatestVideos;

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "50px",
  },
  sliderContainer: {
    width: "100%",
    marginTop: "20px",
    background: "rgba(245, 245, 245, 1)",
    padding: "20px 20px",
  },
}));
