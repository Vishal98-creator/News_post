import { Box, Button, Grid, Input, OutlinedInput } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Add } from "@mui/icons-material";
import { FileUploader } from "react-drag-drop-files";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TextEditor from "../../../components/TextEditor";
import { COLORS } from "../../../constants";

const AddPostForm = ({
  postType = 1,
  file,
  setFile,
  handleChange,
  value,
  setValue,
  titile,
  setTitile,
  handlePublic,
}) => {
  // postType = 1 ? 'Send post :'Send Video'
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Box display={"flex"} alignItems={"center"} fullWidth>
              <Box sx={{ width: "100%" }}>
                <Box>Title</Box>
                <OutlinedInput
                  size="small"
                  fullWidth
                  sx={{ backgroundColor: "#F5F5F5", border: 0 }}
                  onChange={(e) => setTitile(e.target.value)}
                />
              </Box>
              <Box sx={{ marginLeft: 2, width: "100%" }}>
                <Box>Add Tags</Box>
                <Box sx={{ position: "relative" }}>
                  <OutlinedInput
                    size="small"
                    fullWidth
                    sx={{ backgroundColor: "#F5F5F5", paddingRight: "50px" }}
                  />
                  <Button
                    sx={{
                      backgroundColor: "rgba(220, 220, 220, 1)",
                      position: "absolute",
                      right: 1,
                      top: 1,
                    }}
                  >
                    <Add sx={{ height: "26px" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Box>Explanation</Box>
              <TextEditor value={value} setValue={setValue} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ marginLeft: 2, width: "100%" }}>
              <Box>Add image</Box>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={["JPG", "PNG", "GIF"]}
              />
            </Box>
            <Box display={"flex"} justifyContent={"end"}>
              <Button
                onClick={handlePublic}
                sx={{ mt: 3, background: COLORS.red, color: COLORS.white }}
              >
                Public
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddPostForm;

const useStyles = makeStyles((theme) => ({
  activeBtn: {},
  cardcontent: {},
}));
