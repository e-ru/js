import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import { initialState as ui } from "./reducers/ui";
import { initialState as oauth } from "./reducers/oauth";

import App from "./App";
import LoginPage from "./container/Login/LoginPage";
import Main from "./container/Main/Main";

configure({ adapter: new Adapter() });

const initialState = {
  ui,
  oauth,
};

const middlewares = [];
const mockStore = configureStore(middlewares);

// simple smoke test
it("renders without crashing", () => {
  const store = mockStore(initialState);
  const app = shallow(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  expect(app).toMatchSnapshot();
});

describe("App using memory router", () => {
  it("should show LoginPage component for / router (using memory router) when not logged in", () => {
    const store = mockStore(initialState);
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(LoginPage)).toHaveLength(1);
  });

  it("should show Main component for / router (using memory router) when logged in", () => {
    const oauthTmp = initialState.oauth;
    oauthTmp.loggedIn = true;
    const loggedInState = {
      ...initialState,
      oauth: { ...oauthTmp },
    };
    const store = mockStore(loggedInState);
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(Main)).toHaveLength(1);
  });
});
