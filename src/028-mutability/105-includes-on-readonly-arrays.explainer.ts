// Try uncommenting this!
// import "@total-typescript/ts-reset";

const users = ["matt", "sofia", "waqas"] as const;

// @ts-expect-error any string is not included in the readonly array
users.includes("bryan");

// @ts-expect-error any string is not included in the readonly array
users.indexOf("bryan");
