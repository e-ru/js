import { parseHrefForCode, parseHrefForState, compareGeneratedWithReceivedState } from "./oauth";

const code = "test_code";
const state = "test_state";

const testUrl = `http://localhost:54321/xxx.html?code=${code}&state=${state}`;

describe("oauth", () => {
  it("check parseHrefForCode", () => {
    const parsedCode = parseHrefForCode(testUrl);

    expect(parsedCode).toEqual(code);
  });

  it("check parseHrefForState", () => {
    const parsedState = parseHrefForState(testUrl);
    expect(parsedState).toEqual(state);
  });

  it("check compareGeneratedWithReceivedState", () => {
    const parsedState = parseHrefForState(testUrl);
    const equal = compareGeneratedWithReceivedState(state, parsedState);
    expect(equal).toBe(true);
  });
});
