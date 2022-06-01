// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];

// ============= Your Code Here =============
/**
 * 方案一：使用 in keyof 来遍历元组
 */
declare function PromiseAll<P extends unknown[]>(
  values: readonly [...P]
): Promise<{ [U in keyof P]: P[U] extends Promise<infer K> ? K : P[U] }>;

/**
 * 方案二：使用解构以及递归来实现
 */
// declare function PromiseAll<P extends unknown[]>(
//   values: readonly [...P]
// ): Promise<A<P>>;

// type A<P extends unknown[]> = P extends [infer First, ...infer Rest]
//   ? [First extends Promise<infer U> ? U : First, ...A<Rest>]
//   : [];
