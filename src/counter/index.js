const counterReducer = (state, action) => {
  const { type } = action;
  if (type === "@counter/incremented") {
    return state + 1;
  }
};

const actionIncremented = {
  type: "@counter/incremented",
};

counterReducer(0, "actionIncremented");
