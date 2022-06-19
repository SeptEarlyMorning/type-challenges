// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Format<"abc">, string>>,
  Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
  Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>
];

// ============= Your Code Here =============
type PrintMap = {
  s: string;
  d: number;
};

type Format<T extends string> = T extends `${string}%${infer A}${infer B}`
  ? A extends keyof PrintMap
    ? (a: PrintMap[A]) => Format<B>
    : Format<B>
  : string;
