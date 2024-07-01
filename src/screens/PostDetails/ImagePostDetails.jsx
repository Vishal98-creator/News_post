import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React ,{useEffect, useRef} from "react";
import { COLORS } from "../../constants";
import { CalendarToday } from "@mui/icons-material";
import ImageSlider from "./ImageSlider";
import moment from "moment";
import 'moment/locale/bg';

const ImagePostDetails = ({ postDetails}) => {  
  const classes = useStyles();
  const search_input = useRef(null);
  useEffect(() => {
   function handleClickOutside(event) {
     if (search_input.current && !search_input.current.contains(event.target)) {
      //  setSearchResults([]);
     }
   }
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [search_input]);
  return (
    <>
      <Box mt={5} useRef={search_input}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <Box className={classes.mainImgContainer}>
              <Box className={classes.mainImgTitle} sx={{}}>Заглавие на статията</Box>
              <Box sx={{ width: "100%", height: "598px", mt: 3, mb: 3 }}>
                <img
                  src={postDetails?.mainImage}
                  alt="imgBg"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                <CalendarToday />
                <span style={{ marginTop: "5px", marginLeft: "10px" }}>
                  {moment(postDetails?.createdAt).format('DD MM , YYYY')}
                </span>
              </Box>
              <Box>
                <div dangerouslySetInnerHTML={{ __html: postDetails?.content }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
         { postDetails?.images?.length > 0 && 
            <Box className={classes.mainImgContainer}>
              <Box sx={{ fontSize: "12x", fontWeight: 600 }}>Images</Box>
              <ImageSlider images={postDetails?.images}/>
            </Box>
}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ImagePostDetails;

const useStyles = makeStyles((theme) => ({
  mainImgContainer: {
    backgroundColor: COLORS.grey,
    // width: "100%",
    padding: "30px",
    borderRadius: "12px",
  },
  mainImgTitle: {
    fontSize: {
      md:'36px',
      sm:'20px',
      xs:'30px'
    },
    fontWeight: "600",
    lineHeight: "42.19px",
    // marginTop: "10px",
  },
}));
