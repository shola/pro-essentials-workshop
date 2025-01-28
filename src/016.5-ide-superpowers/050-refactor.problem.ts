const func = () => {
  // Refactor this to be its own function
  const randomPercentage = getRandPercentage();
  console.log(randomPercentage);
};

function getRandPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
