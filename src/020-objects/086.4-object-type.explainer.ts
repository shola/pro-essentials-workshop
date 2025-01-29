const acceptAllNonPrimitiveTypes = (input: object) => {};

acceptAllNonPrimitiveTypes({});
acceptAllNonPrimitiveTypes([]);
acceptAllNonPrimitiveTypes(() => {});
// I forget that regexps are objects
acceptAllNonPrimitiveTypes(/foo/);
acceptAllNonPrimitiveTypes(new Error("foo"));

// This one is surprising since `typeof null` returns `object`...
acceptAllNonPrimitiveTypes(
  // @ts-expect-error
  null,
);
acceptAllNonPrimitiveTypes(
  // @ts-expect-error
  undefined,
);
acceptAllNonPrimitiveTypes(
  // @ts-expect-error
  "hello",
);
acceptAllNonPrimitiveTypes(
  // @ts-expect-error
  42,
);
acceptAllNonPrimitiveTypes(
  // @ts-expect-error
  true,
);
acceptAllNonPrimitiveTypes(
  // @ts-expect-error
  Symbol("foo"),
);
