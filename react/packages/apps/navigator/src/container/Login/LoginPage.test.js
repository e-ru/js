import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Redirect } from "react-router-dom";

import { LoginPageComponent } from "./LoginPage";
import LoginButton from "./LoginButton";
import AuthWindow from "./AuthWindow";

Enzyme.configure({ adapter: new Adapter() });

function setupLoggedIn() {
  const props = {
    loggedIn: true,
    location: { pathname: "/" },
  };

  const enzymeWrapper = shallow(<LoginPageComponent {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

function setupLoggedOut() {
  const props = {
    loggedIn: false,
    location: { pathname: "/" },
  };

  const enzymeWrapper = shallow(<LoginPageComponent {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("components", () => {
  describe("LoginPageComponent", () => {
    it("should render Redirect when logged in", () => {
      const { enzymeWrapper, props } = setupLoggedIn();

      const redirectProps = enzymeWrapper.find(Redirect).props();
      expect(redirectProps.to).toEqual(props.location);
    });

    it("should render self and subcomponents when logged out", () => {
      const { enzymeWrapper } = setupLoggedOut();
      expect(enzymeWrapper.find(LoginButton).length).toBe(1);
      expect(enzymeWrapper.find(AuthWindow).length).toBe(1);
    });
  });
});
