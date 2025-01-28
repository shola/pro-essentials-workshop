import { expect, it } from "vitest";

function validateUsername(username: string | null): boolean {
  // Why isn't this working?
  // Casting to boolean doesn't isolate the case
  // where the value is a string. Since string
  // can return false if empty, or true if not.
  const isUsernameOK = Boolean(username);

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
