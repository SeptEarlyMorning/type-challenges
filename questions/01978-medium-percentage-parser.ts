// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Case0 = ["", "", ""];
type Case1 = ["+", "", ""];
type Case2 = ["+", "1", ""];
type Case3 = ["+", "100", ""];
type Case4 = ["+", "100", "%"];
type Case5 = ["", "100", "%"];
type Case6 = ["-", "100", "%"];
type Case7 = ["-", "100", ""];
type Case8 = ["-", "1", ""];
type Case9 = ["", "", "%"];
type Case10 = ["", "1", ""];
type Case11 = ["", "100", ""];

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>
];

// ============= Your Code Here =============
type Prefix = "+" | "-";

type Suffix = "%";

/**
 * 递归写法
 */
// type PercentageParser<
//   A extends string,
//   P extends string[] = ['', '', '']
// > = A extends `${infer First}${infer Rest}`
//   ? PercentageParser<
//       Rest,
//       First extends Prefix
//         ? [First, '', '']
//         : First extends Suffix
//         ? [P[0], P[1], `${P[2]}${First}`]
//         : [P[0], `${P[1]}${First}`, '']
//     >
//   : P;

/**
 * 解析前缀
 */
type ParsePrefix<A> = A extends `${infer First}${infer Rest}`
  ? First extends Prefix
    ? First
    : ""
  : "";

/**
 * 解析中间数字
 */
type ParseNumber<A> =
  A extends `${ParsePrefix<A>}${infer Number}${ParseSuffix<A>}` ? Number : A;

/**
 * 解析后缀
 */
type ParseSuffix<A> = A extends `${string}${Suffix}` ? Suffix : "";

type PercentageParser<A extends string> = [
  ParsePrefix<A>,
  ParseNumber<A>,
  ParseSuffix<A>
];
