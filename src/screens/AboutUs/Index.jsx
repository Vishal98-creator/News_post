import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { AboutUs } from "./AboutUs";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Grid display={"flex"} flexDirection={"column"}>
        <Header />
        <AboutUs />
        <Footer />
      </Grid>
    </>
  );
};

export default Index;
