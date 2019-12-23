import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Redirect, Route } from "react-router-dom";

import { ProtectedMainRouteComponent, PrivateRouteContent } from "./ProtectedMainRoute";
import Main from "../../Main";

configure({ adapter: new Adapter() });

function setupPrivateRouteComponent(loggedIn) {
  const props = {
    loggedIn,
  };

  const privateRoute = shallow(<ProtectedMainRouteComponent {...props} />);

  return {
    privateRoute,
  };
}

function setupPrivateRouteContent(loggedIn) {
  const props = {
    loggedIn,
  };
  const privateRouteContent = shallow(<PrivateRouteContent {...props} />);
  return { privateRouteContent };
}

it("renders without crashing", () => {
  const { privateRoute } = setupPrivateRouteComponent(false);
  expect(privateRoute).toMatchSnapshot();
});

describe("Testing PrivateRouteComponent: ", () => {
  it("loggedIn = false", () => {
    const { privateRoute } = setupPrivateRouteComponent(false);
    expect(privateRoute.find(Route).length).toBe(1);
  });
  it("loggedIn = true", () => {
    const { privateRoute } = setupPrivateRouteComponent(true);
    expect(privateRoute.find(Route).length).toBe(1);
  });
  it("should render Redirect when not logged in", () => {
    const { privateRouteContent } = setupPrivateRouteContent(false);
    expect(privateRouteContent.find(Redirect).length).toBe(1);
  });
  it("should render MainComponent when logged in", () => {
    const { privateRouteContent } = setupPrivateRouteContent(true);
    expect(privateRouteContent.find(Main).length).toBe(1);
  });
});
