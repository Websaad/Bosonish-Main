import axios from './index'

export default {
  find (id) {
    return axios.get(`/settings/user/${id}`)
  },
  get (data = {}) {
    return axios.get('/settings/users', { params: data })
  },
  save (item) {
    return item.post('/api/settings/users/store')
  },
  delete (id) {
    return axios.delete(`/settings/users/${id}/delete`)
  },
  archive (ids) {
    return axios.post('/settings/users/archive', { ids })
  }
}
