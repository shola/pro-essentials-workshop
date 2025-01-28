import { Expect, Equal } from "@total-typescript/helpers";

async function fetchData() {
  const response = await fetch("https://api.example.com/data");

  // It's preferable to type the json response because that makes it more obvious to 
  // the rest of this function body how it should work with that data. Promise<number>
  // gets inferred.
  const data: number = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
