// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

// ============= Your Code Here =============
/**
 * Expect<Equal<MinusOne<1101>, 1100>> 此 case，由于数值过大会在无法通过，
 * 详见：https://github.com/type-challenges/type-challenges/issues/2563。
 */
type MinusOne<T extends number, P extends unknown[] = []> = [
  "",
  ...P
]["length"] extends T
  ? P["length"]
  : MinusOne<T, ["", ...P]>;
