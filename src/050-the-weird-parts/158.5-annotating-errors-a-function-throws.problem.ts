/**
 * How do we annotate the errors this function throws?
 */

type PossibleErrors = SyntaxError | DOMException;

const getUserFromLocalStorage = (id: string) => {
  const user = localStorage.getItem(id);
  if (!user) {
    return {
      success: true,
      data: undefined,
    };
  }

  return {
    success: true,
    data: JSON.parse(user),
  };
};

try {
  const user = getUserFromLocalStorage("user-1");
} catch (
  // How do we make this typed as PossibleErrors?
  e
) {
  if (e instanceof DOMException || e instanceof SyntaxError) {
    console.error(e);
  }
}
