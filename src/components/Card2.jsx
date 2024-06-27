import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

export default function Card2({ cardData }) {
    const classes = useStyles();
  return (
    <Card sx={{  mt: 5, width:360 }}>
      <CardMedia
        image={cardData.bgImg}
        title="green iguana"
        className={classes.cardImg}
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="h5">{cardData.title}</Typography>
        <Typography variant="body2" sx={{mt:2, color:COLORS.lightGray}}>{cardData.description}</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
    cardImg: {
        margin:'auto',
        marginTop:'18px',
        marginBottom:'0px',
        borderRadius:'12px',
        width:'340px',
        height:'262px'
    },
    cardcontent: {
        borderRadius: "12px",
        margin: "0px 0px",
        color: "black",
        width: "-webkit-fill-available",
        height:'117px'
      },
  }));