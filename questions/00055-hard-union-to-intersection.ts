// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >
];

// ============= Your Code Here =============
/**
 * 1. 使用了逆变。下面是一篇很好的解释了逆变这一概念的文章：
 *    https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html
 */
type UnionToIntersection<U, P = U> = (
  U extends P ? (a: U) => void : never
) extends (a: infer A) => void
  ? A
  : never;
