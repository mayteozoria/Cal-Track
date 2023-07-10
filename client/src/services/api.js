import Axios from 'axios'
export const BASE_URL = 'https://api.calorieninjas.com/v1/nutrition?query='
export const API_KEY = import.meta.env.VITE_NINJA_KEY

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
