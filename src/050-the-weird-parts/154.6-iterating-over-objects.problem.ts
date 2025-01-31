import { expect, it, vitest } from "vitest";

interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  Object.keys(user).map((key) => {
    // I wish there was a way I could use the keys from object.keys
    // without having to assert that the key is actually a key of User.
    console.log(user[key as keyof User]);
  });
}

it("Should log all the keys of the user", () => {
  const consoleSpy = vitest.spyOn(console, "log");

  printUser({
    id: 1,
    name: "Waqas",
  });

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith("Waqas");
});
