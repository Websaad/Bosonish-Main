import axios from './index'

export default {
  find (id) {
    return axios.get(`/settings/permissions/${id}`)
  },
  get (data = {}) {
    return axios.get('/settings/permissions', { params: data })
  },
  save (item) {
    return item.post('/api/settings/permissions/store')
  },
  delete (id) {
    return axios.delete(`/settings/permissions/${id}/delete`)
  },
  getUserPermissions () {

  },
  getRolePermissionsGroupWise (data) {
    return axios.get('/settings/permissions/groupwise', { params: data })
  },
  assignPermissions (data) {
    return axios.post('/settings/permissions/assign', data)
  }
}
