import axios from 'axios';
import { getCookie } from './utils';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  withCredentials: true
});

api.interceptors.request.use(
  (config) => {
    const { token } = useContext(AuthContext);
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    const csrfToken = getCookie('csrftoken');
    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
