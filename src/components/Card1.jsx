import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import blackbgcar from "../assets/images/blackbg-car.png";
import { makeStyles } from "@mui/styles";

export default function Card1() {
  const classes = useStyles();
  return (
    <Card className={classes.cardcontainer}>
      <CardMedia
        component="img"
        height="100%"
        image={blackbgcar}
        alt="Paella dish"
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5">Заглавие на новина</Typography>
        <Typography variant="body2">Началото на статията....</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  cardcontainer: {
    maxWidth: 360,
    height: "452px",
    position: "relative",
    borderRadius: "12px",
  },
  cardcontent: {
    position: "absolute",
    bottom: 0,
    height: "117px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    margin: "10px",
    color: "black",
    width: "307px",
  },
}));
