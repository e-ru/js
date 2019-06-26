import React from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";

import "./Content.css";

function Index() {
  return <h2>Home</h2>;
}

function User({ match }) {
  console.log("User match: ", match);
  return <h3>Requested Param: {match.params.id}</h3>;
}

User.propTypes = {
  match: PropTypes.object.isRequired,
};

function Users({ match }) {
  console.log("Users match: ", match);
  return (
    <div>
      <h2>Users</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={User} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </div>
  );
}

Users.propTypes = {
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

const Main = () => (
  <section className="content">
    <Route path="/client-details" component={ClientDetails} />
    <Route path="/users" component={Users} />
    <Route path="/" exact component={Index} />
  </section>
);

export default Main;
