import { Store } from 'vuex'

const createStore = () => {
  return new Store({
    state() {
      return {
        count: 0,
      }
    },
    mutations: {
      countUp(state) {
        state.count++
      },
    },
  })
}
export default createStore
