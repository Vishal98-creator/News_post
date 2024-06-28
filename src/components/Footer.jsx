import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import EmailIcon from "@mui/icons-material/Email";
import { COLORS } from "../constants";

const Footer = () => {
  const classes = useStyles();
  const isMediumScreen = useMediaQuery("(max-width:767px)");
  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", md: "60%" },
        marginTop: "100px",
        backgroundColor: "rgb(245, 245, 245)",
        padding: "60px",
        borderRadius: { xs: "0 30px 30px 0", md: "0 60px 60px 0" },
      }}
    >
      {!isMediumScreen ? (
        <Box>
          <Grid
            container
            spacing={3}
            sx={{ marginLeft: { xs: "5px", md: "15px", marginRight: "40px" } }}
          >
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                marginRight: "40px",
              }}
            >
              <div className={classes.reddivstyle}>
                <div className={classes.reddiv}></div>
                <Typography variant="h4">Party News</Typography>
              </div>

              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  color: "text.secondary",
                  fontSize: { xs: "16px", md: "18px" },
                  letterSpacing: "0.1rem",
                  lineHeight: { xs: "24px", md: "27px" },
                  fontWeight: "400",
                }}
              >
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                Egestas Purus Viverra Accumsan In Nisi Nisi. Arcu Cursus Vitae
                Congue Mauris Rhoncus Aenean Vel Elit Scelerisque. In Egestas
                Erat Imperdiet Sed Euismod Nisi Porta Lorem Mollis. Morbi
                Tristique Senectus Et Netus. Mattis Pellentesque Id Nibh Tortor
                Id Aliquet Lectus Proin
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.reddivstyle}>
                <div className={classes.reddiv}></div>
                <Typography
                  variant="h5"
                  sx={{ color: COLORS.lightGray, fontWeight: "bold" }}
                >
                  Категории
                </Typography>
              </div>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "20px",
                  color: "text.secondary",
                  fontSize: { xs: "16px", md: "18px" },
                }}
              >
                Предавания <br />
                <br />
                Филми <br />
                <br />
                Репортажи <br />
                <br />
                Клюки <br />
                <br />
                Музика <br />
                <br />
                Абонаменти
                <br />
                <br />
              </Typography>
            </Grid>
          </Grid>

          {/* Second part */}
          <Grid
            container
            spacing={3}
            sx={{ marginLeft: { xs: "5px", md: "15px" } }}
          >
            <Grid item xs={12} md={7} sx={{ marginRight: "40px" }}>
              <div className={classes.reddivstyle}>
                <div className={classes.reddiv}></div>
                <Typography
                  variant="h6"
                  sx={{
                    marginTop: "20px",
                    color: COLORS.lightGray,
                    fontWeight: "bold",
                  }}
                >
                  Newsletters
                </Typography>
              </div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Напишете Имеил Си"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EmailIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      "& .MuiOutlinedInput-input": {
                        padding: { xs: "10px", md: "22px" },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      backgroundColor: "white", // Change inside color to white
                      borderRadius: "12px",
                    },
                  }}
                  sx={{ flexGrow: 1 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={classes.reddivstyle}>
                <div className={classes.reddiv}></div>
                <Typography
                  variant="h6"
                  sx={{
                    color: COLORS.lightGray,
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Social Network
                </Typography>
              </div>
              <Button
                variant="contained"
                startIcon={<Instagram />}
                sx={{
                  marginTop: "10px",
                  marginLeft: "45px",
                  backgroundColor: "#E1306C",
                  color: "#fff",
                }}
              >
                Instagram
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              marginTop: "40px",
              backgroundColor: "#E0E0E0",
              padding: "10px",
              borderRadius: "10px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "17px" }}
            >
              Privacy Policy | Terms & Conditions
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "17px" }}
            >
              All Copyright (c) 2024 Reserved
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            // marginTop: "40px",
            // backgroundColor: "#E0E0E0",
            // padding: "10px",
            // borderRadius: "20px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "17px", padding: "20px" }}
          >
            Privacy Policy | Terms & Conditions
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "17px", width: "100%" }}>
            All Copyright (c) 2024 Reserved
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    // marginBottom: "50px",
  },
  reddiv: {
    backgroundColor: COLORS.red,
    width: "5px",
    height: "11px",
    borderRadius: "20px",
  },
  reddivstyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
}));
