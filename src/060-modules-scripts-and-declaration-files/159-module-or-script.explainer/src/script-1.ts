// script files do not have any import/export/top-level-await.
// they are meant to be concatenated together, and will all live
// in a global scope.

const myFunc = () => {
  console.log("Hello!");
};
