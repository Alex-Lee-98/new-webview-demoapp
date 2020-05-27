import React, { Component }  from 'react';
import {View} from "@material-ui/core";
import YouTube from 'react-youtube';
import { withStyles } from '@material-ui/core';


class VideoIntro extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { classes } = this.props;
      return (
      <div className={classes.LAYOUT}>
        <YouTube
          videoId="JpFeT82CRfQ"
          style={{alignSelf: 'stretch', height: 200}}
          apiKey="519810911198-3vhb49ai09l8rq1ldjkssdldta51b3f4.apps.googleusercontent.com"
        />
      </div>
    );
  };
}
  const styles = (theme) => {
    return {
    IMG_VIDEO: {
        alignSelf: 'center',
    },
    TITLE: {
        textAlign: 'center',
    },
    LAYOUT:{
        marginTop: "20px",
        elevation: 2,
    },
    VIDEO_INFO: {
        textAlign: 'center',
      
    },
  }};

  export default withStyles(styles, { withTheme: true })(VideoIntro);