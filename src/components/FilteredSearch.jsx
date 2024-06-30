import React, {useEffect, useRef} from "react";
import { Box, Grid } from "@mui/material";
import { COLORS } from "../constants";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
import {trimTitle} from "../utils/helperFunctios";
// import Card3 from "../../components/Card3";

const FilteredSearch = ({ cardData, title }) => {
  const classes = useStyles();
  const navigate = useNavigate();
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
    <Box
    ref={search_input}
      sx={{
        mt: 2,
        maxHeight: "400px",
        overflowY: "auto",
        position: "absolute",
        zIndex: 100,
        '&::-webkit-scrollbar': {
             display: 'none'
        }
      }}
      className={classes.newsPostContainer}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* <Box varient="h4" className={classes.sectionTitle}>
          {title}
        </Box> */}
      </Box>
      <Grid container direction="column" spacing={2}>
        {cardData?.map((card, i) => {
            console.log("This is running :----",card)
          if (card?.postType === "image") {
            console.log("This is running inside images :----")
            return (
              <Grid key={i} item xs={12}>
                <Card
                  sx={{ mt: 0, width: "100%", display: "flex", height: "65px"}}
                >
                  <CardMedia
                    image={card?.mainImage}
                    title="green iguana"
                    className={classes.cardImg}
                  />
                  <CardContent
                    className={classes.cardcontent}
                    onClick={() => navigate(`/view-post/${card?._id}`)}
                  >
                    <Typography>{trimTitle(card?.title)}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 0, color: COLORS.lightGray }}
                    >
                      {/* {cardData?.description} */}
                      Началото на статията....
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          } else if (card?.postType === "video") {
            return (
              <Grid key={i} item xs={12}>
                <Card 
                className={classes.card}
                >
                  <CardMedia className={classes.media}>
                    <VideoCard
                      height={"100%"}
                      width={"100%"}
                      navigate={navigate}
                      videoUrl={card?.mainVideo}
                    />
                  </CardMedia>
                  <CardContent className={classes.content}  onClick={() => navigate(`/view-post/${card?._id}`)}>
                    <Typography className={classes.title}>
                      {trimTitle(card?.title)}
                    </Typography>
                    <Typography variant="body2" className={classes.description}>
                      Preview..
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default FilteredSearch;

const useStyles = makeStyles((theme) => ({
  newsPostContainer: {
    border: `1px solid ${COLORS.grey}`,
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: COLORS.white,
  },
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "20px",
  },
  cardImg: {
    margin: "8px",
    borderRadius: "12px",
    width: "100px",
    height: "50px",
  },
  cardcontent: {
    cursor: "pointer",
  //  backgroundColor: 'red',
    borderRadius: "12px",
    margin: "0px 0px",
    color: "black",
    height: "100px",
    marginRight: '6px',
    // padding: '5px'
  },
  card: {
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "none",
    // border: "1px solid #e0e0e0",
    width: "100%",
    height: "52px",
    paddingTop: '11px',
    paddingBottom: '5px',
    // marginTop: '5px'
    // backgroundColor: 'red'
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: "30%",
    height: "100%",
    borderRadius: "12px 12px 12px 12px",
    overflow: "hidden",
    marginBottom: '8px',
    marginLeft: '8px',
    // backgroundColor: 'red',
    paddingTop: "1px "
    // paddingBottom: "15px"
  },
  content: {
    // backgroundColor: 'blue',
     cursor: "pointer",
    paddingTop: "5px",
    width: "50%",
    height: '100%',
    marginLeft: '10px',
    marginTop: '15px'
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 600,
    // marginLeft: '10px'
  },
  description: {
    color: COLORS.lightGray,
    marginTop: "8px",
  },
}));
