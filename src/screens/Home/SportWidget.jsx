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
          mt:10,
          mb:8,
          textAlign:'center',
          position:'relative',
          left:'-3%',
          width:'106%'

        }}
      >
        preview на последния филм - YouTube
      </Box>
    </>
  );
};

export default SportWidget;
