export const counter = {
  state: {
    number: 0,
  },
  reducers: {
    // handle state changes with pure functions
    increment(state) {
      return {
        number: state.number + 1,
      };
    },
    decrement(state) {
      return {
        number: state.number - 1,
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.counter.increment();
    },
    async decrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.counter.decrement();
    },
  }),
};
