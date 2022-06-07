// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname;
    // @ts-expect-error
    this.getRandom();
    // @ts-expect-error
    this.data();

    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    hi() {
      alert(this.amount);
      alert(this.fullname.toLowerCase());
      alert(this.getRandom());
    },
    test() {
      const fullname = this.fullname;
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
    },
  },
});

// ============= Your Code Here =============
/**
 * ThisType 的使用，指定对象中的 this 类型。
 */
type Options<D, C, M> = {
  data: (this: {}) => D;
  computed: C;
  methods: M;
} & ThisType<
  D &
    M & {
      [K in keyof C]: C[K] extends () => infer R ? R : any;
    }
>;

declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any;
