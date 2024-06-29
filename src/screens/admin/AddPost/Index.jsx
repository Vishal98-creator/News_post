import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import AddPostForm from "./AddPostForm";
import SendButtons from "./SendButtons";
import {
  imageUploadOnServer,
  notifyError,
  notifySuccess,
} from "../../../utils/helperFunctios";
import { apiCall } from "../../../utils/httpClient";
import apiEndPoints from "../../../utils/apiEndPoints";
import Header from "../../../components/Header";

const AddPost = () => {
  const [file, setFile] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitile] = useState(null);
  const [postType, setPostType] = useState("image");
  const [galleryImages, setGalleryImages] = useState([]);
  const [youTubeUrls, setYouTubeUrls] = useState("");
  const [tagText, setTagText] = useState("");
  console.log("tagText: ", tagText);
  const [tags, setTags] = useState([]);
  console.log("tags: ", tags);
  const [images, setImages] = useState([]);
  const [flagType, setFlagType] = React.useState("");

  const handleFlagTypeChange = (event) => {
    setFlagType(event.target.value);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleChange = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await imageUploadOnServer(formData);
    setFile(response.data.url);
  };

  const handleImageGallery = async (files) => {
    console.log("file: ", file);
    const formData = new FormData();
    setImages((prevImages) => [...prevImages, ...files]);
    // formData.append("image", file);
    // const response = await imageUploadOnServer(formData);
    // setGalleryImages(response.data.url);
  };

  const handlePublic = async () => {
    if (title && value && postType) {
      if ((postType === "video" && youTubeUrls !== "") || (postType === "image" && file !== "")) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", value);
        formData.append("postType", postType);
        formData.append("mainImage", file);
        formData.append("mainVideo", youTubeUrls);
        formData.append("tags", JSON.stringify(["#test"]));
        formData.append("flag", flagType);
        images.length > 0 &&
          images.forEach((image, index) => {
            formData.append(`files`, image); // Append image with key 'files'
          });
        try {
          const response = await apiCall(
            "POST",
            apiEndPoints.ADDPOST,
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          // window.alert("Post Public");
          notifySuccess("Post Public successfull!");
        } catch (error) {
          notifyError("Post Sending Failed");
        }
      } else {
        console.log("Enter required Fields");
      }
    }else{
      alert('Enter url or image')
    }
  };

  return (
    <>
      <Header />
      <ProfileHeader />
      <SendButtons setPostType={setPostType} postType={postType} />
      <AddPostForm
        file={file}
        setFile={setFile}
        handleChange={handleChange}
        setValue={setValue}
        value={value}
        titile={title}
        setTitile={setTitile}
        handlePublic={handlePublic}
        postType={postType}
        handleImageGallery={handleImageGallery}
        setYouTubeUrls={setYouTubeUrls}
        tags={tags}
        setTags={setTags}
        tagText={tagText}
        setTagText={setTagText}
        images={images}
        setImages={setImages}
        handleImageDelete={handleImageDelete}
        flagType={flagType}
        handleFlagTypeChange={handleFlagTypeChange}
      />
    </>
  );
};

export default AddPost;
