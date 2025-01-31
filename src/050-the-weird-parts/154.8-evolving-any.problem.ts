import { Equal, Expect } from "@total-typescript/helpers";

// If you have an undeclared variable, or empty array, with type any
// then it will automatically update it's type based on the value
// currently stored in it.
let selectedId;
selectedId = 123;

type test = Expect<Equal<typeof selectedId, number>>;

selectedId = "123";

type test2 = Expect<Equal<typeof selectedId, string>>;
