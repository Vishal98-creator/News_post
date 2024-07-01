import apiEndPoints from "./apiEndPoints";
import { apiCall } from "./httpClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from "dompurify";


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

export  const trimTitle = (title, length=20) => {
  if (title?.length > length) {
    return `${title?.slice(0, length)}...`;
  }
  return title;
};


export const convertIntoHTML = (content) => {
 
const parser = new DOMParser();
const doc = parser.parseFromString(content, "text/html");
const images = doc.querySelectorAll("img");
console.log('images: ', images);

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
return cleanHtml;
}