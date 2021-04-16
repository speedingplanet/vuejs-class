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
  },
  actions: {},
  getters: {},
};
