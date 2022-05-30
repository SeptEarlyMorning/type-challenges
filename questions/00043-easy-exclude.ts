// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];

// ============= Your Code Here =============
/**
 * 1. 当 extends 第一个参数为泛型，且传入的为联合类型，
 *    则使用“分配律”赖处理，即将联合类型的联合项拆成单项，分别代入条件类型，
 *    然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
 * 2. 那么如何取消“分配律”，使传入的联合类型为一个整体呢？
 *    使用 [] 将参数包裹起来即可，如 [T] extends [U]
 */
type MyExclude<T, U> = T extends U ? never : T;
