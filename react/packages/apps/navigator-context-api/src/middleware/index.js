import { initial, final } from "./log";

export default ({ state, action, handler }) => {
  const chain = [initial, handler, final];

  return chain.reduce((st, fn) => fn(st, action), state);
};
