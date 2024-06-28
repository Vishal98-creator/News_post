import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import AddPostForm from "./AddPostForm";
import SendButtons from "./SendButtons";
import { imageUploadOnServer } from "../../../utils/helperFunctios";
import { apiCall } from "../../../utils/httpClient";
import apiEndPoints from "../../../utils/apiEndPoints";
import Header from "../../../components/Header";

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [title, setTitile] = useState(null);
  const [postType, setPostType] = useState("image");

  const handleChange = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await imageUploadOnServer(formData);
    setFile(response.data.url);
  };

  const handlePublic = async () => {
    console.log(": call");
    if (title && value && postType) {
      const formData = new FormData();
      // formData.append("files", title);
      formData.append("title", title);
      formData.append("content", value);
      formData.append("postType", postType);
      formData.append("mainImage", file);
      // formData.append("tags", []);
      try {
        const response = await apiCall("POST", apiEndPoints.ADDPOST, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        window.alert("Post Public");
      } catch (error) {
        console.error("Error IN POST:", error);
      }
    } else {
      console.log("Enter required Fields");
    }
  };
  return (
    <>
      <Header />
      <ProfileHeader />
      <SendButtons />
      <AddPostForm
        file={file}
        setFile={setFile}
        handleChange={handleChange}
        setValue={setValue}
        value={value}
        titile={title}
        setTitile={setTitile}
        handlePublic={handlePublic}
      />
    </>
  );
};

export default AddPost;
