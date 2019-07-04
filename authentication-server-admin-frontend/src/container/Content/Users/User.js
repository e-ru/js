import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { NavLink, Redirect } from "react-router-dom";

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

import { MIN_DESKTOP_WIDTH, USERS_PATH } from "../../../constants";

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

const textfield = (classes, isDesktop, value, onChange) => (
  <TextField
    id="standard-name"
    label="Name"
    className={clsx(classes.textField, {
      [classes.lineExpander]: isDesktop,
      [classes.textFieldMobile]: !isDesktop,
    })}
    value={value}
    onChange={onChange}
    margin="normal"
  />
);

const switchControl = (classes, checked, onChange, value, label) => (
  <FormControlLabel
    className={`${classes.switch} ${classes.lineExpander}`}
    control={<Switch checked={checked} onChange={onChange} value={value} color="primary" />}
    label={label}
  />
);

const userRestRepInit = {
  username: "",
  email: "",
  enabled: false,
  accountLocked: false,
  accountExpired: false,
};

const UserComponent = ({ usersRefreshed, users, match, updateUserHandler }) => {
  const [userRestRep, setUserRestRep] = useState(userRestRepInit);

  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  const id = Number(match.params.id);
  console.log("users: ", users);

  useEffect(() => {
    if (users.length > 0) setUserRestRep(users.filter(u => u.id === id)[0] || userRestRepInit);
  }, [users, id]);

  const handleTextChange = name => event => {
    setUserRestRep({ ...userRestRep, [name]: event.target.value });
  };

  const handleSwitchChange = name => event => {
    setUserRestRep({ ...userRestRep, [name]: event.target.checked });
  };

  console.log("userResp: ", userRestRep);
  console.log("updated: ", usersRefreshed);
  return usersRefreshed ? (
    <Redirect to={USERS_PATH} />
  ) : (
    <Paper className={classes.paper}>
      <form className={classes.container} noValidate autoComplete="off">
        {textfield(classes, isDesktop, userRestRep.username, handleTextChange("username"))}
        {textfield(classes, isDesktop, userRestRep.email, handleTextChange("email"))}
        <div className={classes.lineBreak} />
        {switchControl(classes, userRestRep.enabled, handleSwitchChange("enabled"), "enabled", "Enabled")}
        {switchControl(
          classes,
          userRestRep.accountLocked,
          handleSwitchChange("accountLocked"),
          "accountLocked",
          "Locked"
        )}
        {switchControl(
          classes,
          userRestRep.accountExpired,
          handleSwitchChange("accountExpired"),
          "accountExpired",
          "Expired"
        )}
        <div className={classes.lineBreak} />
        {/* <NavLink style={{ color: "inherit", textDecoration: "none" }} to={`${USERS_PATH}`}> */}
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={() => {
            updateUserHandler(id, userRestRep);
          }}
        >
          <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
          Save
        </Button>
        {/* </NavLink> */}
        <div className={classes.lineExpander} />
        <Button variant="contained" color="secondary" className={classes.button}>
          Delete
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </form>
    </Paper>
  );
};

UserComponent.propTypes = {
  usersRefreshed: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  updateUserHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.oauth.users,
  usersRefreshed: state.oauth.usersRefreshed,
});

const mapDispatchToProps = {
  updateUserHandler: (id, user) => (dispatch, getState) =>
    dispatch(updateUser(id, user, getState().oauth.authData.access_token)),
};

const User = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);

export default User;
