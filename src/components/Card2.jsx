import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: "0px 2px 10px rgb(0 0 0 / 40%)",
    display: "flex",
    justifyContent: "center",
    width: "360px",
    padding: "7px",
    border: "none",
  },
  cardImg: {
    width: "100%",
    height: "262px",
    objectFit: "cover",
    borderRadius: "12px",
    // boxShadow: "0px 2px 10px rgb(0 0 0 / 40%)",
  },
  cardContent: {
    textAlign: "center", // Center align text content
    padding: theme.spacing(2),
  },
}));

const Card2 = ({ cardData }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      sx={{ boxShadow: "0px 2px 10px rgb(0 0 0 / 40%)" }}
    >
      <Box>
        <CardMedia
          component="img"
          image={cardData.bgImg}
          title="green iguana"
          className={classes.cardImg}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{cardData.title}</Typography>
          <Typography variant="body2" sx={{ mt: 1, color: COLORS.lightGray }}>
            {cardData.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Card2;
