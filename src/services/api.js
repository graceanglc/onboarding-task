import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.API_URL,
  responseType: 'json',
});

export default instance;

export async function login({ username, password }) {
  return instance.post('/login/', { username, password });
}

export async function getStores(params) {
  return instance.get('/stores/', { params });
}

export async function getStoreData({ id }) {
  return instance.get(`/stores/${id}/`);
}
