import axios from './index'

export default {
  find (id) {
    return axios.get(`/settings/activity/${id}`)
  },
  get (data = {}) {
    return axios.get('/settings/activities', { params: data })
  }
}
