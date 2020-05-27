import React, { Component }  from 'react';
import {
    Typography
  } from '@material-ui/core'; 
  import { withStyles } from '@material-ui/core';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="App-Header">
        <Typography className = "Title">{`Hi! Anh(P)`}</Typography>
        <img
          src={require('../../Assets/logo.png')}
          className = {classes.Logo}
          resizeMode="contain"
        />
      </div>
    );
  };
}
const styles = (theme) => {
  return {
  appheader :{
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
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
export default withStyles(styles, { withTheme: true })(Header);
