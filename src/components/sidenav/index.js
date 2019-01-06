import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { BrowserRouter, Route, Link } from "react-router-dom";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes, color } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {["home", "donasi", "about"].map((text, index) => (
            <Link button key={index} to={"/" + text}>
              <ListItem button key={index}>
                <ListItemText>
                  {text}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button
          className="white right material-btn hide-on-large-only show-on-med-and-down"
          onClick={this.toggleDrawer("left", true)}
        >
          <i className={'material-icons'+ color}>menu</i>
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
