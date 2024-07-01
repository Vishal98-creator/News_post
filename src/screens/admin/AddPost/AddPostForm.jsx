import { Box, Button, Grid, Input, OutlinedInput } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Add } from "@mui/icons-material";
import { FileUploader } from "react-drag-drop-files";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TextEditor from "../../../components/TextEditor";
import { COLORS } from "../../../constants";
import ReactPlayer from "react-player";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddPostForm = ({
  postType = 1,
  file,
  handleChange,
  value,
  setValue,
  title,
  setTitile,
  handlePublic,
  handleImageGallery,
  setYouTubeUrls,
  tagText,
  setTagText,
  tags,
  setTags,
  images,
  handleFlagTypeChange,
  handleImageDelete,
  flagType,
}) => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Box display={"flex"} alignItems={"center"} fullWidth>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex" }}>
                  <div>заглавие </div>
                  <span
                    style={{
                      display: "block",
                      color: "rgb(231, 82, 69)",
                      fontSize: 15,
                    }}
                  >
                    *
                  </span>
                </Box>
                <OutlinedInput
                  size="small"
                  fullWidth
                  sx={{ backgroundColor: "#F5F5F5", border: 0 }}
                  onChange={(e) => setTitile(e.target.value)}
                  value={title}
                />
              </Box>
              <Box sx={{ marginLeft: 2, width: "100%" }}>
                <Box>Добави Тагове</Box>
                <Box sx={{ position: "relative" }}>
                  <OutlinedInput
                    size="small"
                    fullWidth
                    sx={{ backgroundColor: "#F5F5F5", paddingRight: "50px" }}
                    onChange={(e) => setTagText(e.target.value)}
                    value={tagText}
                  />
                  <Button
                    sx={{
                      backgroundColor: "rgba(220, 220, 220, 1)",
                      position: "absolute",
                      right: 1,
                      top: 1,
                    }}
                  >
                    <Add
                      sx={{ height: "26px" }}
                      onClick={() => {
                        setTags([...tags, tagText], setTagText(""));
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
            {postType === "video" && (
              <Box sx={{ width: "100%", mt: 3 }}>
                <Box display={"flex"}>
                  <div>Въведете URL адрес на видеоклипа</div>
                  <span
                    style={{
                      display: "block",
                      color: "rgb(231, 82, 69)",
                      fontSize: 15,
                      marginLeft: "5px",
                    }}
                  >
                    *
                  </span>
                </Box>
                <Box sx={{ position: "relative" }}>
                  <OutlinedInput
                    size="small"
                    fullWidth
                    sx={{ backgroundColor: "#F5F5F5", paddingRight: "50px" }}
                    onChange={(e) => setYouTubeUrls(e.target.value)}
                  />
                  {/* <Button
                  sx={{
                    backgroundColor: "rgba(220, 220, 220, 1)",
                    position: "absolute",
                    right: 1,
                    top: 1,
                  }}
                >
                  <Add sx={{ height: "26px" }} />
                </Button> */}
                </Box>
              </Box>
            )}
            <Box sx={{ width: "100%", marginTop: "20px" }}>
              <Box>Добавяне на флаг</Box>
              <Select
                size="small"
                fullWidth
                value={flagType}
                onChange={handleFlagTypeChange}
                input={
                  <OutlinedInput
                    sx={{ backgroundColor: "#F5F5F5", border: "1px black" }}
                  />
                }
              >
                <MenuItem value={"popular"}>Popular</MenuItem>
                <MenuItem value={"trending"}>Tranding</MenuItem>
                <MenuItem value={"top"}>Top</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Box sx={{ display: "flex" }}>
                <div>Описания </div>
                <span
                  style={{
                    display: "block",
                    color: "rgb(231, 82, 69)",
                    fontSize: 15,
                    marginLeft: "5px",
                  }}
                >
                  *
                </span>
              </Box>
              <TextEditor value={value} setValue={setValue} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {postType === "image" ? (
              <Box sx={{ marginLeft: 2, width: "100%" }}>
                <Box display={"flex"}>
                  <div>Добави снимка</div> 
                  <span
                    style={{
                      display: "block",
                      color: "rgb(231, 82, 69)",
                      fontSize: 15,
                      marginLeft: "5px",
                    }}
                  >
                    *
                  </span>
                </Box>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={["JPG", "PNG", "GIF"]}
                  fileOrFiles={file}
                  label="Добави снимка за статията"
                />
              </Box>
            ) : (
              <Box sx={{ marginLeft: 2, width: "100%" }}>
                <Box>Галерия с изображения</Box>
                <FileUploader
                  handleChange={handleImageGallery}
                  name="file"
                  types={["JPG", "PNG", "GIF"]}
                  multiple
                  fileOrFiles={file}
                  label="Добави снимка за статията"
                />
              </Box>
            )}
            <div>
              <div
                className="image-gallery"
                //style={classes.gallery}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="image-item"
                    // style={classes.imageItem}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      // style={classes.image}
                    />
                    <div
                      className="delete-icon"
                      // style={classes.deleteIcon}
                      onClick={() => handleImageDelete(index)}
                    >
                      X
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Box display={"flex"} justifyContent={"end"}>
              <Button
                onClick={handlePublic}
                sx={{ mt: 3, background: COLORS.red, color: COLORS.white }}
              >
                Публикувай   
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
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  imageItem: {
    position: "relative",
    width: "100px",
    height: "100px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  deleteIcon: {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "red",
    color: "white",
    padding: "2px 5px",
    cursor: "pointer",
  },
}));
