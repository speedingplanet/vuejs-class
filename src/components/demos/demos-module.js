export const demosModule = {
  state: {
    counter: 0,
  },
  mutations: {
    increment( state ) {
      state.counter++;
    },
    decrement( state ) {
      state.counter--;
    },
    addVal( state, val ) {
      state.counter = state.counter + val;
    },
  },
  actions: {},
  getters: {},
};
