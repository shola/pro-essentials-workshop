export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: string) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
