import React from "react";
// import TopView from "./TopView";
import { TOP_CATEGORIES } from "../../constants";
import CategorySlider from "../../components/CategorySlider";

const Index = () => {
  return (
    <>
      <CategorySlider TOP_CATEGORIES={TOP_CATEGORIES} />
      {/* <TopView /> */}
    </>
  );
};

export default Index;
