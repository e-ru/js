import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import { MIN_DESKTOP_WIDTH } from "../../../constants";

import { getUsers, updateUser } from "../../../actions";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(1, 0),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textFieldMobile: {
    width: "100%",
  },
  lineBreak: {
    width: "100%",
  },
  lineExpander: {
    flexGrow: 1,
  },
  switch: {
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2, 1, 1, 1),
  },
}));

const userRestRepInit = {
  username: "",
  email: "",
  enabled: false,
  accountLocked: false,
  accountExpired: false,
};

const UserComponent = ({ users, match, getUsersHandler, updateUserHandler }) => {
  const [userRestRep, setUserRestRep] = useState(userRestRepInit);

  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  const id = Number(match.params.id);

  useEffect(() => {
    if (users.length === 0) getUsersHandler();
    setUserRestRep(users.filter(u => u.id === id)[0] || userRestRepInit);
  }, [users, getUsersHandler, id]);

  const handleTextChange = name => event => {
    setUserRestRep({ ...userRestRep, [name]: event.target.value });
  };

  const handleSwitchChange = name => event => {
    setUserRestRep({ ...userRestRep, [name]: event.target.checked });
  };

  console.log("userResp: ", userRestRep);
  return userRestRep ? (
    <Paper className={classes.paper}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={clsx(classes.textField, {
            [classes.lineExpander]: isDesktop,
            [classes.textFieldMobile]: !isDesktop,
          })}
          value={userRestRep.username}
          onChange={handleTextChange("username")}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="E-Mail"
          className={clsx(classes.textField, {
            [classes.lineExpander]: isDesktop,
            [classes.textFieldMobile]: !isDesktop,
          })}
          value={userRestRep.email}
          onChange={handleTextChange("email")}
          margin="normal"
        />
        <div className={classes.lineBreak} />
        <FormControlLabel
          className={`${classes.switch} ${classes.lineExpander}`}
          control={
            <Switch
              checked={userRestRep.enabled}
              onChange={handleSwitchChange("enabled")}
              value="enabled"
              color="primary"
            />
          }
          label="Enabled"
        />
        <FormControlLabel
          className={`${classes.switch} ${classes.lineExpander}`}
          control={
            <Switch
              checked={userRestRep.accountLocked}
              onChange={handleSwitchChange("accountLocked")}
              value="accountLocked"
              color="primary"
            />
          }
          label="Locked"
        />
        <FormControlLabel
          className={`${classes.switch} ${classes.lineExpander}`}
          control={
            <Switch
              checked={userRestRep.accountExpired}
              onChange={handleSwitchChange("accountExpired")}
              value="accountExpired"
              color="primary"
            />
          }
          label="Expired"
        />
        <div className={classes.lineBreak} />
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={() => updateUserHandler(id, userRestRep)}
        >
          <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
          Save
        </Button>
        <div className={classes.lineExpander} />
        <Button variant="contained" color="secondary" className={classes.button}>
          Delete
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </form>
    </Paper>
  ) : null;
};

UserComponent.propTypes = {
  users: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  getUsersHandler: PropTypes.func.isRequired,
  updateUserHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  getUsersHandler: () => (dispatch, getState) => dispatch(getUsers(getState().oauth.authData.access_token)),
  updateUserHandler: (id, user) => (dispatch, getState) =>
    dispatch(updateUser(id, user, getState().oauth.authData.access_token)),
};

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);

export default User;
