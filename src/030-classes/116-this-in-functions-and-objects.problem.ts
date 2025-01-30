import { it, expect } from "vitest";

// give `this` a type. it's a "fake" parameter, used by typescript.
function add(this: { x: number; y: number }) {
  return this.x + this.y;
}

function setValues(this: { x: number; y: number }, x: number, y: number) {
  this.x = x;
  this.y = y;
};

it("Should add the numbers together", () => {
  const calculator = {
    x: 0,
    y: 0,

    add,
    setValues,
  };

  calculator.setValues(1, 2);

  expect(calculator.add()).toEqual(3);
});
