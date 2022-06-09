// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];

// ============= Your Code Here =============
type FlipArguments<T, P extends unknown[] = []> = T extends (
  ...args: infer U
) => infer O
  ? U extends [infer First, ...infer Rest]
    ? FlipArguments<(...args: Rest) => O, [First, ...P]>
    : (...args: P) => O
  : T;

type a = FlipArguments<() => boolean>;
