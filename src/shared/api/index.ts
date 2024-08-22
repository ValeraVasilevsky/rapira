import axios from 'axios';
import { API_URL } from '../constants';

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
