// This is fine, but it's really basic.
// interface Ingredient {
//   name: string;
//   quantity: string;
// }
interface Recipe {
  title: string;
  ingredients: Array<{
    name: string;
    quantity: string;
  }>
  instructions: string;
};

// If needed, derive subtypes from the array type
type Ingredient = Recipe['ingredients'][number];

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
