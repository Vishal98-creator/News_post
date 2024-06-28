import apiEndPoints from "./apiEndPoints";
import { apiCall } from "./httpClient";

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
      return error
  }
};
