import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../components/Card1";
import { makeStyles } from "@mui/styles";
import Card3 from "../../components/Card3";
import { Box, Button, useMediaQuery } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { COLORS } from "../../constants";
import ReactPlayer from "react-player";
import VideoCard from "../../components/VideoCard";
import { useNavigate } from "react-router-dom";
import VideoCard3 from "../../components/VideoCard2";

function LatestVideos({ cardData }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const classes = useStyles();
  const isLargeScreen = useMediaQuery("(min-width:1420px)");
  const isMediumScreen = useMediaQuery("(max-width:970px)");
  console.log("the video data inside latest video ======>>>>",cardData);
  const url1 = cardData[0].mainVideo;
  // const slicedCardData = cardData.slice(1);
  const settings = {
    className: "slider variable-width",
    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const renderRows = (data) => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
      rows.push(
        <div key={i} style={{ display: "flex", marginBottom: "10px" }}>
          <VideoCard3 cardData={data[i]} navigate={navigate} videoUrl={data[i]?.mainVideo || url1} />
          {data[i + 1] && (
            <VideoCard3 cardData={data[i + 1]} navigate={navigate} videoUrl={data[i + 1]?.mainVideo || url1} />
          )}
        </div>
      );
    }
    return rows;
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
      {!isMediumScreen ? (
        <Slider ref={sliderRef} {...settings}>
          <div style={{ width: 700 }}>
            <VideoCard
              height={"450px"}
              width={"100%"}
              showTitleBar
              navigate={navigate}
              videoUrl={url1} 
              // cardData={cardData}
            />
          </div>
         
          {renderRows(cardData.slice(1))}
        </Slider>
      ) : (
        ""
      )}
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
