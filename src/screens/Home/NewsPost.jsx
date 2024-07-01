import { NavigateNext } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { COLORS } from "../../constants";
import { makeStyles } from "@mui/styles";
import Card3 from "../../components/Card3";
import { useNavigate } from "react-router-dom";

const NewsPost = ({ cardData, title }) => {
  const navigate = useNavigate()
  const classes = useStyles();
  return (
    <>
      <Box sx={{ mt: 5, }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box varient="h4" className={classes.sectionTitle}>
            {title}
          </Box>
          <Box>
            <Button sx={{ marginLeft: 2 }}>
              Виж всички
              <NavigateNext />
            </Button>
          </Box>
        </Box>
        <Grid container spacing={5}>
          {cardData?.map((card, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={12}
                md={6}
                display={"flex"}
                justifyContent={"center"}
                // sx={{ boxShadow: "rgba(0, 0, 0, 0.07)" }}
              >
                <Card3 cardData={card} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default NewsPost;

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "40px",
  },
}));
