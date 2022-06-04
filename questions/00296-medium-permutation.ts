// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<never>, []>>
];

// ============= Your Code Here =============
type Permutation<T, P = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<P, T>>]
  : never;

/**
 * 一个特殊的解法，仅适用于 T 的类型为 string、number、symbol。
 */
// type Permutation<T extends keyof any> = [T] extends [never]
//   ? []
//   : {
//       [P in T]: [P, ...Permutation<Exclude<T, P>>];
//     }[T];
