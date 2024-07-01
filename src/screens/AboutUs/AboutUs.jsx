import { useTheme } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import CallIcon from "@mui/icons-material/Call";
import FaxIcon from "@mui/icons-material/Fax";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import aboutUsImg from "../../assets/images/aboutUs1.png";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS } from "../../constants";

export const AboutUs = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ marginTop: { xs: "10px", md: "10px", xl: "40px" } }}
      >
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            // padding: theme.spacing(4),
            borderRadius: theme.shape.borderRadius,
            padding: { xs: "18px", md: "1.8rem", xl: "2.5rem" },
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              color: "black",
              fontSize: { xs: "1rem", md: "2rem", xl: "2rem" },
              paddingBottom: { xs: "17px" },
              "@media (min-width: 1024px)": { fontSize: "3rem" },
            }}
          >
            We pay attention to your needs and do the best design.
          </Typography>
          <Grid
            container
            spacing={7}
            sx={{ marginTop: { xs: "", md: "5px", xl: "10px" } }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "16px", md: "18px" },
                  letterSpacing: "0.1rem",
                  lineHeight: { xs: "24px", md: "27px", xl: "28px" },
                  fontWeight: "400",
                  paddingLeft: { xs: "0px", md: "10px", xl: "28px" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
                sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi
                tincidunt ornare massa eget. Dictum varius duis at consectetur
                lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
                enim. Velit ut tortor pretium viverra suspendisse potenti
                nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
                facilisis magna. Dignissim diam quis enim lobortis scelerisque
                fermentum. Odio ut enim blandit volutpat maecenas volutpat.
                Ornare lectus sit amet est placerat in egestas erat.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Design Image"
                  height="100%"
                  image={aboutUsImg}
                  title="Design Image"
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* saction-2 */}

      <Box
        sx={{
          marginTop: "60px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                padding: { xs: "0px", md: "10px", xl: "30px" },
                backgroundColor: "#f9f9f9",
                overflow: "hidden",
                marginBottom: 2,
                borderRadius: "0 35px 35px 0",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091508971775!2d-122.41941548468136!3d37.77492977975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f7b1e5bf%3A0x8e77bb2af645d56f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1597752501041!5m2!1sen!2sin"
                width="100%"
                height="290"
                frameBorder="0"
                style={{ border: 0, borderRadius: "0 35px 35px 0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="123"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ marginTop: "40px" }}>
            <Box
              varient="h4"
              className={classes.sectionTitle}
              sx={{ marginBottom: "30px", marginLeft: 2 }}
            >
              Mega News Information
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 3,
                marginLeft: 4,
              }}
            >
              <EmailTwoToneIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1">Management@Mega.News</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 3,
                marginLeft: 4,
              }}
            >
              <CallIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1">+1(234) 567-8910</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 3,
                marginLeft: 4,
              }}
            >
              <FaxIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1">+1(234) 567-8910</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 3,
                marginLeft: 4,
              }}
            >
              <MyLocationIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1">
                1234 Fortune St. New Lenox, IL 123456
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginLeft: 4 }}>
              <WatchLaterIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1">
                Responding 24 Hours A Day, 7 Days A Week
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    borderLeft: `5px solid ${COLORS.red}`,
    lineHeight: "normal",
    paddingLeft: "10px",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "21px",
    height: "10px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
}));
