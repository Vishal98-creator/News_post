import React, { useRef, useState } from "react";
import { Box, Button, useMediaQuery, Typography } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { COLORS } from "../../constants";
import VideoCard from "../../components/VideoCard";
import VideoCard3 from "../../components/VideoCard2";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

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
  container: {
    display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '8px 0',  // Adjust padding to your needs
    cursor: 'grab',
    [theme.breakpoints.down('sm')]: {
      padding: '4px 0',  // Less padding on smaller screens
    },
  },
  videoCardLarge: {
    flex: '0 0 auto',
    marginRight: '16px',
    width: '600px', // Adjust width to fit in smaller screens
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      width: '100%', // Adjust width for small screens
      marginRight: '8px',
    },
  },
  videoCardSmall: {
    flex: '0 0 auto',
    marginRight: '16px',
    width: '430px', // Adjust width to fit in smaller screens
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      width: '444px', // Adjust width for small screens
      marginRight: '8px',
      
    },
  },
}));

function LatestVideos({ cardData }) {
console.log('cardData: vv', cardData);
  const navigate = useNavigate();
  const classes = useStyles();
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isMediumScreen = useMediaQuery("(max-width:970px)");

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

  const renderRows = (data) => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
      rows.push(
        <Box key={i} display="flex" flexDirection="column" alignItems="center" justifyContent={'space-between'}>
          <Box className={classes.videoCardSmall}>
            <VideoCard3 cardData={data[i]} navigate={navigate} videoUrl={data[i]?.mainVideo} />
          </Box>
          {data[i + 1] && (
            <Box className={classes.videoCardSmall} mt={2}>
              <VideoCard3 cardData={data[i + 1]} navigate={navigate} videoUrl={data[i + 1]?.mainVideo} />
            </Box>
          )}
        </Box>
      );
    }
    return rows;
  };

  return (
    <Box sx={{ mt: 8, minHeight: "100%", display: 'flex', flexDirection: 'column' }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box varient="h4" className={classes.sectionTitle}>
          Популярни
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
        className={`${classes.hideScrollbar} ${classes.container}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <Box className={classes.videoCardLarge}>
          <VideoCard
            height={"450px"}
            width={"100%"}
            showTitleBar
            navigate={navigate}
            videoUrl={cardData[0]?.mainVideo} 
            cardData={cardData}
          />
        </Box>
        {renderRows(cardData.slice(1))}
      </Box>
    </Box>
  );
}

export default LatestVideos;
