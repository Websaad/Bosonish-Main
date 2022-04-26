import axios from './index'

export default {
  get (data = {}) {
    return axios.get('/settings/notifications', { params: data })
  },
  markAsRead (item) {
    return axios.post('/settings/notifications/read', { ids: item })
  },
  markAsUnread (item) {
    return axios.post('/settings/notifications/unread', { ids: item })
  }
}
