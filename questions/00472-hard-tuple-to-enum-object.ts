// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const OperatingSystem = ["macOS", "Windows", "Linux"] as const;
const Command = [
  "echo",
  "grep",
  "sed",
  "awk",
  "cut",
  "uniq",
  "head",
  "tail",
  "xargs",
  "shift",
] as const;

type cases = [
  Expect<Equal<Enum<[]>, {}>>,
  Expect<
    Equal<
      Enum<typeof OperatingSystem>,
      {
        readonly MacOS: "macOS";
        readonly Windows: "Windows";
        readonly Linux: "Linux";
      }
    >
  >,
  Expect<
    Equal<
      Enum<typeof OperatingSystem, true>,
      {
        readonly MacOS: 0;
        readonly Windows: 1;
        readonly Linux: 2;
      }
    >
  >,
  Expect<
    Equal<
      Enum<typeof Command>,
      {
        readonly Echo: "echo";
        readonly Grep: "grep";
        readonly Sed: "sed";
        readonly Awk: "awk";
        readonly Cut: "cut";
        readonly Uniq: "uniq";
        readonly Head: "head";
        readonly Tail: "tail";
        readonly Xargs: "xargs";
        readonly Shift: "shift";
      }
    >
  >,
  Expect<
    Equal<
      Enum<typeof Command, true>,
      {
        readonly Echo: 0;
        readonly Grep: 1;
        readonly Sed: 2;
        readonly Awk: 3;
        readonly Cut: 4;
        readonly Uniq: 5;
        readonly Head: 6;
        readonly Tail: 7;
        readonly Xargs: 8;
        readonly Shift: 9;
      }
    >
  >
];

// ============= Your Code Here =============
type GetIndex<T extends readonly string[], K extends T[number], U extends unknown[] = []> = T extends readonly [infer First, ...infer Rest extends string[]]
  ? K extends First
    ? U["length"]
    : GetIndex<Rest, K, [...U, unknown]>
  : U["length"];

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as Capitalize<K>]: N extends true ? GetIndex<T, K> : K;
};

