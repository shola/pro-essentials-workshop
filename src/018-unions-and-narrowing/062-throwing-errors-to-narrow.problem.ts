import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

// How do I ensure that appElement is defined?
// Since throwing an error exits the current execution context,
// it's equivalent to narrowing with if/else statements, or returns
if (appElement === null) throw new Error("appElement must exist!");
type Test = Expect<Equal<typeof appElement, HTMLElement>>;
