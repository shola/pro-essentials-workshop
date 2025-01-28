import { Expect, Equal } from "@total-typescript/helpers";

// CODE

const add = (a: number, b: number): number => {
  return a + b;
};

// TESTS

const result = add(1, 2);

// A type just to test the return value is interesting...
// In practice, you'd just set a return type
type test = Expect<Equal<typeof result, number>>;
