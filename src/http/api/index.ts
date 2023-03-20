import axios, { InternalAxiosRequestConfig } from 'axios';
import { localStorageTokenKey } from '../../constants/auth';

export const API_URL = 'http://localhost:4000';

export const $api = axios.create({
  baseURL: API_URL,
});

export const $authApi = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig<unknown>) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(localStorageTokenKey)}`;
  return config;
};

$authApi.interceptors.request.use(authInterceptor);
