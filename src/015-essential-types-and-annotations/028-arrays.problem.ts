// CODE

// How do we type 'items' in the ShoppingCart?
// Prefer using Array type with type param because it's better to know
// the less obvious ways of doing things. And perhaps this is closer
// to the reality under the hood.
type ShoppingCart = {
  userId: string;
  items: Array<string>;
};

// TESTS

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});
