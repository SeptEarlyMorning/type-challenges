// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type Without<
  T extends unknown[],
  U extends unknown[] | unknown,
  R = U extends unknown[] ? U[number] : U
> = T extends [infer First, ...infer Rest]
  ? First extends R
    ? Without<Rest, U>
    : [First, ...Without<Rest, U>]
  : [];
