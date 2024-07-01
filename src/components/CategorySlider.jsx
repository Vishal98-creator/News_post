import React, { useState } from "react";
import { Box, Button, Typography, CardMedia, Card } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

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
        // display: "flex",
        paddingLeft: "20px",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: "25px",
        display: {
          xs: 'none', // Hide on extra-small screens
          sm: 'none', // Hide on small screens
          md: 'flex', // Show on medium screens and up
        },
        // padding: "0 10px",
      }}
    >
      <Box
        sx={{
          padding: "16px",

          borderRadius: "30px",
          backgroundColor: "#F5F5F5",
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
            borderRadius: "10px",
            backgroundColor: "#F5F5F5",
            top: "0px",
            left: "0px",
            bottom: "10px",
            zIndex: 1,
            height: "70px",
            width: "60px",
            display: currentIndex === 0 ? "none" : "inline-flex",
            // boxShadow: "10px 0px 6px rgba(247, 244, 244, 4)",
          }}
        >
          <NavigateBefore />
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
                  // filter: "blur(2.5px)", // Apply blur effect to the image
                  filter: "blur(2px) brightness(85%)",
                  // filter: "brightness(70%)", // Apply brightness filter to fade the image
                  objectFit: "cover", // Ensure the image covers the entire CardMedia container
                  objectPosition: "center top", // Position the image within the CardMedia container
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
          </Box>
        ))}
      </Box>
      <Button
        onClick={handleNext}
        disabled={currentIndex === TOP_CATEGORIES.length - 1}
        sx={{
          // color: "rgb(62, 50, 50)",
          borderRadius: "10px",
          position: "absolute",
          backgroundColor: "#F5F5F5",
          right: 0,
          zIndex: 1,
          height: "70px",
          width: "60px",
          display:
            currentIndex >= TOP_CATEGORIES.length - 1
              ? "noinline-flexne"
              : "inline-flex",
        }}
      >
        <NavigateNext />
      </Button>
    </Box>
  );
};

export default CategorySlider;
