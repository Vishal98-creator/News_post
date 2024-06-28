import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
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
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useNavigate} from 'react-router-dom';

const StyledPopover = styled(Popover)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: COLORS.white,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    minWidth: 100,
    color: COLORS.black,
    
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
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
  const navigate = useNavigate();
  const data = ["Шоу", "Фильмы", "Репортажи", "Ключи", "Музыка", "Подписки"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handlePopoverOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
    setHoveredMenu(menu);
  };

  const handlePopoverClose = () => {
    console.log("This is cloesed ======>>>");
    setAnchorEl(null);
    setCurrentMenu(null);
    setHoveredMenu(null);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
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
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <IconButton
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
                display: { xs: "none", sm: "none", md: "block" },
                color: COLORS.red,
                width: "10%",
                fontFamily: "Roboto",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "25.78px",
                cursor: 'pointer',

              }}
              onClick={()=> navigate("/admin/add-post")}
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
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
                  <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{
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
                    width: "80%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: COLORS.red,
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
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "40%",
                marginLeft: "15px",
              }}
            >
              {data.map((menu) => (
                <Box
                  key={menu}
                  onMouseEnter={(event) => handlePopoverOpen(event, menu)}
                  onMouseLeave={handlePopoverClose}
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "18.75px",
                    textAlign: "left",
                    color: COLORS.black,
                    backgroundColor: hoveredMenu === menu ? 'rgba(220, 220, 220, 1)' : COLORS.white,
                    display: "flex",
                    alignItems: "center",
                    borderRadius: '7px',
                    width: '15  %',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                    height: '30px'
                  }}
                >
                  {menu}
                  <KeyboardArrowDownIcon sx={{color: COLORS.lightGrayLighter}}/> 
                  <StyledPopover
                    id="simple-popover"
                    anchorEl={currentMenu === menu ? anchorEl : null}
                    open={currentMenu === menu}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <StyledMenuItem onClick={handlePopoverClose}>Option 1</StyledMenuItem>
                    <StyledMenuItem onClick={handlePopoverClose}>Option 2</StyledMenuItem>
                  </StyledPopover>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "15%",
              }}
            ></Box>
            <Box
              sx={{
                width: { xs: "80%", sm: "30%" },
                display: { xs: "flex", sm: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
              }}
            >
              <CustomSearchInput />
            </Box>
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
