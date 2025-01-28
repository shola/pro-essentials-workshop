// Use typeof to narrow union types

const convertTime = (time: string | number) => {
  if (typeof time === "string") {
    console.log(time); // string
  } else {
    console.log(time); // number
  }

  console.log(time); // string | number
};
