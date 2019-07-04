import React from "react";
import { create } from "react-test-renderer";
import LoginButton from "../../../container/Login/LoginButton";

describe("LoginButton component", () => {
  test("it shows the expected text when clicked (testing the wrong way!)", () => {
    const component = create(<LoginButton text="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.text).toBe("");
    instance.handleClick();
    expect(instance.state.text).toBe("PROCEED TO CHECKOUT");
  });
});
