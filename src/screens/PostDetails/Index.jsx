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
      '<h2><strong>asdasdadsa</strong></h2><p><br></p><p><img src="https://news-blog-post-bucket.s3.eu-north-1.amazonaws.com/images/1719644726383_thali-food.jpg"></p><p><br></p><p>sdfsdfsdfdfsdfsdfsdfsdfs</p><p>asdasdadasdasdad</p><p>adasdasdasdasdasdasdasdadssad</p><p>asdasdasdaczxczxczcx</p>';

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
