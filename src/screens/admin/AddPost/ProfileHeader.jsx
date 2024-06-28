import React from "react";
import adminHeaderBgImg from "../../../assets/images/adminHeaderBgImg.png";
import { Box, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../../constants";

const ProfileHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <img
          src={adminHeaderBgImg}
          alt={"headrImg"}
          loading="lazy"
          style={{ borderRadius: "12px", width: "100%" }}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ padding: "7px 0px" }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Box sx={{ width: "75px", height: "75px", borderRadius: "10px" }}>
              <img
                src={adminHeaderBgImg}
                alt={"userImg"}
                loading="lazy"
                style={{ borderRadius: "12px", width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{ marginLeft: "10px", fontSize: "16px", fontWeight: "500" }}
            >
              Louis Hoebregts
            </Box>
          </Box>
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Box className={classes.optionText}>Marked</Box>
              <Box className={classes.nonactiveOpt}></Box>
            </Box>
            <Box>
              <Box className={classes.optionText} ml={2}>
                Send Post
              </Box>
              <Box className={classes.activeOpt}></Box>
            </Box>
            <Box>
              <Box className={classes.optionText} ml={2}>
                Posts
              </Box>
              <Box className={classes.nonactiveOpt}></Box>
            </Box>
          </Grid>
          <Box display={"flex"} alignItems={"center"}>
            <Button
              className={classes.editBtn}
              sx={{
                color: COLORS.red,
                border: "1px solid #E6E6E6",
                borderRadius: "12px",
              }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileHeader;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: COLORS.grey,
    padding: "10px",
    borderRadius: "12px",
  },
  optionText: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "18.75px",
  },
  activeOpt: {
    border: `2px solid ${COLORS.red}`,
    width: "17px",
    marginLeft: "18px",
    borderRadius: "17px",
    marginTop: "5px",
  },
  nonactiveOpt: {
    border: `2px solid transparent`,
    width: "17px",
    marginLeft: "18px",
    borderRadius: "17px",
    marginTop: "5px",
  },
  editBtn: {
    border: "1px solid gray",
  },
}));
