// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

// ============= Your Code Here =============
type Reverse<T> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : [];
