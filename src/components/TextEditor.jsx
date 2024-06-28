import { Box } from "@mui/material";
import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { imageUploadOnServer } from "../utils/helperFunctios";

export default function FormikRichText({ id, label, value, setValue }) {
  console.log("value: ", value);
  const quillRef = useRef();
  const handleImageUpload = async () => {
    try {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file);

        try {
          const response = await imageUploadOnServer(formData);
          if (response.status === 200) {
            const imageUrl = response.data.url;
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection();
            quill.insertEmbed(range.index, "image", imageUrl);
          }
        } catch (error) {
          console.log("error: ", error);
        }

        // Placeholder for testing without axios
        const imageUrl = URL.createObjectURL(file);
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", imageUrl);
      };
    } catch (error) {
      console.error("Error during image upload: ", error);
    }
  };

  const imageHandler = () => {
    const editor = quillRef.current.getEditor();
    console.log(editor);
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {
        console.log(file);
        const formData = new FormData();
        formData.append("image", file);
        const res = await handleImageUpload(formData); // upload data into server or aws or cloudinary
        const url = res?.data?.url;
        editor.insertEmbed(editor.getSelection(), "image", url);
      } else {
        // ErrorToast('You could only upload images.');
        console.log('Erros:', 'You could only upload images.');
      }
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ align: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["image", "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
              ],
            },
          ],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
    }),
    []
  );
  return (
    <>
      <Box>
        <ReactQuill
          theme="snow"
          ref={quillRef}
          value={value}
          modules={modules}
          onChange={setValue}
          style={{ height: "250px" }}
        />
      </Box>
    </>
  );
}
