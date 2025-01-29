import { Extends, Expect } from "@total-typescript/helpers";

interface WithId {
  id: string;
}
interface WithCreatedAt {
  createdAt: Date;
}

// Extend an interface with multiple interfaces
interface User extends WithId, WithCreatedAt {
  name: string;
  email: string;
}

interface Product extends WithCreatedAt, WithId {
  name: string;
  price: number;
};

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
