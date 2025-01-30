import { expect, it } from "vitest";

class CanvasNode {
  // setting constructor param types to be private or readonly
  // will create them as instance variables
  constructor(
    private x: number,
    private y: number
  ) {}

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get position() {
    return { x: this.x, y: this.y };
  }
}

it("Should start in the given position", () => {
  const node = new CanvasNode(10, 20);
  expect(node.position).toEqual({ x: 10, y: 20 });
});
