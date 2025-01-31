// In typescript, the empty object represents all types except
// for undefined and null.
const acceptAnythingExceptNullOrUndefined = (input: {}) => {};

// Empty object may be useful as a constraint for a type param
// <T extends {}>(entity: T) => entity
acceptAnythingExceptNullOrUndefined("hello");
acceptAnythingExceptNullOrUndefined(42);
acceptAnythingExceptNullOrUndefined(true);
acceptAnythingExceptNullOrUndefined(Symbol("foo"));
acceptAnythingExceptNullOrUndefined({});
acceptAnythingExceptNullOrUndefined([]);
acceptAnythingExceptNullOrUndefined(() => {});
acceptAnythingExceptNullOrUndefined(/foo/);
acceptAnythingExceptNullOrUndefined(new Error("foo"));

acceptAnythingExceptNullOrUndefined(
  // @ts-expect-error
  null
);
acceptAnythingExceptNullOrUndefined(
  // @ts-expect-error
  undefined
);
