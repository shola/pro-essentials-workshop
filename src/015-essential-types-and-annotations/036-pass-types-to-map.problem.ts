// CODE

const userMap = new Map<number, {name: string, age: number}>();

// Infer the value type of the map object. This may be useful when
// you're unable to modify the types of some library, but want an
// easy to reference value type from a Map type
type User = typeof userMap extends Map<number, infer I> ? I : never;
// TESTS

userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });

// @ts-expect-error
userMap.set("3", { name: "Anna", age: 29 });

// @ts-expect-error
userMap.set(3, "123");
