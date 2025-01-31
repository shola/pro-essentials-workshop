type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes = {
  type: "button",
} satisfies ButtonAttributes;

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
] satisfies Array<ButtonAttributes>;

modifyButtons(buttonsToChange);
