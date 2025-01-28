import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";

// Give shape to parsed JSON data. This is not a runtime check, so if the JSON
// text is malformed, you won't get an error. This is a zod use case.
const parsedData: {
  name: string;
  age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');

type test = Expect<
  Equal<
    typeof parsedData,
    {
      name: string;
      age: number;
    }
  >
>;

it("Should be the correct shape", () => {
  expect(parsedData).toEqual({
    name: "Alice",
    age: 30,
  });
});
