// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom/extend-expect";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { queryByTestId } = render(<App />);

  expect(queryByTestId("app-test-id")).not.toBeNull();
});
