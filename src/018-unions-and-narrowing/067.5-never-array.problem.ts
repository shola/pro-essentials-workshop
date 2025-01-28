// Make sure to give array items a type, so it doesn't
// default to "never" for empty lists
const shoppingCart: {
  items: Array<string>;
} = {
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");
