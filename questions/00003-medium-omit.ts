// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
/**
 * 1. 使用 in keyof 将类型的 key 提取出来转为联合类型；
 * 2. 使用 Exclude 操作，排除 K 的类型成员；
 * 3. TypeScript 4.1 后，可以使用 as 重新映射类型。
//  */
/** 1 */
// type MyOmit<T, K extends keyof T> = {
//   [U in Exclude<keyof T, K>]: T[U];
// };

/** 2 */
type MyOmit<T, K extends keyof T> = {
  [U in keyof T as U extends K ? never : U]: T[U];
};
