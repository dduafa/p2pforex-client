import axios from 'axios';

const api = axios.create();
// process.env.REACT_APP_API_ENDPOINT;
api.interceptors.request.use(
  async (config) => {
    config.baseURL = 'http://localhost:5000';
    let accessToken = await localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
