import React, { useEffect, useState } from "react";
import ImagePostDetails from "./ImagePostDetails";
import Header from "../../components/Header";
import DOMPurify from "dompurify";
import VideoPostDetails from "./VideoPostDetails";

const Index = () => {
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    let html =
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p><br></p><p><img src=\"https://news-blog-post-bucket.s3.eu-north-1.amazonaws.com/images/1719665378123_musicalMan.png\"></p><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';

    // Parse the HTML and modify the image elements
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const images = doc.querySelectorAll("img");

    images.forEach((img) => {
      img.style.width = "80%";
      img.style.height = "80%";
      img.style.display = "block";
      img.style.margin = "0 auto";
      img.style.borderRadius = "12px";
      img.style.objectFit = "cover";
    });

    // Serialize the HTML back to string
    const serializer = new XMLSerializer();
    const modifiedHtml = serializer.serializeToString(doc.body);

    // Sanitize the modified HTML content
    const cleanHtml = DOMPurify.sanitize(modifiedHtml);
    setHtmlContent(cleanHtml);
  }, []);

  // const postType = "video";
  const postType = "image";
  return (
    <>
      <Header />
      {postType === "image" ? (
        <ImagePostDetails htmlContent={htmlContent} />
      ) : (
        <VideoPostDetails htmlContent={htmlContent} />
      )}
    </>
  );
};

export default Index;
