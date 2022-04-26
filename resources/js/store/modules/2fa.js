
import Twofa from '~/services/2fa'
import { TWO_FA_ACTIONS } from '../action-types'
import { TWO_FA_MUTATIONS } from '../mutation-types'

// state
export const state = {
  qrCode: null,
  recoveryCodes: [],
  twoFactorEnabled: 0
}

// getters
export const getters = {
  qrCode: state => state.qrCode,
  recoveryCodes: state => state.recoveryCodes,
  twoFactorEnabled: state => state.twoFactorEnabled
}
export const mutations = {

  [TWO_FA_MUTATIONS.GET] (state, { data }) {
    state.qrCode = data.qrCode
    state.recoveryCodes = data.recoveryCodes
    state.twoFactorEnabled = data.two_factor_enabled
  },
  [TWO_FA_MUTATIONS.REGENERATE] (state, { data }) {
    state.recoveryCodes = data.recoveryCodes
  }
}

// actions

export const actions = {
  [TWO_FA_ACTIONS.RESET] ({ commit }) {
    commit(TWO_FA_MUTATIONS.RESET)
  },
  async [TWO_FA_ACTIONS.GET] ({ commit }) {
    const { data } = await Twofa.get()
    commit(TWO_FA_MUTATIONS.GET, { data })
  },
  async [TWO_FA_ACTIONS.GENERATE] ({ commit }) {
    return Twofa.generate()
  },
  async [TWO_FA_ACTIONS.REGENERATE] ({ commit }) {
    const { data } = await Twofa.regenerate()
    commit(TWO_FA_MUTATIONS.REGENERATE, { data })
  },
  async [TWO_FA_ACTIONS.ENABLE] ({ commit }, data) {
    return Twofa.enable(data)
  },
  async [TWO_FA_ACTIONS.DISABLE] ({ commit }, data) {
    return Twofa.disable(data)
  },
  async [TWO_FA_ACTIONS.VERIFY] ({ commit }, data) {
    return Twofa.verify(data)
  }

}
