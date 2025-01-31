import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[],
) => {
  // It feels like TypeScript should know that searchParams.name is
  // never undefined. But it doesn't, because the .filter function
  // is in a different scope from the searchParams.name check.
  // That doesn't make sense though, because the same isn't true when
  // the name field is deconstructed, or otherwise saved.
  if (searchParams.name) {
    return users.filter((user) => user.name.includes(searchParams.name!));
  }

  return users;
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ],
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
