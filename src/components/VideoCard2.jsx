import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";
import VideoCard from "./VideoCard";
import { Box } from "@mui/material";

export default function VideoCard3({ cardData, navigate, videoUrl }) {
  const classes = useStyles();
  console.log("The video card23333 ===>>",cardData);
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}>
        {/* <VideoCard height={"100%"} width={"100%"} navigate={navigate} videoUrl={videoUrl} /> */}
        <VideoCard height={"200px"} width={"200px"} navigate={navigate} videoUrl={videoUrl} />
      </CardMedia>
      <CardContent className={classes.content}>
        <Box className={classes.title}
         onClick={() => navigate(`/view-post/${cardData._id}`)}
        >
          {cardData.title}
        </Box>
        <Typography variant="body2" className={classes.description}>
          Preview..
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    width: "100%",
    height: "195px",
    paddingTop: '20px'
   
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "50%",
    height: "100%",
    borderRadius: "12px 12px 12px 12px",
    overflow: "hidden",
    marginBottom: '20px',
    marginLeft: '10px'
  },
  content: {
    // backgroundColor: 'red',
    padding: "16px",
    width: "50%",
    height: '100%'
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 500,
    wordBreak:'break-word',
    whiteSpace:'normal',
    lineHeight:'1.2'
  },
  description: {
    color: COLORS.lightGray,
    marginTop: "8px",
  },
}));


