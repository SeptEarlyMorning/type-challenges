// ============= Test Cases =============
import type { Alike, Expect } from "./test-utils";

declare const a: Chainable;

const result1 = a
  .option("foo", 123)
  .option("bar", { value: "Hello World" })
  .option("name", "type-challenges")
  .get();

const result2 = a
  .option("name", "another name")
  // @ts-expect-error
  .option("name", "last name")
  .get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

// ============= Your Code Here =============
/**
 * 1. option 函数返回的应还是 Chainable。
 * 2. 由于需要记录传入参数，所以 Chainable 类型应传入一个对象类型来记录，
 *    并设置默认值为 {} 类型，最后在 get 方法中返回出去。
 * 3. option 方法中 key 的类型需要判断是否已存在。
 */
type Chainable<T = {}> = {
  option<K extends string, U>(
    key: K extends keyof T ? never : K,
    value: U
  ): Chainable<{ [P in K]: U } & T>;
  get(): T;
};
