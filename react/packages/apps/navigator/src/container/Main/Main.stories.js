import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

import { initialState as ui } from "../../reducers/ui";
import { initialState as oauth } from "../../reducers/oauth";
import { initialState as oauthadmin } from "../../reducers/oauthadmin";

import Main from "./Main";

const initialState = {
  ui,
  oauth,
  oauthadmin,
};

const middlewares = [];
const mockStore = configureStore(middlewares);

storiesOf("MainComponent", module).add("with slider open", () => {
  const oauthadminTmp = initialState.oauthadmin;
  oauthadminTmp.oAuthUsers = [
    {
      id: 0,
      username: "test_user_1",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    {
      id: 1,
      username: "test_user_2",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    {
      id: 2,
      username: "test_user_3",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    {
      id: 3,
      username: "test_user_4",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    {
      id: 4,
      username: "test_user_5",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    {
      id: 5,
      username: "test_user_6",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
    {
      id: 6,
      username: "test_user_7",
      email: "t@b.d",
      enabled: true,
      accountLocked: false,
      accountExpired: false,
    },
  ];
  initialState.oauthadmin = oauthadminTmp;
  const store = mockStore(initialState);
  return (
    <MemoryRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </MemoryRouter>
  );
});
// .add("with slider close", () => <MainComponent sideDrawerOpen={false} />);
