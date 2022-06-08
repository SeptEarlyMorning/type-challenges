// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>
];

// ============= Your Code Here =============
/**
 * 1、使用 -? 来取消可选。
 *    详见 https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers。
 * 2、使用 -? 时，key 必须时从相应的对象类型中遍历然后过滤出来，
 *    例：[P in keyof T as P extends K ? P : never]-?: T[P]; √
 *       [P in (keyof T & K)]-?: T[P]; ×
 */
type Merge<T> = {
  [K in keyof T]: T[K];
};

type RequiredByKeys<T, K = keyof T> = Merge<
  {
    [P in keyof T as P extends K ? P : never]-?: T[P];
  } & Omit<T, K & keyof T>
>;

type a = RequiredByKeys<User, "name">;
