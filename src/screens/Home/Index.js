import React, { useEffect, useState } from "react";
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
import { apiCall } from "../../utils/httpClient";
import apiEndPoints from "../../utils/apiEndPoints";



const Index = () => {
  // const [popularVideos, setPopularVideos] = useState([]);
  // const [featuredVideos, setFeaturedVideos] = useState([]);

  // const [featuredImages, setFeaturedImages] = useState([]);

  const [popularImages, setPopularImages] = useState([]);
  console.log("popularImages: ", popularImages);
  const [newPostImages, setNewPostImages] = useState([]);
  const [latestVideo, setLatestVideo] = useState([]);
  const [teandingImages, setTrandingImages] = useState([]);
  const [trandingVideos, setTrandingVideos] = useState([]);
  const [topCardData, setTopCardData] = useState([]);

  useEffect(() => {
    getData();
    getNewPostImages();
    getLatestVideos();
    getTrandingImagesPost();
    getTrandingVideoPost();
  }, []);

  const getData = async () => {
    await getPopularPost();
  };

  const getPopularPost = async () => {
    const data = {
      
      limit: 50,
      offset: 0,
      filters: {
        flag: "popular", //popular, tranding, featured
        postType: "image", //image. video
      },
    };
    try {
      const response = await apiCall(
        "POST",
        apiEndPoints.GETPOSTLIST,
        JSON.stringify(data)
      );
      console.log("response:==> ", response);
      if (response) {
        const formattedData =
          response?.data?.posts?.length > 0
            ? response?.data?.posts.map((item) => {
                return {
                  bgImg: item?.mainImage || blackbgcar,
                  title: item?.title || "Заглавие на новина",
                  description: "Началото на статията....",
                };
              })
            : [];
        setPopularImages(formattedData);
      } else {
        // setTrandingVideos(TopViewCardData);
      }
    } catch (error) {
      console.error("GETPOSTLIST error :- ", error);
    }
  };

  const getNewPostImages = async () => {
    const data = {
      limit: 50,
      offset: 0,
      filters: {
        // flag: "", //popular, tranding, featured
        postType: "image", //image. video
      },
    };
    try {
      const response = await apiCall(
        "POST",
        apiEndPoints.GETPOSTLIST,
        JSON.stringify(data)
      );
      if (response) {
        const formattedData = response?.data?.posts.map((item) => {
          return {
            bgImg: item?.mainImage || blackbgcar,
            title: item?.title || "Заглавие на новина",
            description: "Началото на статията....",
          };
        });
        setNewPostImages(formattedData);
        setTopCardData(formattedData);
      } else {
        // setTrandingVideos(TopViewCardData);
      }
    } catch (error) {
      console.error("GETPOSTLIST error :- ", error);
    }
  };

  const getLatestVideos = async () => {
    const data = {
      limit: 50,
      offset: 0,
      filters: {
        // flag: "", //popular, tranding, featured
        postType: "video", //image. video
      },
    };
    try {
      const response = await apiCall(
        "POST",
        apiEndPoints.GETPOSTLIST,
        JSON.stringify(data)
      );
      if (response) {
        const formattedData = response?.data?.posts.map((item) => {
          return {
            bgImg: item?.mainImage || blackbgcar,
            title: item?.title || "Заглавие на новина",
            description: "Началото на статията....",
          };
        });
        setLatestVideo(formattedData);
      } else {
        // setTrandingVideos(TopViewCardData);
      }
    } catch (error) {
      console.error("GETPOSTLIST error :- ", error);
    }
  };

  const getTrandingImagesPost = async () => {
    const data = {
      limit: 50,
      offset: 0,
      filters: {
        flag: "trending", //popular, tranding, featured
        postType: "image", //image. video
      },
    };
    try {
      const response = await apiCall(
        "POST",
        apiEndPoints.GETPOSTLIST,
        JSON.stringify(data)
      );
      if (response) {
        const formattedData = response?.data?.posts.map((item) => {
          return {
            bgImg: item?.mainImage || blackbgcar,
            title: item?.title || "Заглавие на новина",
            description: "Началото на статията....",
          };
        });
        setTrandingImages(formattedData);
      } else {
        // setTrandingVideos(TopViewCardData);
      }
    } catch (error) {
      console.error("GETPOSTLIST error :- ", error);
    }
  };

  const getTrandingVideoPost = async () => {
    const data = {
      limit: 50,
      offset: 0,
      filters: {
        flag: "trending", //popular, tranding, featured
        postType: "video", //image. video
      },
    };
    try {
      const response = await apiCall(
        "POST",
        apiEndPoints.GETPOSTLIST,
        JSON.stringify(data)
      );
      if (response) {
        const formattedData = response?.data?.posts.map((item) => {
          return {
            bgImg: item?.mainImage || blackbgcar,
            title: item?.title || "Заглавие на новина",
            description: "Началото на статията....",
          };
        });
        setTrandingVideos(formattedData);
      } else {
        // setTrandingVideos(TopViewCardData);
      }
    } catch (error) {
      console.error("GETPOSTLIST error :- ", error);
    }
  };

  return (
    <>
      <Grid display={"flex"} flexDirection={"column"}>
        <Header />
        <CategorySlider TOP_CATEGORIES={TOP_CATEGORIES} />
        <TopView
          cardData={topCardData.length == 0 ? topCardData : []}
        />
        <Popularposts
          title="Popular Images"
          cardData={popularImages.length !== 0 ? popularImages : []}
        />
        <SportWidget />
        <NewsPost
          title="New Post"
          cardData={newPostImages?.length !== 0 ? newPostImages : []}
        />
        <LatestVideos
          title="Latest Videos"
          cardData={latestVideo?.length > 0 ? latestVideo : []}
        />
        <Popularposts
          title="Trandy Posts"
          cardData={topCardData?.length > 0 ? topCardData : []}
        />
        <LatestVideos
          title="Trending Videos"
          cardData={trandingVideos?.length > 0 ? trandingVideos : []}
        />
        <Popularposts
          title="Top Posts"
          cardData={topCardData?.length > 0 ? topCardData : []}
        />
      </Grid>
    </>
  );
};

export default Index;
