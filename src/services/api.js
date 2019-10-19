import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(conf => {
  const token = getToken()
  const config = conf
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
