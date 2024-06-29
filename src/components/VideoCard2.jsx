import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";
import VideoCard from "./VideoCard";

export default function VideoCard3({ cardData, navigate }) {
  const classes = useStyles();
  return (
    <Card sx={{ width: "100%", display: "flex" }}>
      <div className="mang-margin">
        <VideoCard height={"220px"} width={"100%"} navigate={navigate} />
      </div>
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5">{cardData.title}</Typography>
        <Typography variant="body2" sx={{ mt: 2, color: COLORS.lightGray }}>
          {cardData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  cardImg: {
    margin: "10px",
    borderRadius: "12px",
    width: "340px",
    height: "190px",
  },
  cardcontent: {
    borderRadius: "12px",
    margin: "0px 0px",
    color: "black",
    height: "117px",
  },
}));
