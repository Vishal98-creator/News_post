import React from "react";
import Grid from "@mui/material/Grid";
import Card1 from "../../components/Card1";
import CardSlider from "../../components/CardSlider";
import blackbgcar from "../../assets/images/blackbg-car.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const cardDataArray = [
  { bgImg: blackbgcar, title: "Title 1", description: "Description 1" },
  { bgImg: blackbgcar, title: "Title 2", description: "Description 2" },
  { bgImg: blackbgcar, title: "Title 3", description: "Description 3" },
];
const TopView = (props) => {
  const { cardData } = props;
  const isMediumScreen = useMediaQuery("(max-width:970px)");
  const isLargeScreen = useMediaQuery("(min-width:1420px)");
  const ismobileScreen = useMediaQuery("(max-width:700px)");
  const ishideSmallCards = useMediaQuery("(max-width:900px)"); // do not change
  console.log("ishideSmallCards: ", ishideSmallCards);

  return (
    <Grid container spacing={2} mt={2}>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display={ishideSmallCards ? "none" : "flex"}
        justifyContent={"center"}
      >
        <Card1 cardData={cardData[0]} />
      </Grid>
      {cardData.length > 1 ? (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          display={ishideSmallCards ? "none" : "flex"}
          justifyContent={"center"}
        >
          <Card1 cardData={cardData[1]} />
        </Grid>
      ) : (
        ""
      )}
      {cardData.length > 2 ? (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display={"flex"}
          justifyContent={"center"}
        >
          <CardSlider
            cardDataArray={
              ishideSmallCards
                ? cardData
                : cardData.length > 2
                ? cardData.slice(2)
                : cardDataArray
            }
          />
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default TopView;
