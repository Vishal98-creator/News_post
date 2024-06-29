import { Box, Button } from "@mui/material";
import React from "react";
import { COLORS } from "../../../constants";

const SendButtons = ({ postType, setPostType }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        mt: 3,
        mb: 3,
      }}
    >
      <Button
        sx={
          postType === "image"
            ? { backgroundColor: COLORS.gray, fontWeight: 500 }
            : { backgroundColor: COLORS.white }
        }
        onClick={() => setPostType("image")}
      >
        Send Post
      </Button>
      <Button
        sx={
          postType === "video"
            ? { backgroundColor: COLORS.gray, fontWeight: 500, ml: 2 }
            : { backgroundColor: COLORS.white, ml: 2 }
        }
        onClick={() => setPostType("video")}
      >
        Send Video
      </Button>
    </Box>
  );
};

export default SendButtons;
