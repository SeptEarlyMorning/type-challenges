// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];

// ============= Your Code Here =============
type Merge<T> = { [P in keyof T]: T[P] };

type PartialByKeys<T, K extends string | number | symbol = keyof T> = Merge<
  Omit<T, K & keyof T> & { [P in keyof T & K]?: T[P] }
>;
