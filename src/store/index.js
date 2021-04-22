import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    setCount(state) {
      state.count++;
    },
  },
});

export default store;
