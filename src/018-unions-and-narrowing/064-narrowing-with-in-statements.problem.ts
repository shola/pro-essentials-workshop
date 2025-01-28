import { expect, it } from "vitest";

type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?
  // Narrow between union types by checking for membership of
  // particular fields. Similar to a discriminated union,
  // although there is no discriminant property on each type.
  if ("data" in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};

it("Should handle a response with data", () => {
  const response = {
    data: {
      id: "123",
    },
  };

  expect(handleResponse(response)).toBe("123");
});

it("Should handle a response with an error", () => {
  const response = {
    error: "Something went wrong",
  };

  expect(() => handleResponse(response)).toThrow("Something went wrong");
});
