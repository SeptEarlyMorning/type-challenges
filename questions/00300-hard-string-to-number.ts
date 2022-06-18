// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<ToNumber<"0">, 0>>,
  Expect<Equal<ToNumber<"5">, 5>>,
  Expect<Equal<ToNumber<"12">, 12>>,
  Expect<Equal<ToNumber<"27">, 27>>
];

// ============= Your Code Here =============
type ToNumber<
  S extends string,
  U extends unknown[] = []
> = S extends `${U["length"]}` ? U["length"] : ToNumber<S, [...U, unknown]>;
