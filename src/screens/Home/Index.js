import React from "react";
import TopView from "./TopView";
import blackbgcar from "../../assets/images/blackbg-car.png";
import musicGirl from "../../assets/images/musicGirl.png";
import sportImg from "../../assets/images/sport.png";
import laptopImg from "../../assets/images/laptop.png";
import pinkbgCar from "../../assets/images/pinkbg-car.png";
import foodImg from "../../assets/images/foodImg.png";
import mobileImg from "../../assets/images/mobile.png";
import boatsImg from "../../assets/images/boats.png";
import rabitImg from "../../assets/images/rabit.png";
import bluebgCar from "../../assets/images/bluebg-car.png";
import crossImges from "../../assets/images/crossImges.png";
import musicalMan from "../../assets/images/musicalMan.png";
import Popularposts from "./Popularposts";
import SportWidget from "./SportWidget";
import { Grid } from "@mui/material";
import NewsPost from "./NewsPost";
import CategorySlider from "../../components/CategorySlider";
import { TOP_CATEGORIES } from "../../constants";
import LatestVideos from "./LatestVideos";
import Header from "../../components/Header";

const TopViewCardData = [
  {
    bgImg: blackbgcar,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: musicGirl,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
];

const PopularPostCardData = [
  {
    bgImg: pinkbgCar,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: foodImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: sportImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: laptopImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: pinkbgCar,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: foodImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
];

const newsPostCard = [
  {
    bgImg: mobileImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: boatsImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: rabitImg,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: bluebgCar,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: crossImges,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
  {
    bgImg: musicalMan,
    title: "Заглавие на новина",
    description: "Началото на статията....",
  },
];

const Index = () => {
  return (
    <>
      <Header />
      <CategorySlider TOP_CATEGORIES={TOP_CATEGORIES} />
      <TopView cardData={TopViewCardData} />
      <Popularposts cardData={PopularPostCardData} />
      <SportWidget />
      <NewsPost cardData={newsPostCard} />
      <LatestVideos cardData={newsPostCard} />
      <Popularposts cardData={PopularPostCardData} />
      <LatestVideos cardData={newsPostCard} />
      <Popularposts cardData={PopularPostCardData} />
    </>
  );
};

export default Index;
