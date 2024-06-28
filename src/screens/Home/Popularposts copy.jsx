import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Card2 from "../../components/Card2";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../constants";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const Popularposts = ({ cardData }) => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box varient="h4" className={classes.sectionTitle}>
            Популярни
          </Box>
          <Box>
            <Button>
              <NavigateBefore />
            </Button>
            <Button sx={{ marginLeft: 2 }}>
              <NavigateNext />
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {cardData.map((card, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={6}
                md={3}
                display={"flex"}
                justifyContent={"center"}
                sx={{ boxShadow: "rgba(0, 0, 0, 0.07)" }}
              >
                <Card2 cardData={card} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Popularposts;

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
