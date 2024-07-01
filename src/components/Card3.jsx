import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { BOXSHADOW, COLORS } from "../constants";
import { trimTitle } from "../utils/helperFunctios";

export default function Card3({ cardData }) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card sx={{  width: "100%", display: "flex", boxShadow: BOXSHADOW }}>
      <CardMedia
        image={cardData?.bgImg}
        title="green iguana"
        className={classes.cardImg}
      />
      <CardContent
        className={classes.cardcontent}
        onClick={() => navigate(`/view-post/${cardData.id}`)}
      >
        <Typography variant="h5">{trimTitle(cardData?.title,120)}</Typography>
        <Typography variant="body2" sx={{ mt: 2, color: COLORS.lightGray }}>
          {cardData?.description}
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
    cursor: "pointer",

    borderRadius: "12px",
    margin: "0px 0px",
    color: "black",
    height: "117px",
  },
}));
