import React, { useEffect, useState } from "react";
import ImagePostDetails from "./ImagePostDetails";
import Header from "../../components/Header";
import VideoPostDetails from "./VideoPostDetails";
import { useParams } from "react-router-dom";
import { apiCall } from "../../utils/httpClient";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";
import { convertIntoHTML } from "../../utils/helperFunctios";

const Index = () => {
  const { post_id } = useParams();
  const [htmlContent, setHtmlContent] = useState("");
  const [postDetails, setPostDetails] = useState({})
  console.log('postDetails: ', postDetails);
  
  useEffect(() => {
    window.scroll(0, 0);
    getPostDetails();
  }, [post_id]);

  const getPostDetails = async () => {
    const data = {
      postId: post_id,
    };
    try {
      const response = await apiCall(
        "POST",
        apiEndPoints.GETPOSTDETAILS,
        JSON.stringify(data)
      );
      if (response) {
        setPostDetails(response?.data)
        const contenthtml = convertIntoHTML(response?.data?.content)
        setHtmlContent(contenthtml)
      } else {
        toast.error('something went wrong')
      }
    } catch (error) {
      console.error("GETPOSTLIST error :- ", error);
    }
  };



  // const postType = "video";
  const postType = "image";
  return (
    <>
      <Header />
      {postDetails?.postType === "image" ? (
        <ImagePostDetails htmlContent={htmlContent} postDetails={postDetails}/>
      ) : (
        <VideoPostDetails htmlContent={htmlContent} postDetails={postDetails}/>
      )}
    </>
  );
};

export default Index;
