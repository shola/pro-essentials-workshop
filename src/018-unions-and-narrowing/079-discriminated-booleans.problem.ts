import { Equal, Expect } from "@total-typescript/helpers";

type User = {
  id: string;
};

type ApiResponse =
  | [isSuccess: true, json: Array<User>]
  | [isSuccess: false, errorMsg: string];

async function fetchData(): Promise<ApiResponse> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      return [
        false,
        // Imagine more detailed error handling here
        "An error occurred",
      ];
    }

    const data: Array<User> = await response.json();
    // This data should probably be checked with zod and throw
    // if the structure doesn't match.
    return [true, data];
  } catch (error) {
    return [false, "An error occurred"];
  }
}

async function exampleFunc() {
  const [succeeded, value] = await fetchData();

  if (succeeded) {
    console.log(value);
    type test = Expect<Equal<typeof value, User[]>>;
  } else {
    console.error(value);

    type test = Expect<Equal<typeof value, string>>;
  }
}
