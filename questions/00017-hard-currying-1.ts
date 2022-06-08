// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
];

// ============= Your Code Here =============
type CurryingReturn<T, R> = T extends [infer First, ...infer Rest]
  ? (val: First) => CurryingReturn<Rest, R>
  : R;

declare function Currying<T>(
  fn: T
): T extends (...args: infer P) => infer R ? CurryingReturn<P, R> : never;
