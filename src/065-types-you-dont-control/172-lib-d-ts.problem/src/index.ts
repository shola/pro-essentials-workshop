const str = "Hello, world!";

// Since there is an issue with a built-in JS API (String), it's best to use the
// "lib" compiler option since that's what it's designed for.
str.replaceAll("Hello", "Goodbye");
