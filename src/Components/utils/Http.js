import axios from "axios";
const BASE_URL = 'http://localhost:5000'
const axiosApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});

axiosApiInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');
    config.headers = {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });
export default axiosApiInstance;