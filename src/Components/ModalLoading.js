import React, { Component } from "react";
import { Dialog, DialogContent, CircularProgress } from "@material-ui/core";
import { withStyles, Container, Paper } from "@material-ui/core";

class ModalLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: props.openDialog,
    };
  }

  openDialog = () => {
    this.setState({ dialogOpen: true })
  }

  closeDialog = () => {
    this.setState({ dialogOpen: false })
  }

  render() {
    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={this.state.dialogOpen}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            width: 100,
            height: 100
          }
        }}
      >
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    );
  }
}

const styles = theme => {
  return {
    dialog: {},
    titleDialog: {
      margin: 0,
      display: "flex",
      flexDirection: "row",
      alignItem: "center",
      background: "#3F51B5"
    }
  };
};

export default withStyles(styles, { withTheme: true })(ModalLoading);
