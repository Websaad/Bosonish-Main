import axios from './index'

export default {
  find (id) {
    return axios.get(`/settings/options/${id}`)
  },
  get (data = {}) {
    return axios.get('/settings/options', { params: data })
  },
  save (item) {
    return item.post('/api/settings/options/store')
  },
  delete (id) {
    return axios.delete(`/settings/options/${id}/delete`)
  }
}
