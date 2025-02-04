// I like that creating a union type of all valid routes will prevent users
// from trying to access routes that don't exist.
type AbsoluteRoute = `/${"home" | "about" | "contact"}`;
// type AbsoluteRoute = `/${string}`;

const goToRoute = (route: AbsoluteRoute) => {
  // ...
};

goToRoute("/home");
goToRoute("/about");
goToRoute("/contact");

goToRoute(
  // @ts-expect-error
  "somewhere"
);
