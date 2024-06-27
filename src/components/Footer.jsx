import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "60%",
        maxHeight: "483px",
        marginTop: "100px",
        backgroundColor: "rgb(245, 245, 245)",
        padding: "40px",
        borderTop: "5px solid #F3E5F5",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            // sx={{ color: COLORS.red, fontWeight: "bold" }}
          >
            Party News
          </Typography>
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
          <Typography
            variant="h6"
            // sx={{ marginTop: "20px", color: COLORS.red, fontWeight: "bold" }}
          >
            Newsletters
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Напишете Имеил Си"
              sx={{ flexGrow: 1 }}
            />
            <Button variant="contained" sx={{ marginLeft: "10px" }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            // sx={{ color: COLORS.red, fontWeight: "bold" }}
          >
            Категории
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", color: "text.secondary" }}
          >
            Предавания <br />
            Филми <br />
            Репортажи <br />
            Клюки <br />
            Музика <br />
            Абонаменти
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            // sx={{ color: COLORS.red, fontWeight: "bold" }}
          >
            Social Network
          </Typography>
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
          Privacy Policy | Terms & Conditions
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          All Copyright (c) 2024 Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
