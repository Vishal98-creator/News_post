import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Card1 from "./Card1"; // Adjust the import path as needed
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

export default function ImageSlider(props) {
  const { cardDataArray } = props;
  
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === cardDataArray.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? cardDataArray.length - 1 : prev - 1
    );
  };

  return (
    <div className={classes.sliderContainer}>
      <div className={`${classes.slide}`}>
        <Card1 cardData={cardDataArray[currentSlide]} />
      </div>
      <div className={classes.buttons}>
        <Button
          onClick={prevSlide}
          sx={{ width: "40px", height: "40px", marginLeft: "10px" }}
        >
          <NavigateBefore />
        </Button>
        <Button
          onClick={nextSlide}
          sx={{ width: "40px", height: "40px", marginRight: "10px" }}
        >
          <NavigateNext />
        </Button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    position: "relative",
    width: "100%",
    margin: "auto",
    overflow: "hidden",
    height: "452px", // Adjust height as needed
  },
  slide: {
    opacity: 1,
    transition: "opacity 0.5s ease-in-out",
    width: "100%",
    height: "100%", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slideActive: {
    opacity: 1,
  },
  buttons: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    transform: "translateY(-50%)",
    zIndex: 1, // Ensure buttons are above slides
  },
}));
