import { Box, Button } from "@mui/material";
import React from "react";
import { COLORS } from "../../../constants";

const SendButtons = ({ postType = 1 }) => {
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
          postType === 1
            ? { backgroundColor: COLORS.gray, fontWeight: 500 }
            : { backgroundColor: COLORS.white }
        }
      >
        Send Post
      </Button>
      <Button
        sx={
          postType === 2
            ? { backgroundColor: COLORS.lightGray, fontWeight: 500, ml: 2 }
            : { backgroundColor: COLORS.white, ml: 2 }
        }
      >
        Send Post
      </Button>
    </Box>
  );
};

export default SendButtons;
