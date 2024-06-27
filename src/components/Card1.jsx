import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

export default function Card1({ cardData }) {
  const classes = useStyles();
  return (
    <Card className={classes.cardcontainer} sx={{ borderRadius: "12px" }}>
      <CardMedia
        component="img"
        height="100%"
        image={cardData.bgImg}
        alt="Paella dish"
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5">{cardData.title}</Typography>
        <Typography variant="body2" sx={{ mt: 1, color: COLORS.lightGray }}>
          {cardData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  cardcontainer: {
    maxWidth: "100%",
    height: "452px",
    position: "relative",
    borderRadius: "12px",
    width: "100%",
  },
  cardcontent: {
    position: "absolute",
    bottom: 0,
    height: "117px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    margin: "10px",
    color: "black",
    width: "-webkit-fill-available",
  },
}));
