import { Extends, Expect } from "@total-typescript/helpers";

interface Base {
  id: string;
  createdAt: Date;
  name: string;
}

interface User extends Base {}
// Contrived, but this is how you extend an existing interface.
interface User {
  email: string;
}

interface Product extends Base {
  price: number;
}

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
