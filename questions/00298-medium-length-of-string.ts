// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

// ============= Your Code Here =============
/**
 * 1. 使用了元组的 length 类型为一个 number 类型的常量这一特点
 */
type LengthOfString<
  S extends string,
  P extends readonly ""[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [...P, ""]>
  : P["length"];
