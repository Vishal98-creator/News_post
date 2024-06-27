import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { COLORS } from "../constants";
import CustomSearchInput from "./Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: COLORS.white,
//     },
//   },
//   typography: {
//     fontFamily: "Roboto",
//   },
// });

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: COLORS.white,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    minWidth: 100,
    color: COLORS.black,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "18.75px",
  textAlign: "left",
  color: COLORS.black,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Header = () => {
  // const data = ["Shows", "Movies", "Reports", "Keys", "Music", "Subscriptions"];
  const data = ["Шоу", "Фильмы", "Репортажи", "Ключи", "Музыка", "Подписки"];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {data.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
  
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center", // Center the navbar horizontally
          marginBottom: "50px",
        }}
      >
        <AppBar position="static" sx={{boxShadow:'none', pt:3}}>
          <Toolbar>
            <IconButton
              // edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{
                display: { xs: "block", sm: "none" },
                backgroundColor: COLORS.grey,
                borderRadius: "12px",
                width: "48px",
                height: "48px",
                marginRight: "10px",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                // display: 'none',
                // xs: "block", sm: "none", md: "block"
                display: { xs: "none", sm: "none", md: "block" },
                color: COLORS.red,
                width: "10%",
                fontFamily: "Roboto",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: "25.78px",
              }}
            >
              PartyNews
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "none" },
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "105px",
                marginBottom: "5px",
                marginTop: "5px",
              }}
            >
              <Box
                sx={{
                  // display: { xs: "none", sm: "flex", md: "none" },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
                  <IconButton
                    // edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{
                      // display: { xs: "block", sm: "block", md: "none" },
                      backgroundColor: COLORS.grey,
                      borderRadius: "12px",
                      width: "48px",
                      height: "48px",
                      marginRight: "10px",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // backgroundColor: 'black',
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      // display: { xs: "none", sm: "block", md: "none" },
                      color: COLORS.red,
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: "25.78px",
                    }}
                  >
                    MEGA.news
                  </Typography>
                </Box>
               
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="bookmark"
                    sx={{
                      backgroundColor: COLORS.grey,
                      borderRadius: "12px",
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <BookmarkBorderOutlinedIcon />
                  </IconButton>
                
              </Box>
              <Box
                sx={{
                  width: "102%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginLeft: "9px",
                }}
              >
                <CustomSearchInput />
              </Box>
            </Box>
            <Box
              sx={{
                // display: { xs: "none", sm: "flex" },
                display: { xs: "none", sm: "none", md: "flex" },
                // display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              {data.map((menu) => (
                <Box key={menu}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    color="inherit"
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "18.75px",
                      textAlign: "left",
                      color: COLORS.black,
                      backgroundColor: COLORS.white 
                    }}
                  >
                    {menu}
                    <KeyboardArrowDownIcon />
                  </Button>
                  <StyledMenu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <StyledMenuItem onClick={handleMenuClose}>
                      Option 1
                    </StyledMenuItem>
                    <StyledMenuItem onClick={handleMenuClose}>
                      Option 2
                    </StyledMenuItem>
                  </StyledMenu>
                </Box>
              ))}
            </Box>
            {/* <Box sx={{}}> */}
            <Box
              sx={{
                // width: "100%",
                width: { xs: "80%", sm: "50%" },
                display: { xs: "flex", sm: "none", md: "flex" },
                // display: "flex",
                flexDirection: "row",
                // backgroundColor: "red",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
              }}
            >
              <CustomSearchInput />
            </Box>
            {/* </Box> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      </>
  );
};

export default Header;
