import { Box, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { COLORS } from "../constants";
import { makeStyles } from "@mui/styles";
import { trimTitle } from "../utils/helperFunctios";

const VideoCard = ({ height, showTitleBar, navigate, width, videoUrl, cardData }) => {
  console.log('cardData: ====>>> ', cardData);
  const classes = useStyles();
  return (
    <Box
      sx={{
        height: height,
        maxWidth: width,
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          height: height,
          maxWidth: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
        }}
        onClick={() => navigate("/view-post/5")}
      >
        <ReactPlayer
          url = {videoUrl}
          // url="https://www.youtube.com/watch?v=UluB8Rg_AQA"
          width="100%"
          height="100%"
          controls
        />
      </div>
      {showTitleBar && cardData.length > 0 && (
        <Box className={classes.cardcontent}>
          <Typography variant="h5">{trimTitle(cardData[0]?.title,150)}</Typography>
          <Typography variant="body2" sx={{ mt: 1, color: COLORS.lightGray }}>
            Началото на статията....
          </Typography>
        </Box>
      )}{" "}
    </Box>
  );
};

export default VideoCard;

const useStyles = makeStyles((theme) => ({
  cardcontent: {
    position: "absolute",
    bottom: 0,
    height: "85px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    margin: "10px",
    color: "black",
    width: "-webkit-fill-available",
    padding:'15px'
  },
}));
