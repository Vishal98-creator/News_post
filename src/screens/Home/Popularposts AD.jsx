import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Card2 from "../../components/Card2";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../constants";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
  },
}));

const Popularposts = ({ cardData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const visibleCards = isSmallScreen ? 1 : isMediumScreen ? 2 : 4; // Adjust the number of visible cards based on screen size
  const cardWidth = 100 / visibleCards; // Each card's width in percentage of the container

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < cardData.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Популярни
        </Typography>
        <Box>
          <Button onClick={handlePrev}>
            <NavigateBefore />
          </Button>
          <Button onClick={handleNext} sx={{ marginLeft: 2 }}>
            <NavigateNext />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.3s ease-in-out",
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cardData.map((card, i) => (
            <Box
              key={i}
              sx={{
                flex: `0 0 ${cardWidth}%`,
                maxWidth: `${cardWidth}%`,
                boxSizing: "border-box",
                padding: "10px",
              }}
            >
              <Card2 cardData={card} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Popularposts;
