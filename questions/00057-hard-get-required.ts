// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >
];

// ============= Your Code Here =============
/**
 * 方法一：
 * 1、必要的是 key 不能有 ? 修饰，但类型可以为 undefined，
 *    所以有两种情况：类型不是 undefined 和类型是 undefined 的。
 * 2、类型不是 undefined：见 DelUndefined<T> 类型。
 * 3、类型是 undefined：可以通过先将类型全部转为必选，
 *    在将类型是 undefined 的提取出来即可。
 * 4. 最后合并。
 */
// type DelUndefined<T> = {
//   [K in keyof T as undefined extends T[K] ? never : K]: T[K];
// };

// type GetUndefined<T> = {
//   [K in keyof T as undefined extends T[K] ? K : never]: T[K];
// };

// type GetRequired<T> = {
//   [K in keyof DelUndefined<T> | keyof GetUndefined<Required<T>>]: T[K];
// };

/**
 * 方法二：
 * 直接判断原始类型是否继承于转为必选后的类型。是，则取出 key。
 */
type GetRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};
