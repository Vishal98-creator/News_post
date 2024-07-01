import { Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ContactUs from "./ContactUs";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Grid display={"flex"} flexDirection={"column"}>
        <Header />
        <ContactUs />
      </Grid>
    </>
  );
};

export default Index;
