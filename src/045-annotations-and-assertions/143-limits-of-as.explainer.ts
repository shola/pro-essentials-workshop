// Basic primitives do not have 'sufficient overlap'
// with each other

const num1 = "hello" as number;

// if you add an unknown/any/never type assertion, followed by
// another type assertion, you completely disconnect from type
// enforcement. Only do when you're 100% sure of the shape of data
const num2 = "hello" as unknown as number;

const num3 = "hello" as any as number;

const num4 = "hello" as never as number;

// Objects with ZERO compatible properties also don't
// have 'sufficient overlap'

interface Dog {
  bark(): void;
}

const cat = {
  meow() {},
};

const dog1 = cat as Dog;

const dog2 = cat as unknown as Dog;

const dog3 = cat as any as Dog;

const dog4 = cat as never as Dog;
