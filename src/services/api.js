import axios from 'axios';
import config from '../config';
import 'babel-polyfill';

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

export async function signup({ email, password }) {
    return instance.post('/signup/', { email, password });
}

export async function login({ email, password }) {
    return instance.post('/login/', { email, password });
}

export async function getStores(params) {
    return instance.get('/stores/', { params });
}

export async function getStoreData({ id, payload }) {
    return instance.get(`/stores/${id}/`, payload);
}