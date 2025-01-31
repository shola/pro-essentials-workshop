import { Equal, Expect } from "@total-typescript/helpers";

type Event = "click" | "hover" | "scroll";

// Even if only 1 of the parameters from CallbackType's param list
// is used, the signature is still valid. Something to remember
// instead of overloading functions!
type CallbackType = (
  event: Event,
  x: number,
  y: number,
  screenId: number
) => void;

const listenToEvent = (callback: CallbackType) => {};

listenToEvent(() => {});

listenToEvent((event) => {
  type tests = [Expect<Equal<typeof event, Event>>];
});

listenToEvent((event, x, y) => {
  type tests = [
    Expect<Equal<typeof event, Event>>,
    Expect<Equal<typeof x, number>>,
    Expect<Equal<typeof y, number>>,
  ];
});

listenToEvent((event, x, y, screenId) => {
  type tests = [
    Expect<Equal<typeof event, Event>>,
    Expect<Equal<typeof x, number>>,
    Expect<Equal<typeof y, number>>,
    Expect<Equal<typeof screenId, number>>,
  ];
});
