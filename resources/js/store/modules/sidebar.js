
export const state = {
  toggle: false
}

export const getters = {
  toggle: state => state.toggle
}

export const mutations = {
  toggleIt (state) {
    state.toggle = !state.toggle
  }
}
export const actions = {
  toggleIt ({ commit }) {
    commit('toggleIt')
  }
}
