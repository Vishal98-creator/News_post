import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";
import { Box } from "@mui/material";

export default function Card2({ cardData }) {
  const classes = useStyles();
  return (
    <Card sx={{ mt: 5, width: "100%", boxShadow: "none" }}>
      <Box
        sx={{
          marginRight: "20px",
        }}
      >
        <CardMedia
          image={cardData.bgImg}
          title="green iguana"
          className={classes.cardImg}
        />
        <CardContent className={classes.cardcontent}>
          <Typography variant="h5">{cardData.title}</Typography>
          <Typography variant="body2" sx={{ mt: 2, color: COLORS.lightGray }}>
            {cardData.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  cardImg: {
    margin: "auto",
    marginTop: "18px",
    marginBottom: "0px",
    borderRadius: "12px",
    width: "100%",
    height: "262px",
  },
  cardcontent: {
    borderRadius: "12px",
    margin: "0px 0px",
    color: "black",
    width: "-webkit-fill-available",
    height: "117px",
    marginBottom: "10px",
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  },
}));
