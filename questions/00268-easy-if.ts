// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;

// ============= Your Code Here =============
/**
 * 1. 非严格模式下 null extends boolean。
 * 2. 创建 tsconfig.json，并设置为严格模式 "strict": true。
 */
type If<C extends boolean, T, F> = C extends true ? T : F;
