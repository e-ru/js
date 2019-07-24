import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";

import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

import {
  MIN_DESKTOP_WIDTH,
  CONTENT_MARGIN_TOP_DESKTOP,
  CONTENT_MARGIN_TOP_MOBILE,
  // USERS_PATH,
} from "../../constants/ui";

// import Users from "./Users/Users";
// import User from "./Users/User";

function Index() {
  return <h2>Home</h2>;
}

function Role({ match }) {
  console.log("Role match: ", match);
  return <h3>Requested Param: {match.params.id}</h3>;
}

Role.propTypes = {
  match: PropTypes.object.isRequired,
};

function Roles({ match }) {
  console.log("Roles match: ", match);
  return (
    <div>
      <h2>Roles</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Role} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </div>
  );
}

Roles.propTypes = {
  match: PropTypes.object.isRequired,
};

function ClientDetails() {
  return (
    <div>
      <h2>Client Details</h2>
      <p>
        This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is
        a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph.. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a
        paragraph. This is a paragraph
      </p>
    </div>
  );
}

// const userRoutes = () => (
//   <div>
//     <Route path="/users" exact component={Users} />
//     <Route path={`${USERS_PATH}/:id`} component={User} />
//   </div>
// );

const drawerWidth = 240;
const drawerShrinkWidth = 73;

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentDesktop: {
    marginTop: CONTENT_MARGIN_TOP_DESKTOP,
    marginLeft: drawerShrinkWidth,
  },
  contentMobile: {
    marginTop: CONTENT_MARGIN_TOP_MOBILE,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

export const ContentComponent = ({ sideDrawerOpen }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: sideDrawerOpen && isDesktop,
        [classes.contentDesktop]: isDesktop,
        [classes.contentMobile]: !isDesktop,
      })}
    >
      <Route path="/client-details" component={ClientDetails} />
      {/* {userRoutes()} */}
      <Route path="/roles" component={Roles} />
      <Route path="/" exact component={Index} />
    </main>
  );
};

ContentComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  // console.log("content state: ", state);
  return {
    sideDrawerOpen: state.ui.sideDrawerOpen,
  };
};

const Content = connect(mapStateToProps)(ContentComponent);

export default Content;
