import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Card1 from "./Card1"; // Adjust the import path as needed
import blackbgcar from "../assets/images/blackbg-car.png";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const cardDataArray = [
  { bgImg: blackbgcar, title: "Title 1", description: "Description 1" },
  { bgImg: blackbgcar, title: "Title 2", description: "Description 2" },
  { bgImg: blackbgcar, title: "Title 3", description: "Description 3" },
];

export default function ImageSlider() {
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
      {cardDataArray.map((cardData, index) => (
        <div
          key={index}
          className={`${classes.slide} ${
            index === currentSlide ? classes.slideActive : ""
          }`}
        >
          <Card1 cardData={cardData} />
        </div>
      ))}
      <div className={classes.buttons}>
        <Button onClick={prevSlide} sx={{width:'40px', height:'40px', marginLeft:'10px'}}>
          <NavigateBefore />
        </Button>
        <Button onClick={nextSlide} sx={{width:'40px', height:'40px', marginRight:'10px'}}>
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
    opacity: 0,
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
