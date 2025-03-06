import axios from 'axios';
import queryString from 'query-string';

export const httpClient = axios.create({
  withCredentials: false,
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 2 * 60 * 1000,
  paramsSerializer: {
    ...axios.defaults.paramsSerializer,
    serialize: params => queryString.stringify(params, { arrayFormat: 'comma' }),
  },
});
