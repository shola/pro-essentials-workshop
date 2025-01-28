type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  const error = eventMap.get("error");
  if (error) {
    const { message } = error;
    throw new Error(message);
  }
};
