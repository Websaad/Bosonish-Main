import axios from 'axios'
export default axios.create({
  baseURL: window.origin + '/api/'
})
