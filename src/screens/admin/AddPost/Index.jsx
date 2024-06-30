import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";

const AddPost = () => {
  const [file, setFile] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitile] = useState("");
  const [postType, setPostType] = useState("image");
  const [galleryImages, setGalleryImages] = useState([]);
  const [youTubeUrls, setYouTubeUrls] = useState("");
  const [tagText, setTagText] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [flagType, setFlagType] = useState("");
  const [error, setError] = useState({});

  const handleChangePostType = (postType) => {
    setPostType(postType);
    setTitile("");
    setTags([]);
    setTagText("");
    setValue("");
    setYouTubeUrls("");
    setImages([]);
    setFlagType("");
    setTagText("");
    setGalleryImages([]);
    setFile("");
  };

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
    setImages((prevImages) => [...prevImages, ...files]);
  };
  console.log("error: ", error);

  const checkValidations = () => {
    let formErr = false;
    let error = {};
    if (title === "") {
      formErr = true;
      error["title"] = "Please enter title";
    }
    if (value === "") {
      formErr = true;
      error["value"] = "Please enter explanation";
    }
    if (postType === "video" && youTubeUrls === "") {
      formErr = true;
      error["youTubeUrls"] = "Please enter video url";
    }
    if (postType === "image" && file === "") {
      formErr = true;
      error["file"] = "Please select image";
    }
    setError(error);
    return formErr;
  };

  const handlePublic = async () => {
    if (!checkValidations()) {
      if (title && value && postType) {
        if (
          (postType === "video" && youTubeUrls !== "") ||
          (postType === "image" && file !== "")
        ) {
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
            notifySuccess("Post Public successful!");
          } catch (error) {
            notifyError("Post Sending Failed");
          }
        } else {
          console.log("Enter required Fields");
        }
      } else {
        alert("Enter url or image");
      }
    } else {
      toast.error("Please enter required fields");
    }
  };

  return (
    <>
      <Header />
      <ProfileHeader />
      <SendButtons
        setPostType={setPostType}
        postType={postType}
        handleChangePostType={handleChangePostType}
      />
      <AddPostForm
        file={file}
        setFile={setFile}
        handleChange={handleChange}
        setValue={setValue}
        value={value}
        title={title}
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
        error={error}
      />
    </>
  );
};

export default AddPost;
