import React from "react";
import Grid from "@mui/material/Grid";
import Card1 from "../../components/Card1";
import CardSlider from "../../components/CardSlider";

const TopView = (props) => {
  const { cardData } = props;
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display={"flex"}
        justifyContent={"center"}
      >
        <Card1 cardData={cardData[0]} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        display={"flex"}
        justifyContent={"center"}
      >
        <Card1 cardData={cardData[1]} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        display={"flex"}
        justifyContent={"center"}
      >
        {/* <Card1 cardData={cardData[0]}/> */}
        <CardSlider />
      </Grid>
    </Grid>
  );
};

export default TopView;
