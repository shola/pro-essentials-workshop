type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

// creating this as a readonly, const object, sets the value of `type`
// to be "button", not string. Since that matches one of the strings in
// ButtonAttributes['type'], this object is structurally a ButtonAttributes
// type
const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

// Annotating the object is more straightforward and works
const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);
