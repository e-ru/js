import React from "react";
import { configure, shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import { OAUTH_USERS_PATH } from "../../constants/router";

import { MainComponent } from "./Main";
import OAuthUser from "../Content/OAuthUser";
import OAuthUsers from "../Content/OAuthUsers";

import { initialState as ui } from "../../reducers/ui";
import { initialState as oauth } from "../../reducers/oauth";
import { initialState as oauthadmin } from "../../reducers/oauthadmin";

configure({ adapter: new Adapter() });

const initialState = {
  ui,
  oauth,
  oauthadmin,
};

const middlewares = [];
const mockStore = configureStore(middlewares);

it("renders without crashing", () => {
  const store = mockStore(initialState);
  const app = shallow(
    <MemoryRouter initialEntries={[OAUTH_USERS_PATH]}>
      <Provider store={store}>
        <MainComponent sideDrawerOpen />
      </Provider>
    </MemoryRouter>
  );
  expect(app).toMatchSnapshot();
});

describe("Content using memory router", () => {
  it(`should show Users component for ${OAUTH_USERS_PATH} (using memory router)`, () => {
    const tmpState = { ...initialState };
    tmpState.oauthadmin.oAuthUsers.push({
      id: 1,
      email: "r@ru.org",
      username: "rru",
      enabled: true,
      accountExpired: false,
      accountLocked: false,
    });

    const store = mockStore(initialState);
    const component = mount(
      <MemoryRouter initialEntries={[OAUTH_USERS_PATH]}>
        <Provider store={store}>
          <MainComponent sideDrawerOpen />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(OAuthUsers)).toHaveLength(1);
  });

  it(`should show User component for ${OAUTH_USERS_PATH}/1 (using memory router)`, () => {
    const user = {
      id: 1,
      email: "r@ru.org",
      username: "rru",
      enabled: true,
      accountExpired: false,
      accountLocked: false,
    };
    const tmpState = { ...initialState };
    const oauthadminTmp = tmpState.oauthadmin;
    oauthadminTmp.oAuthUsers.push(user);
    tmpState.oauthadmin = oauthadminTmp;
    const store = mockStore(tmpState);
    const component = mount(
      <MemoryRouter initialEntries={[`${OAUTH_USERS_PATH}/1`]}>
        <Provider store={store}>
          <MainComponent sideDrawerOpen />
        </Provider>
      </MemoryRouter>
    );
    expect(component.find(OAuthUser)).toHaveLength(1);
  });

  // it("should show Users component for /users/1 after user was updated and users were refreshed (using memory router)", () => {
  //   const tmpState = { ...initialState };
  //   const oauthTmp = tmpState.oauth;
  //   // oauthTmp.users.push(user);
  //   oauthTmp.usersRefreshedAfterUserUpdate = true;
  //   tmpState.oauth = oauthTmp;
  //   const store = mockStore(tmpState);
  //   const component = mount(
  //     <MemoryRouter initialEntries={["/users/1"]}>
  //       <Provider store={store}>
  //         <ContentComponent sideDrawerOpen />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  //   expect(component.find(OAuthUsers)).toHaveLength(1);
  // });
});
