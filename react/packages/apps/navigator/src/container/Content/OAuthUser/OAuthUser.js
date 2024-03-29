import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";

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

import { MIN_DESKTOP_WIDTH } from "../../../constants/ui";
import { OAUTH_USERS_PATH } from "../../../constants/router";

import { requestOAuthUsers, updateOAuthUser } from "../../../actions/oauthadmin";

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

export const OAuthUserComponent = ({ oAuthUsers, match, getUsersHanlder, updateUserHandler }) => {
  const [userRestRep, setUserRestRep] = useState(userRestRepInit);
  const [updateRequest, setUpdateRequest] = useState(false);

  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  const id = Number(match.params.id);

  useEffect(() => {
    if (oAuthUsers.length > 0) setUserRestRep(oAuthUsers.filter(u => u.id === id)[0] || userRestRepInit);
    else getUsersHanlder();
  }, [oAuthUsers, getUsersHanlder, id]);

  const handleTextChange = name => event => {
    setUserRestRep({ ...userRestRep, [name]: event.target.value });
  };

  const handleSwitchChange = name => event => {
    setUserRestRep({ ...userRestRep, [name]: event.target.checked });
  };

  return updateRequest ? (
    <Redirect to={OAUTH_USERS_PATH} />
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
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={() => {
            updateUserHandler(id, userRestRep);
            setUpdateRequest(true);
          }}
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
  );
};

OAuthUserComponent.propTypes = {
  oAuthUsers: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  getUsersHanlder: PropTypes.func.isRequired,
  updateUserHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  oAuthUsers: state.oauthadmin.oAuthUsers,
});

const mapDispatchToProps = {
  getUsersHanlder: () => (dispatch, getState) => dispatch(requestOAuthUsers(getState().oauth.authData.access_token)),
  updateUserHandler: (id, user) => (dispatch, getState) =>
    dispatch(updateOAuthUser(id, user, getState().oauth.authData.access_token)),
};

const OAuthUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuthUserComponent);

export default OAuthUser;
