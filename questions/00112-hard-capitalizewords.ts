// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<CapitalizeWords<"foobar">, "Foobar">>,
  Expect<Equal<CapitalizeWords<"FOOBAR">, "FOOBAR">>,
  Expect<Equal<CapitalizeWords<"foo bar">, "Foo Bar">>,
  Expect<Equal<CapitalizeWords<"foo bar hello world">, "Foo Bar Hello World">>,
  Expect<Equal<CapitalizeWords<"foo bar.hello,world">, "Foo Bar.Hello,World">>,
  Expect<Equal<CapitalizeWords<"">, "">>
];

// ============= Your Code Here =============
/**
 * 1、可以不用手写所有字母的联合类型来判断是否为字母，
 *    使用 Uppercase<First> extends Lowercase<First> 来判断是否为字母；
 * 2、Uppercase<StringType>：将所有字母变成大写；
 * 3、Lowercase<StringType>：将所有字母变成小写；
 * 4、Capitalize<StringType>：将首字母变成大写；
 * 5、Uncapitalize<StringType>：将首字母变成小写/
 */

/**
 * 方法一：使用标识，来判断是否为单词首字母
 */
// type CapitalizeWords<
//   S extends string,
//   F extends boolean = true
// > = S extends `${infer First}${infer Rest}`
//   ? `${F extends true
//       ? Capitalize<First>
//       : First}${Uppercase<First> extends Lowercase<First>
//       ? CapitalizeWords<Rest, true>
//       : CapitalizeWords<Rest, false>}`
//   : "";

/**
 * 方法二：开来写
 */
type CapitalizeWord<S> = S extends `${infer First}${infer Rest}`
  ? `${First}${CapitalizeWord<
      Uppercase<First> extends Lowercase<First> ? Capitalize<Rest> : Rest
    >}`
  : S;

type CapitalizeWords<S extends string> = CapitalizeWord<Capitalize<S>>;
