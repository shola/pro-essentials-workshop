type UserPart = {
  // id: string;
  name: string;
  age: number;
};

// Manually merging properties seems like the best way to
// avoid incompatibility
type UserPart2 = {
  id: number | string;
  phone: string;
};

// Another pro of interfaces is that they are cached by the
// TS server.
interface User extends UserPart, UserPart2 {}

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};