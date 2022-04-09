import { createStore, MutationTree } from 'vuex'

const mutations: MutationTree<any> = {
  increment (state: any) {
    state.count++
  }
}

export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: mutations
})