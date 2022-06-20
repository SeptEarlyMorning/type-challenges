// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<
    Equal<
      Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
      [string, number, 1, "a", 2, "b"]
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
];

// ============= Your Code Here =============
type IndexOf<T, U, R extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<U, First> extends true
    ? R["length"]
    : IndexOf<Rest, U, [...R, unknown]>
  : -1;

type Unique<T> = T extends [...infer Rest, infer Last]
  ? IndexOf<Rest, Last> extends -1
    ? [...Unique<Rest>, Last]
    : [...Unique<Rest>]
  : [];
