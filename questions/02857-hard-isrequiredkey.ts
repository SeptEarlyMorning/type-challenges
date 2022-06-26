// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, "a">, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, "b">, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, "b" | "a">, false>>
];

// ============= Your Code Here =============
type IsRequiredKey<T, K extends keyof T> = T[K] extends Required<T>[K]
  ? true
  : false;
