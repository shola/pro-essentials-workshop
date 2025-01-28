import { Expect, Equal } from "@total-typescript/helpers";

// Create a tuple type that makes it clear what each
// value signifies.
type Coordinate = [latitude: number, longitude: number, elevation?: number]

// Destructure the values
const goToLocation = ([latitude, longitude, elevation]: Coordinate) => {
  // Do something with latitude, longitude, and elevation in here

  type tests = [
    Expect<Equal<typeof latitude, number>>,
    Expect<Equal<typeof longitude, number>>,
    Expect<Equal<typeof elevation, number | undefined>>,
  ];
};

goToLocation([10, 20]);

// @ts-expect-error string is not assignable to number
goToLocation([10, "20"]);

goToLocation([10, 20, 30]);
