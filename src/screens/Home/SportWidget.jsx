import { Box } from "@mui/material";
import React from "react";
import { COLORS } from "../../constants";

const SportWidget = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: COLORS.black,
          color: "white",
          fontWeight: 400,
          fontSize: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:'464px',
          mt:5,
          textAlign:'center'
        }}
      >
        preview на последния филм - YouTube
      </Box>
    </>
  );
};

export default SportWidget;
