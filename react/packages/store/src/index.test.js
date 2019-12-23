import { createReducer } from "./index";

const SET_TEST1_VAR1 = "SET_TEST1_VAR1";
const SET_TEST1_VAR2 = "SET_TEST1_VAR2";

const SET_TEST2_VAR1 = "SET_TEST2_VAR1";
const SET_TEST2_VAR2 = "SET_TEST2_VAR2";

const setTest1Var1 = val => ({
  type: SET_TEST1_VAR1,
  payload: val,
});

const setTest1Var2 = val => ({
  type: SET_TEST1_VAR2,
  payload: val,
});

const initialState1 = {
  test1Var1: "foo",
  test1Var2: 1,
};

const reducer1 = (state = initialState1, action) => {
  switch (action.type) {
    case SET_TEST1_VAR1:
      return {
        ...state,
        test1Var1: action.payload,
      };
    case SET_TEST1_VAR2:
      return {
        ...state,
        test1Var2: action.payload,
      };
    default:
      return state;
  }
};

const initialState2 = {
  test2Var1: false,
  test2Var2: {},
};

const setTest2Var1 = val => ({
  type: SET_TEST2_VAR1,
  payload: val,
});

const setTest2Var2 = val => ({
  type: SET_TEST2_VAR2,
  payload: val,
});

const reducer2 = (state = initialState1, action) => {
  switch (action.type) {
    case SET_TEST2_VAR1:
      return {
        ...state,
        test2Var1: action.payload,
      };
    case SET_TEST2_VAR2:
      return {
        ...state,
        test2Var2: action.payload,
      };
    default:
      return state;
  }
};

describe("should createReducer correctly", () => {
  test("should only create state for existing reducer", () => {
    const initialState = {
      test1: initialState1,
      test2: initialState2,
    };

    const reducer = createReducer({
      test1: reducer1,
    });
    const createdState = reducer(initialState, {});
    expect(createdState).toStrictEqual({
      test1: { test1Var1: "foo", test1Var2: 1 },
    });
  });

  test("should create modified state for existing actions", () => {
    const initialState = {
      test1: initialState1,
    };

    const reducer = createReducer({
      test1: reducer1,
    });
    let createdState = reducer(initialState, setTest1Var1("bar"));
    createdState = reducer(createdState, setTest1Var2(12));
    expect(createdState).toStrictEqual({
      test1: { test1Var1: "bar", test1Var2: 12 },
    });
  });

  test("should create modified multi state for existing actions", () => {
    const initialState = {
      test1: initialState1,
      test2: initialState2,
    };

    const reducer = createReducer({
      test1: reducer1,
      test2: reducer2,
    });

    let createdState = reducer(initialState, setTest1Var1("bar"));
    createdState = reducer(createdState, setTest1Var2(12));
    createdState = reducer(createdState, setTest2Var1(true));
    createdState = reducer(createdState, setTest2Var2({ count: 12 }));
    expect(createdState).toStrictEqual({
      test1: { test1Var1: "bar", test1Var2: 12 },
      test2: { test2Var1: true, test2Var2: { count: 12 } },
    });
  });
});
