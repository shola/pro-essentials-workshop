import { expect, it } from "vitest";

function validateUsername(username: string | null): boolean {
  // Rewrite this function to make the error go away
  return username === null ? false : username.length > 5;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
