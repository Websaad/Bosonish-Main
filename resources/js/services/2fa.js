import axios from './index'

export default {
  get () {
    return axios.get('2fa')
  },
  enable (item) {
    return axios.post('2fa/enable', item)
  },
  disable (item) {
    return axios.post('2fa/disable', item)
  },
  generate () {
    return axios.post('2fa/generate')
  },
  regenerate () {
    return axios.post('2fa/regenerate')
  },
  verify (form) {
    return axios.post('2fa/verify', form)
  }
}
