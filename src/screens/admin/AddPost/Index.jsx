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
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [title, setTitile] = useState(null);
  const [postType, setPostType] = useState("image");
  const [galleryImages, setGalleryImages] = useState([]);
  const [youTubeUrls, setYouTubeUrls] = useState(null);
  const [tagText, setTagText] = useState("");
  console.log("tagText: ", tagText);
  const [tags, setTags] = useState([]);
  console.log("tags: ", tags);

  const handleChange = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await imageUploadOnServer(formData);
    setFile(response.data.url);
  };

  const handleImageGallery = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await imageUploadOnServer(formData);
    setGalleryImages(response.data.url);
  };

  const handlePublic = async () => {
    if (title && value && postType) {
      const formData = new FormData();
      // formData.append("files", title);
      formData.append("title", title);
      formData.append("content", value);
      formData.append("postType", postType);
      formData.append("mainImage", file);
      formData.append("tags", JSON.stringify(["#test"]));
      try {
        const response = await apiCall("POST", apiEndPoints.ADDPOST, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        // window.alert("Post Public");
        notifySuccess("Post Public successfull!");
      } catch (error) {
        notifyError("Post Sending Failed");
      }
    } else {
      console.log("Enter required Fields");
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
      />
    </>
  );
};

export default AddPost;
