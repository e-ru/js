import React from "react";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import { ContentComponent } from "./Content";
import Users from "./Users/Users";
import User from "./Users/User";

import { initialState as ui } from "../../reducers/ui";
import { initialState as oauth } from "../../reducers/oauth";

configure({ adapter: new Adapter() });

const initialState = {
  ui,
  oauth,
};

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Content using memory router", () => {
  it("should show Users component for /users (using memory router)", () => {
    const store = mockStore(initialState);
    const component = mount(
      <MemoryRouter initialEntries={["/users"]}>
        <Provider store={store}>
          <ContentComponent sideDrawerOpen />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(Users)).toHaveLength(1);
  });

  it("should show User component for /users/1 (using memory router)", () => {
    const user = {
      id: 1,
      email: "r@ru.org",
      username: "rru",
      enabled: true,
      accountExpired: false,
      accountLocked: false,
    };
    const tmpState = { ...initialState };
    const oauthTmp = tmpState.oauth;
    oauthTmp.users.push(user);
    tmpState.oauth = oauthTmp;
    const store = mockStore(tmpState);
    const component = mount(
      <MemoryRouter initialEntries={["/users/1"]}>
        <Provider store={store}>
          <ContentComponent sideDrawerOpen />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(User)).toHaveLength(1);
  });

  it("should show Users component for /users/1 after user was updated and users were refreshed (using memory router)", () => {
    const tmpState = { ...initialState };
    const oauthTmp = tmpState.oauth;
    // oauthTmp.users.push(user);
    oauthTmp.usersRefreshedAfterUserUpdate = true;
    tmpState.oauth = oauthTmp;
    const store = mockStore(tmpState);
    const component = mount(
      <MemoryRouter initialEntries={["/users/1"]}>
        <Provider store={store}>
          <ContentComponent sideDrawerOpen />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(Users)).toHaveLength(1);
  });
});
