// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type cases = [
  Expect<Equal<DeepPick<Obj, "">, unknown>>,
  Expect<Equal<DeepPick<Obj, "a">, { a: number }>>,
  Expect<
    Equal<DeepPick<Obj, "a" | "obj.e">, { a: number } & { obj: { e: string } }>
  >,
  Expect<
    Equal<
      DeepPick<Obj, "a" | "obj.e" | "obj.obj2.i">,
      { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
    >
  >
];

// ============= Your Code Here =============
type UnionToIntersection<U, P = U> = (
  U extends P ? (a: U) => void : never
) extends (a: infer A) => void
  ? A
  : never;

type DeepPick<O, U> = UnionToIntersection<
  U extends `${infer A extends keyof O & string}.${infer Rest}`
  ? { [K in A]: DeepPick<O[A], Rest> }
  : U extends keyof O
  ? { [K in U]: O[U] }
  : never
>;
