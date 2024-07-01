import React from "react";
import { TextField, Box, Grid, OutlinedInput, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ColorizeIcon from "@mui/icons-material/Colorize";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import LinkIcon from "@mui/icons-material/Link";
import SendIcon from "@mui/icons-material/Send";
import { FileUploader } from "react-drag-drop-files";
import TextEditor from "../../components/TextEditor";

const ContactUs = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ width: "98%" }}>
              <Box sx={{ display: "flex" }}>
                <div>Subject</div>
                <span
                  style={{
                    display: "block",
                    color: "rgb(231, 82, 69)",
                    fontSize: 15,
                    marginTop: "10px",
                  }}
                >
                  *
                </span>
              </Box>
              <OutlinedInput
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  borderRadius: "10px",
                }}

                //   value={title}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ width: "98%" }}>
              <Box sx={{ display: "flex" }}>
                <div>Name </div>
                <span
                  style={{
                    display: "block",
                    color: "rgb(231, 82, 69)",
                    fontSize: 15,
                    marginTop: "10px",
                  }}
                >
                  *
                </span>
              </Box>
              <OutlinedInput
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  borderRadius: "10px",
                }}

                //   value={title}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ width: "98%" }}>
              <Box sx={{ display: "flex" }}>
                <div>Email </div>
                <span
                  style={{
                    display: "block",
                    color: "rgb(231, 82, 69)",
                    fontSize: 15,
                    marginTop: "10px",
                  }}
                >
                  *
                </span>
              </Box>
              <OutlinedInput
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  borderRadius: "10px",
                }}

                //   value={title}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* secand part */}

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "30px",
        }}
      >
        <Box display={"flex"}>
          <div>explanation </div>
          <span
            style={{
              display: "block",
              color: "rgb(231, 82, 69)",
              fontSize: 20,
              marginLeft: "5px",
            }}
          >
            *
          </span>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={8.5}>
            <Box>
              <TextEditor
              //  value={value} setValue={setValue}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={3}>
            <Box sx={{ margin: 2, width: "100%" }}>
              <Box display={"flex"}>
                <div>Add image </div>
                <span
                  style={{
                    display: "block",
                    color: "rgb(231, 82, 69)",
                    fontSize: 20,
                    marginLeft: "5px",
                  }}
                >
                  *
                </span>
              </Box>
              <FileUploader
                // handleChange={handleChange}
                name="file"
                types={["pdf", "zip", "doc"]}
                // fileOrFiles={file}
              />
            </Box>

            {/* <Box
              sx={{
                boxShadow: "0px 2px 10px rgb(0 0 0 / 9%)",
                borderRadius: "13px",
                padding: "10px",
                backgroundColor: "#F5F5F5",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <Box>
                <div>Add File</div>
                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px dashed #ddd",
                    borderRadius: 2,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div>
                    <div>Drop Image Here, Paste Or</div>
                    <Button variant="outlined">Select</Button>
                  </div>
                </Box>
              </Box>
            </Box> */}
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FA506B",
              gap: "10px",
              borderRadius: "12px",
              color: "white",
              padding: "15px",
            }}
          >
            <SendIcon /> Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
