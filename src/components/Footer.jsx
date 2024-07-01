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
  const isMediumScreen = useMediaQuery("(max-width:842px)");
  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", md: "70%" },
        marginTop: {
          md:"100px",
          sm:'50px',
          xs:'50px'
        },
        backgroundColor: "rgb(245, 245, 245)",
        padding: "60px",
        borderRadius: { xs: "0 30px 30px 0", md: "0 60px 60px 0" },
        position: "relative",
        left: { xs: "-10%", md: "-12%" },
      }}
    >
      {!isMediumScreen ? (
        <Box sx={{ marginLeft: "130px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <div className={classes.reddivstyle}>
                  <div className={classes.reddiv}></div>
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    Party News
                  </Typography>
                </div>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  color: "text.secondary",
                  fontSize: { xs: "16px", md: "18px" },
                  letterSpacing: "0.1rem",
                  lineHeight: { xs: "24px", md: "27px" },
                  fontWeight: "400",
                  paddingRight: "100px",
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

            <Grid item xs={12} md={4}>
              <div className={classes.reddivstyle}>
                <div className={classes.reddiv}></div>
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Категории
                </Typography>
              </div>
              <Typography
                variant="body2"
                sx={{
                  // marginLeft: "200px",
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

            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <div className={classes.reddivstyle}>
                  <div className={classes.reddiv}></div>
                  <Typography
                    variant="h5"
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    Newsletters
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  width: { xs: "100%", md: "auto" },
                  paddingRight: "100px",
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Напишете Имеил Си"
                  fullWidth
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
                      backgroundColor: "white",
                      borderRadius: "12px",
                    },
                  }}
                  // sx={{ flexGrow: 1 }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={classes.reddivstyle}>
                <div className={classes.reddiv}></div>
                <Typography
                  variant="h5"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Social Network
                </Typography>
              </div>
              <Button
                variant="contained"
                startIcon={<Instagram />}
                sx={{
                  marginTop: "20px",
                  background:
                    "linear-gradient(45deg, #f58529 30%, #e1306c 50%, #962fbf 70%, #4f5bd5 100%)",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "10px 40px",
                  textTransform: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #f58529 30%, #e1306c 50%, #962fbf 70%, #4f5bd5 100%)",
                  },
                }}
              >
                Instagram
              </Button>
            </Grid>
          </Grid>

          {/* saction three */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
              marginTop: "40px",
              backgroundColor: "#E0E0E0",
              padding: "10px",
              borderRadius: "0px 13px 13px 0px",
              textAlign: { xs: "center", md: "left" },
              // position: "relative",
              position: "relative",
              left: { xs: "-10%", md: "-19%" },
              paddingLeft: "75px",
              width: "100%",
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
            maxWidth: { xs: "100%", md: "70%" },
            // marginTop: "100px",
            backgroundColor: "rgb(245, 245, 245)",
            // padding: "60px",
            borderRadius: { xs: "0 30px 30px 0", md: "0 60px 60px 0" },
            position: "relative",
            left: { xs: "-10%", md: "-12%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
              // marginTop: "40px",
              backgroundColor: "#E0E0E0",
              padding: "10px",
              borderRadius: "0px 13px 13px 0px",
              textAlign: { xs: "center", md: "left" },
              // position: "relative",
              position: "relative",
              left: { xs: "-10%", md: "-19%" },
              paddingLeft: "75px",
              width: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "17px",
                paddingBottom: "10px",
              }}
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
    gap: "10px",
  },
  reddivstyle2: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  reddiv2: {
    width: "5px",
    height: "11px",
    backgroundColor: "red",
    marginRight: "10px",
  },
}));
