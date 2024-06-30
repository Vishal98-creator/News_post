import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import Card2 from "../../components/Card2";
import { Box, Button } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { COLORS } from "../../constants";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "21px",
  },
  noSelect: {
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
  },
  hideScrollbar: {
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none',  /* Internet Explorer 10+ */
    '&::-webkit-scrollbar': {
      display: 'none', /* Safari and Chrome */
    },
  },
}));

function Responsive({ cardData, title }) {
  const classes = useStyles();
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.style.cursor = 'grabbing'; // Change cursor to grabbing
    document.body.classList.add(classes.noSelect); // Disable text selection
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default'; // Reset cursor
    document.body.classList.remove(classes.noSelect); // Enable text selection
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default'; // Reset cursor
    document.body.classList.remove(classes.noSelect); // Enable text selection
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    document.body.classList.add(classes.noSelect); // Disable text selection
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    document.body.classList.remove(classes.noSelect); // Enable text selection
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box sx={{ mt: 8, minHeight: "100%", display: 'flex', flexDirection: 'column' }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box varient="h4" className={classes.sectionTitle}>
          {title}
        </Box>
        <Box>
          <Button onClick={() => containerRef.current.scrollLeft -= 360}>
            <NavigateBefore />
          </Button>
          <Button
            onClick={() => containerRef.current.scrollLeft += 360}
            sx={{ marginLeft: 2 }}
          >
            <NavigateNext />
          </Button>
        </Box>
      </Box>
      <Box
        ref={containerRef}
        className={classes.hideScrollbar} // Apply hide scrollbar class
        sx={{
          display: 'flex',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          padding: 2,
          cursor: isDragging ? 'grabbing' : 'grab', // Change cursor during dragging
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {cardData?.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              marginRight: 2,
              width: '360px', // Set a fixed width for each card
              boxSizing: 'border-box',
            }}
          >
            <Card2 cardData={card} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Responsive;
