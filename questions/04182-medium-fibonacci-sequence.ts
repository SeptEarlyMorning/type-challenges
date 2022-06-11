// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

// ============= Your Code Here =============
/**
 * A：当前斐波那契数的前一个。
 * B：当前斐波那契数。
 * U：记录计算到第几个。
 */
type Fibonacci<
  T extends number,
  A extends readonly unknown[] = [],
  B extends readonly unknown[] = [unknown],
  U extends readonly unknown[] = [unknown]
> = T extends U["length"]
  ? B["length"]
  : Fibonacci<T, B, [...A, ...B], [...U, unknown]>;
