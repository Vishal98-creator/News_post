import React, { useState } from "react";
import { Box, Button, Typography, CardMedia, Card } from "@mui/material";

const CategorySlider = ({ TOP_CATEGORIES }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < TOP_CATEGORIES.length ? prevIndex + 4 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TOP_CATEGORIES.length - 1 : prevIndex - 4
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "68px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        // padding: "0 10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgb(245, 245, 245)",
          display: "flex",
          transition: "margin 0.3s ease-in-out",
          marginLeft: `-${currentIndex * 45}px`,
          whiteSpace: "nowrap",
          gap: "20px",
          // width: `${categories.length * 180}px`, // Adjust the width dynamically
        }}
      >
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            position: "absolute",
            left: "0px",
            zIndex: 1,
            height: "48px",
            minWidth: "90px",
            fontSize: "1.5rem",
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 5))",
            transition: "background-color 0.3s ease", // Smooth transition for hover effect
            "&:hover": {
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1.5))",
              // Adjust the gradient colors and opacity as needed
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", // Adding a subtle box shadow for shading
            },

            display: currentIndex === 0 ? "none" : "inline-flex",
          }}
        >
          {"<"}
        </Button>
        {TOP_CATEGORIES.map((category, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-block",
              width: "170px",
              height: "48px",
              margin: "0 5px",
              borderRadius: "12px",
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden", // Ensure content is clipped to the border radius
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={category.image}
                alt="topTags"
                sx={{
                  filter: "blur(2px)", // Apply blur effect to the image
                  objectFit: "cover", // Ensure the image covers the entire CardMedia container
                  objectPosition: "center top", // Position the image within the CardMedia container
                  filter: "brightness(70%)", // Apply brightness filter to fade the image
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "30%", // Position the text at the vertical center of the Card
                  left: "45%", // Position the text at the horizontal center of the Card
                  transform: "translate(-50%, 50%)", // Adjust to center both horizontally and vertically
                  backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                  margin: "10px", // Adjust margin as needed
                  fontSize: "1.2rem", // Adjust font size as needed
                }}
              >
                {category.name}
              </Typography>
            </Card>

            {/* <Typography
              variant="subtitle1"
              sx={{
                color: "#fff",
                textAlign: "center",
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "12px",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                boxSizing: "border-box",
              }}
            >
              {category.name}
            </Typography> */}
          </Box>
        ))}
      </Box>
      <Button
        onClick={handleNext}
        disabled={currentIndex === TOP_CATEGORIES.length - 1}
        sx={{
          color: "rgb(62, 50, 50)",
          position: "absolute",
          right: "0px",
          zIndex: 1,
          height: "48px",
          minWidth: "90px",
          fontSize: "1.5rem",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 5))",
          transition: "background-color 0.3s ease", // Smooth transition for hover effect
          "&:hover": {
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1.5))",
            // Increase the opacity towards the right
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", // Adding a subtle box shadow for shading
          },
          display:
            currentIndex >= TOP_CATEGORIES.length - 1 ? "none" : "inline-flex",
        }}
      >
        {">"}
      </Button>
    </Box>
  );
};

export default CategorySlider;
