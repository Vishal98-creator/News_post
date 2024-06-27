import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../constants";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        maxWidth: "60%",
        maxHeight: "483px",
        marginTop: "100px",
        backgroundColor: "rgb(245, 245, 245)",
        padding: "60px",
        borderTop: "5px solid #F3E5F5",
        borderRadius: "0 60px 60px 0",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className={classes.reddivstyle}>
            <div className={classes.reddiv}></div>
            <Typography
              variant="h6"
              sx={{ color: COLORS.lightGray, fontWeight: "bold" }}
            >
              Party News
            </Typography>
          </div>

          <Typography
            variant="body2"
            sx={{ marginTop: "10px", color: "text.secondary" }}
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Egestas
            Purus Viverra Accumsan In Nisi Nisi. Arcu Cursus Vitae Congue Mauris
            Rhoncus Aenean Vel Elit Scelerisque. In Egestas Erat Imperdiet Sed
            Euismod Nisi Porta Lorem Mollis. Morbi Tristique Senectus Et Netus.
            Mattis Pellentesque Id Nibh Tortor Id Aliquet Lectus Proin
          </Typography>
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
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Напишете Имеил Си"
              sx={{ flexGrow: 1 }}
            />
            {/* <Button variant="contained" sx={{ marginLeft: "10px" }}>
              Subscribe
            </Button> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.reddivstyle}>
            <div className={classes.reddiv}></div>
            <Typography
              variant="h6"
              sx={{ color: COLORS.lightGray, fontWeight: "bold" }}
            >
              Категории
            </Typography>
          </div>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", color: "text.secondary" }}
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
        <Grid item xs={12} md={3}>
          <div className={classes.reddivstyle}>
            <div className={classes.reddiv}></div>
            <Typography
              variant="h6"
              sx={{ color: COLORS.lightGray, fontWeight: "bold" }}
            >
              Social Network
            </Typography>
          </div>
          <Button
            variant="contained"
            startIcon={<Instagram />}
            sx={{
              marginTop: "10px",
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
          justifyContent: "space-between",
          marginTop: "40px",
          borderTop: "1px solid #E0E0E0",
          paddingTop: "10px",
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <a href="https://www.w3schools.com">Privacy Policy</a> |{" "}
          <a href="https://www.w3schools.com">Terms & Conditions </a>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          All Copyright (c) 2024 Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
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
