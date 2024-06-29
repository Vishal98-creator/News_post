import React from "react";
import Grid from "@mui/material/Grid";
import Card1 from "../../components/Card1";
import CardSlider from "../../components/CardSlider";
import blackbgcar from '../../assets/images/blackbg-car.png'

const cardDataArray = [
  { bgImg: blackbgcar, title: "Title 1", description: "Description 1" },
  { bgImg: blackbgcar, title: "Title 2", description: "Description 2" },
  { bgImg: blackbgcar, title: "Title 3", description: "Description 3" },
];
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
        {/* <CardSlider cardDataArray={cardData.slice(2)} /> */}
        <CardSlider/>
      </Grid>
    </Grid>
  );
};

export default TopView;
