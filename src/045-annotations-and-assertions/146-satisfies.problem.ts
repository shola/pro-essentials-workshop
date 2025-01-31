type Color =
  | string
  | {
      r: number;
      g: number;
      b: number;
    };

    /**
     * using satisfies allows each field of an object to narrow
     * the type of it's value
     * 
     * satisfies can also infer generic type parameters
     */
const config = {
  foreground: { r: 255, g: 255, b: 255 },
  background: { r: 0, g: 0, b: 0 },
  border: "transparent",
} satisfies Record<string, Color>;

config.border.toUpperCase();

console.log(config.foreground.r);

// @ts-expect-error
config.primary;

// @ts-expect-error
config.secondary;
