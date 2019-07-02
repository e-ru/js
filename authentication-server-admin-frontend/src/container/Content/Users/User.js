import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const UserComponent = ({ user }) => {
  console.log("users: ", user);

  const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(1, 0),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={user.username}
          // onChange={handleChange("name")}
          margin="normal"
        />
      </form>
    </Paper>
  );
};

UserComponent.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  users: ownProps.user,
});

const User = connect(mapStateToProps)(UserComponent);

export default User;
