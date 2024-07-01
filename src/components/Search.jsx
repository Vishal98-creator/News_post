import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/system";
import { COLORS } from "../constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Dialog, DialogContent } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { apiCall } from "../utils/httpClient";
import apiEndPoints from "../utils/apiEndPoints";
import FilteredSearch from "./FilteredSearch";


export default function CustomSearchInput() {
  const searchOptions = ["All", "Title", "Tag", "Content"];
  const [anchorInputEl, setAnchorInputEl] = React.useState(null);
  const [searchType, setSearchType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  console.log('searchResults: @@@@@@@', searchResults);

  console.log("searchData ===>>>: ", searchType);

  const search_input = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (search_input.current && !search_input.current.contains(event.target)) {
        setSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search_input]);
  const handleMenuInputClick = (event) => {
    setAnchorInputEl(event.currentTarget);
  };
  const handleMenuInputClose = (item) => {
    setSearchType(item);
    setAnchorInputEl(null);
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
 
  useEffect(() => {
    if (searchQuery.trim !== "") {
      const fetchFilteredData = async () => {
        const data = { [searchType.toLowerCase()]: searchQuery }
        try {
          const response = await apiCall('POST', apiEndPoints.GETFILTEREDPOST, JSON.stringify(data));
          console.log("The response is :--->>", response);
          setSearchResults(response?.data?.posts);
          setIsVisible(true);
        } catch (error) {
          console.error("GETFILTEREDPOST error :- ", error);
        }
      }
      fetchFilteredData();
    }
  }, [searchQuery])
  return (
    <Box ref={search_input} sx={{width: "100%"}}>
      <SearchBox>
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
          onClose={handleMenuInputClose}
        >
          {searchOptions.map((item) => {
            return (
              <StyledMenuItem onClick={() => handleMenuInputClose(item)}>
                {item}
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={handleInputChange}
        />

        <SearhWrapper>
          <SearchIcon />
        </SearhWrapper>
      </SearchBox>
      {searchResults?.length > 0 && isVisible ?
        <FilteredSearch cardData={searchResults} title="Search Results" isVisible={isVisible} setIsVisible={setIsVisible} setSearchQuery={setSearchQuery}/> : ""}
    </Box>
  );
}


const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: COLORS.grey,
  borderRadius: "13px",
  width: "100%",
  height: "48px",
}));
const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: "5px",
    backgroundColor: COLORS.white,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    minWidth: 200,
    color: COLORS.black,
    zIndex: 1000
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
const IconWrapper = styled(Button)({
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
  borderRadius: "13px",
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



