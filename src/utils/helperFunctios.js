import apiEndPoints from "./apiEndPoints";
import { apiCall } from "./httpClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const imageUploadOnServer = async (formData) => {
  try {
    const response = await apiCall(
      "POST",
      apiEndPoints.UPLOADIMAGES,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response;
  } catch (error) {
    console.error("Error uploading image:", error);
    return error;
  }
};

export const notifySuccess = (msg) => {
  toast.success(msg, {
    position: "bottom-left",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notifyError = (msg) => {
  toast.error(msg, {
    position: "bottom-left",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
