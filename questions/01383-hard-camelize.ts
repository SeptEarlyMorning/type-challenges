// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [{ snake_case: string }];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [{ snakeCase: string }];
      }
    >
  >
];
// ============= Your Code Here =============
type Transform<K extends string> = K extends `${infer A}_${infer B}`
  ? `${Capitalize<A>}${Transform<B>}`
  : Capitalize<K>;

type CamelizeArr<T> = T extends [infer First, ...infer Rest]
  ? [Camelize<First>, ...CamelizeArr<Rest>]
  : [];

type Camelize<T> = T extends object
  ? {
      [K in keyof T as K extends `${infer A}_${infer B}`
        ? `${A}${Transform<B>}`
        : K]: T[K] extends unknown[] ? CamelizeArr<T[K]> : Camelize<T[K]>;
    }
  : T;
