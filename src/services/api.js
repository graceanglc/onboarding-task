import axios from 'axios';
import config from '../config';
// import 'babel-polyfill';

const instance = axios.create({
  baseURL: config.API_URL,
  responseType: 'json',
});

export default instance;

export function configureResponseInterceptor(store) {
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        store.dispatch(logout());
      }
      return Promise.reject(error);
    }
  );
}

export async function login({ username, password }) {
  return instance.post('/login/', { username, password });
}

export async function getStores(params) {
  return instance.get('/stores/', { params });
}

export async function getStoreData({ id }) {
  return instance.get(`/stores/${id}/`);
}
