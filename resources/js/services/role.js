import axios from './index'

export default {
  find (id) {
    return axios.get(`/settings/roles/${id}`)
  },
  get (data = {}) {
    return axios.get('/settings/roles', { params: data })
  },
  save (item) {
    return item.post('/api/settings/roles/store')
  },
  delete (id) {
    return axios.delete(`/settings/roles/${id}/delete`)
  },
  getRoles () {
    return axios.get('/settings/roles/all')
  },
  assign (item) {
    return item.post('/api/settings/roles/assign')
  }
}
