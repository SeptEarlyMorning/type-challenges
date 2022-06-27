// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];

// ============= Your Code Here =============
/**
 * 自己想到的方法
 */
// type Merge<T> = {
//   [K in keyof T]: T[K];
// };

// type UnionToIntersection<T> = (
//   T extends T ? (a: T) => unknown : never
// ) extends (a: infer A) => unknown
//   ? A
//   : never;

// type ObjectFromEntries<T extends [string, unknown]> = Merge<
//   UnionToIntersection<T extends T ? { [K in T[0]]: T[1] } : never>
// >;

/**
 * 别人方法，非常简洁，但不太理解
 */
type ObjectFromEntries<T> = {
  [P in T & [keyof any, unknown] as P[0]]: P[1];
};
