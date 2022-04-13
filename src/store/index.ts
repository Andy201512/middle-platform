import { createStore, MutationTree, ActionTree } from 'vuex'
import { getUserApi } from '@/utils/http/api'

const state = () => {
  return {
    count: 0,
    user: {
      avatar: 'https://joeschmoe.io/api/v1/random',
      firstName: '--',
      lastName: '--',
      email: '--',
      phone: '--',
    }
  }
}

const mutations: MutationTree<any> = {
  increment (state: any) {
    state.count++
  },
  saveUser(state: any, payload: any){
    Object.assign(state.user, payload)
  }
}

const actions: ActionTree<any, any> = {
  saveUserAsync({ commit }){
    getUserApi({}).then((res) => { commit('saveUser', res.data) });

  }
}

export const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
})