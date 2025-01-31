import { Equal, Expect } from "@total-typescript/helpers";

interface User {
  id: number;
  name: string;
}

const users = [
  {
    name: "Waqas",
  },
  {
    name: "Zain",
  },
];

const usersWithIds: User[] = users.map((user, index) => ({
  ...user,
  id: index,
  age: 30,
}));

const userKeys = usersWithIds.map((user) => {
  // string is not assignable to type keyof User
  const keys: Array<keyof typeof user> = Object.keys(user);

  type test = Expect<Equal<typeof keys, Array<"id" | "name">>>;
  return keys;
});
