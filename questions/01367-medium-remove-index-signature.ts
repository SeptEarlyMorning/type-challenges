// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
};

type FooBar = {
  [key: symbol]: any;
  foobar(): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { foobar(): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];

// ============= Your Code Here =============
/**
 * 判断类型是否为 string | number | symbol
 */
type TypeFilter<K> = string extends K
  ? never
  : number extends K
  ? never
  : symbol extends K
  ? never
  : K;

type RemoveIndexSignature<T> = {
  [K in keyof T as TypeFilter<K>]: T[K];
};
