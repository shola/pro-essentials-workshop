function printNamesReadonly(names: readonly string[]) {
  for (const name of names) {
    console.log(name);
  }
}

function printNamesMutable(names: string[]) {
  for (const name of names) {
    console.log(name);
  }
}

// Mutable arrays are assignable to readonly arrays

const mutableNames = ["John", "Jane", "Mike"];

printNamesReadonly(mutableNames);
printNamesMutable(mutableNames);

// Readonly arrays are NOT assignable to mutable arrays

const readonlyNames = ["John", "Jane", "Mike"] as const;

printNamesReadonly(readonlyNames);
// this is the easiest way to make a readonly array act like a mutable one.
// This feels wrong. It's better to just not pass a readonly array as a mutable
// one.
printNamesMutable(readonlyNames as unknown as string[]);
