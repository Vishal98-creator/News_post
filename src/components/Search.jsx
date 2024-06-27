import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/system";
import { COLORS } from "../constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: COLORS.grey,
  borderRadius: "13px",
  // width: '100%',
  width: "399px",
  height: "48px",
  // "&:hover": {
  //   backgroundColor: COLORS.white,
  // },
}));
const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: '5px',
    backgroundColor: COLORS.white,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    minWidth: 200,
    color: COLORS.black,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
 
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '18.75px',
  textAlign: 'left',
  color: COLORS.black,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
const IconWrapper = styled(Button)({
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
  borderRadius: "13px",
  // backgroundColor: 'red',
  height: "50px",
});
const SearhWrapper = styled(Box)({
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
});
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  "& input::placeholder": {
    color: "#777",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14.06px",
    textAlign: "left",
  },
}));

export default function CustomSearchInput() {
  const [anchorInputEl, setAnchorInputEl] = React.useState(null);

  const handleMenuInputClick = (event) => {
    setAnchorInputEl(event.currentTarget);
  };

  const handleMenuInputClose = () => {
    setAnchorInputEl(null);
  };
  return (
    <SearchBox>
      {/* <IconWrapper>
        <MoreVertIcon />
      </IconWrapper> */}
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMenuInputClick}
        color="inherit"
        sx={{
          padding: "0 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#777",
          borderRadius: "13px",
          // backgroundColor: 'red',
          height: "48px",
        }}
      >
        <MoreVertIcon />
      </Button>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorInputEl}
        keepMounted
        open={Boolean(anchorInputEl)}
        onClose={ handleMenuInputClose }
      >
        <StyledMenuItem onClick={handleMenuInputClose}>Option 1</StyledMenuItem>
        <StyledMenuItem onClick={handleMenuInputClose}>Option 2</StyledMenuItem>
      </StyledMenu>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <SearhWrapper>
        <SearchIcon />
      </SearhWrapper>
    </SearchBox>
  );
}
