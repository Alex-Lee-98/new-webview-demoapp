import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";

class Banner extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appBanner}>
          <img src={require('../../Assets/banner.png')} className = {classes.Logo} alt = "logo" />
      </div>
    );
  };
}
const styles = (theme) => {
  return {
  appBanner: {
    marginTop: "20px",
    width: 100,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "78%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "64%"
    },
  },
  Logo:{
    width: 100,
    height: 50,
  }
}};
export default withStyles(styles, { withTheme: true })(Banner);
