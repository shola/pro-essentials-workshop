type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  bar: 1,
  foo: 'tester',
  baz: true
});

document.addEventListener(
  // Autocomplete this string!
  "",
  (event) => {
    console.log(event);
  },
);
