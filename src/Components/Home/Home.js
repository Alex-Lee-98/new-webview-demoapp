import React from 'react';
import Banner from "../Home/Banner";
import Header from "../Home/Header";
import VideoIntro from "../Home/VideoIntro";
import { Container, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalLoading from "../ModalLoading";

export default function Home() {
  const classes = useStyles();
  const childLoading = React.useRef();
  return (
    <div className = {classes.App}>
      <ModalLoading ref={childLoading}></ModalLoading>
      <Header></Header>
      <VideoIntro ></VideoIntro>
      <Banner></Banner>
      <Button
        className = {classes.BTN_ABOUT}
        color="secondary"
      >
        About BVTM’s insurance
      </Button>
      <Button>Recommendation</Button>
      <Box className={classes.GROUP_BUTTON}>
        <Box className={classes.ROW_GROUP_BUTTON}>
          <Button
            type="outline"
            title=""
            className = {classes.BTN_GROUP}
          >
            Sign up
          </Button>
          <Button
            type="outline"
            title=""
            className = {classes.BTN_GROUP}
          >Reference</Button>
          <Button
            type="outline"
            title=""
            className = {classes.BTN_GROUP}
            >Change plan</Button>
        </Box>
        <Box className = {classes.ROW_GROUP_BUTTON}>
          <Button
            type="outline"
            title=""
            className = {classes.BTN_GROUP}
          >Products</Button>
          <Button
            type="outline"
            title=""
            className = {classes.BTN_GROUP}
          >Accidents?</Button>
          <Button
            type="outline"
            title=""
            className = {classes.BTN_GROUP}
          >News</Button>
        </Box>
      </Box>
    </div>
  );
}
const useStyles = makeStyles(theme => ({
 BTN_ABOUT:{
  marginVertical: "20px",
  backgroundColor: "#828381",
  color: "white",
},

GROUP_BUTTON:{
  marginTop: "50px",
  color: "white",
},

ROW_GROUP_BUTTON:{
  flexDirection: 'row',
  marginTop: "20px",
  color: "white",
},
BTN_GROUP:{
  flex: 1,
  marginHorizontal: 0,
  backgroundColor: "#4a0084",
  width: "20%",
  color: "white",
},
App: {
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
  [theme.breakpoints.up("md")]: {
    width: "78%"
  },
  [theme.breakpoints.up("lg")]: {
    width: "64%"
  },
  height: "80vh",
  margin: "auto",
  textAlign: 'center',
}
}));
