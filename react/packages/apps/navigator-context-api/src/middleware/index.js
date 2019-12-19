import { initial, final } from "./log";

export default ({ state, action, handler }) => {
  const chain = [initial, handler, final];

  return chain.reduce((st, fn) => {
    console.log("st: ", st);
    console.log("fn: ", fn);

    const ret = fn(st, action);
    console.log("ret: ", ret);

    return ret;
  }, state);
};
