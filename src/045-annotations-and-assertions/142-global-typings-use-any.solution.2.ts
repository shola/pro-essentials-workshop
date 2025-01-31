// Uncomment this line to see a stricter JSON.parse!
// import "@total-typescript/ts-reset";

import { expect, it } from "vitest";

const getObj = () => {
  const obj = JSON.parse('{ "a": 123, "b": 456 }');

  return obj as unknown as {
    a: number;
    b: number;
  };
};

it("Should return an obj", () => {
  const obj = getObj();

  expect(obj.b).toEqual(456);

  expect(
    // @ts-expect-error c doesn't exist on obj
    obj.c,
  ).toEqual(undefined);
});
