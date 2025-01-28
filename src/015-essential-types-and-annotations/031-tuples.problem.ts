import { Expect, Equal } from "@total-typescript/helpers";

// Since there must be 2 values in the tuple, and the first is x, and second y,
// just destructure the param to give those values more contextual meaning.
const setRange = ([x, y]: [number, number]) => {
  // const x = range[0];
  // const y = range[1];

  // Do something with x and y in here

  // x and y should both be numbers!
  type tests = [
    Expect<Equal<typeof x, number>>,
    Expect<Equal<typeof y, number>>,
  ];
};

setRange([0, 10]);

// @ts-expect-error string is not assignable to number
setRange([0, "10"]);

// @ts-expect-error too few arguments
setRange([0]);

// @ts-expect-error too many arguments
setRange([0, 10, 20]);
